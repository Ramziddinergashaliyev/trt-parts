import ExcelJS from "exceljs";
import html2pdf from "html2pdf.js";

const PDF_ROWS_PER_CHUNK = 25;

const formatList = (value) => {
  if (Array.isArray(value)) return value.filter(Boolean).join(", ");
  if (value === null || value === undefined) return "";
  return String(value);
};

const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const fileDate = () => new Date().toISOString().slice(0, 10);

const imageExtension = (url) => {
  const lower = (url || "").toLowerCase();
  if (lower.endsWith(".png")) return "png";
  if (lower.endsWith(".webp")) return "webp";
  if (lower.endsWith(".gif")) return "gif";
  return "jpeg";
};

const fetchImageBuffer = async (url) => {
  if (!url) return null;

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) return null;
    return response.arrayBuffer();
  } catch {
    return null;
  }
};

const fetchImageDataUrl = async (url) => {
  const buffer = await fetchImageBuffer(url);
  if (!buffer) return null;

  const blob = new Blob([buffer]);
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(typeof reader.result === "string" ? reader.result : null);
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(blob);
  });
};

const chunkItems = (items, size) => {
  const chunks = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
};

const PDF_STYLES = `
  .catalog-export { font-family: Arial, sans-serif; color: #111; padding: 16px; background: #fff; }
  .catalog-export h1 { color: #b71c1c; margin: 0 0 4px; font-size: 20px; }
  .catalog-export p { margin: 0 0 12px; color: #666; font-size: 11px; }
  .catalog-export table { width: 100%; border-collapse: collapse; font-size: 9px; }
  .catalog-export th, .catalog-export td { border: 1px solid #ddd; padding: 5px; vertical-align: top; color: #111; }
  .catalog-export th { background: #b71c1c; color: #fff; }
  .catalog-export tr:nth-child(even) { background: #fafafa; }
  .catalog-export .photo { width: 64px; height: 48px; object-fit: contain; display: block; }
  .catalog-export .photo-cell { text-align: center; width: 72px; }
`;

const TABLE_HEADER = `
  <thead>
    <tr>
      <th>TRT №</th>
      <th>OEM №</th>
      <th>CTR №</th>
      <th>LEMFÖRDER</th>
      <th>EN Name</th>
      <th>Contents</th>
      <th>RU Name</th>
      <th>Car</th>
      <th>Model</th>
      <th>Years</th>
      <th>Photo</th>
      <th>KG</th>
    </tr>
  </thead>
`;

const buildTableRows = async (items) => {
  const rows = await Promise.all(
    items.map(async (item) => {
      const dataUrl = await fetchImageDataUrl(item.photo);
      const photoCell = dataUrl
        ? `<img src="${dataUrl}" alt="${escapeHtml(item.trtNo)}" class="photo" />`
        : "—";

      return `
        <tr>
          <td>${escapeHtml(item.trtNo)}</td>
          <td>${escapeHtml(formatList(item.oemNo))}</td>
          <td>${escapeHtml(item.ctrNo)}</td>
          <td>${escapeHtml(item.lemforderNo)}</td>
          <td>${escapeHtml(item.englishName)}</td>
          <td>${escapeHtml(item.contents)}</td>
          <td>${escapeHtml(item.russianName)}</td>
          <td>${escapeHtml(formatList(item.carName))}</td>
          <td>${escapeHtml(formatList(item.model))}</td>
          <td>${escapeHtml(formatList(item.years))}</td>
          <td class="photo-cell">${photoCell}</td>
          <td>${escapeHtml(item.weightPerPcKg ?? "")}</td>
        </tr>
      `;
    }),
  );

  return rows.join("");
};

const buildChunkHtml = async (chunkItems, chunkIndex, totalItems) => {
  const rowsHtml = await buildTableRows(chunkItems);
  const isFirstChunk = chunkIndex === 0;

  const titleBlock = isFirstChunk
    ? `
        <h1>TRT Parts Catalog</h1>
        <p>Exported: ${escapeHtml(new Date().toLocaleString())} | Total: ${totalItems}</p>
      `
    : "";

  return `
    <div class="catalog-export">
      ${titleBlock}
      <table>
        ${isFirstChunk ? TABLE_HEADER : ""}
        <tbody>${rowsHtml}</tbody>
      </table>
    </div>
  `;
};

const waitForImages = (root) => {
  const images = [...root.querySelectorAll("img")];
  return Promise.all(
    images.map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete && img.naturalWidth > 0) {
            resolve();
            return;
          }
          img.onload = () => resolve();
          img.onerror = () => resolve();
          setTimeout(resolve, 8000);
        }),
    ),
  );
};

const PDF_OPTIONS = {
  margin: [0.15, 0.15, 0.15, 0.15],
  image: { type: "jpeg", quality: 0.92 },
  html2canvas: {
    scale: 1.5,
    useCORS: true,
    logging: false,
    backgroundColor: "#ffffff",
  },
  jsPDF: { unit: "in", format: "a3", orientation: "landscape" },
  pagebreak: { mode: ["css", "legacy"] },
};

export async function exportCatalogExcel(items) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Parts Catalog");

  sheet.columns = [
    { header: "TRT №", key: "trtNo", width: 12 },
    { header: "OEM №", key: "oemNo", width: 28 },
    { header: "CTR №", key: "ctrNo", width: 14 },
    { header: "LEMFÖRDER", key: "lemforderNo", width: 14 },
    { header: "EN Name", key: "englishName", width: 18 },
    { header: "Contents", key: "contents", width: 22 },
    { header: "RU Name", key: "russianName", width: 22 },
    { header: "Car", key: "carName", width: 28 },
    { header: "Model", key: "model", width: 22 },
    { header: "Years", key: "years", width: 14 },
    { header: "Photo", key: "photo", width: 16 },
    { header: "KG", key: "weightPerPcKg", width: 10 },
  ];

  const headerRow = sheet.getRow(1);
  headerRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
  headerRow.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFB71C1C" },
  };
  headerRow.alignment = { vertical: "middle", horizontal: "center" };

  for (const item of items) {
    const row = sheet.addRow({
      trtNo: item.trtNo ?? "",
      oemNo: formatList(item.oemNo),
      ctrNo: item.ctrNo ?? "",
      lemforderNo: item.lemforderNo ?? "",
      englishName: item.englishName ?? "",
      contents: item.contents ?? "",
      russianName: item.russianName ?? "",
      carName: formatList(item.carName),
      model: formatList(item.model),
      years: formatList(item.years),
      photo: "",
      weightPerPcKg:
        typeof item.weightPerPcKg === "number"
          ? item.weightPerPcKg
          : item.weightPerPcKg ?? "",
    });

    row.height = 58;
    row.alignment = { vertical: "top", wrapText: true };

    if (item.photo) {
      const buffer = await fetchImageBuffer(item.photo);
      if (buffer) {
        const extension = imageExtension(item.photo);
        const imageId = workbook.addImage({ buffer, extension });
        sheet.addImage(imageId, {
          tl: { col: 10, row: row.number - 1 },
          ext: { width: 88, height: 52 },
        });
      }
    }
  }

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `parts_catalog_${fileDate()}.xlsx`;
  link.click();
  URL.revokeObjectURL(url);
}

export async function exportCatalogPdf(items) {
  if (!items.length) return;

  const chunks = chunkItems(items, PDF_ROWS_PER_CHUNK);
  const wrapper = document.createElement("div");
  wrapper.style.cssText = [
    "position: fixed",
    "left: 0",
    "top: 0",
    "width: 1600px",
    "background: #ffffff",
    "color: #111111",
    "pointer-events: none",
    "z-index: 99999",
    "transform: translateX(-10000px)",
  ].join(";");

  wrapper.innerHTML = `<style>${PDF_STYLES}</style>`;
  document.body.appendChild(wrapper);

  const chunkElements = [];

  try {
    for (let i = 0; i < chunks.length; i++) {
      const chunkEl = document.createElement("div");
      chunkEl.innerHTML = await buildChunkHtml(chunks[i], i, items.length);
      wrapper.appendChild(chunkEl);
      chunkElements.push(chunkEl.firstElementChild || chunkEl);
    }

    await waitForImages(wrapper);
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

    const filename = `parts_catalog_${fileDate()}.pdf`;
    let worker = html2pdf().set({ ...PDF_OPTIONS, filename }).from(chunkElements[0]).toPdf();

    for (let i = 1; i < chunkElements.length; i++) {
      const element = chunkElements[i];
      worker = worker
        .get("pdf")
        .then((pdf) => {
          pdf.addPage();
        })
        .from(element)
        .toContainer()
        .toCanvas()
        .toPdf();
    }

    await worker.save();
  } finally {
    document.body.removeChild(wrapper);
  }
}
