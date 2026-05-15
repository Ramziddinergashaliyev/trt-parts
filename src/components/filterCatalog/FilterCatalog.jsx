// import React, { useState, useMemo, useCallback } from "react";
// import "./filterCatalog.scss";
// import { useGetCatalogQuery } from "../../context/api/catalogApi";

// const PARTS_DATA = [
//     { trt: "R8001", oem: ["96535474", "96535475"], ctr: ["CB0162"], lemforder: "12160 01", english: "BALL JOINT", contents: "UPPER / M10×1.25", russian: "ШАРОВАЯ ОПОРА", cars: "DAEWOO Lacetti, Nubira", models: "J200, J100", years: "02~08 / 97~03", weight: 0.420, photo: null },
//     { trt: "R8002", oem: ["48820-52020", "48820-52021"], ctr: ["CB0200"], lemforder: "14355 01", english: "BALL JOINT", contents: "LOWER / M12×1.25", russian: "ШАРОВАЯ ОПОРА", cars: "TOYOTA Yaris, Vitz", models: "NCP10, SCP10", years: "99~05", weight: 0.510, photo: null },
//     { trt: "R8010", oem: ["45503-09010", "45503-09020"], ctr: ["CK0100"], lemforder: "22450 01", english: "TIE ROD END", contents: "OUTER / M12×1.5", russian: "НАКОНЕЧНИК РУЛЕВОЙ", cars: "TOYOTA Corolla, Auris", models: "ZZE120, ZZE121, ZZE150", years: "00~07 / 06~12", weight: 0.310, photo: null },
// ];

// const ALL_BRANDS = [...new Set(
//     PARTS_DATA.flatMap(p => p.cars.split(",").map(c => c.trim().split(" ")[0]))
// )].sort();

// const ALL_TYPES = [...new Set(PARTS_DATA.map(p => p.english))].sort();

// const COLUMNS = [
//     { key: "trt", label: "TRT №", sortable: true, width: 76 },
//     { key: "oem", label: "OEM №", sortable: true, width: 118 },
//     { key: "ctr", label: "CTR №", sortable: false, width: 82 },
//     { key: "lemforder", label: "LEMFÖRDER", sortable: true, width: 96 },
//     { key: "english", label: "EN Name", sortable: true, width: 116 },
//     { key: "contents", label: "Contents", sortable: false, width: 130 },
//     { key: "russian", label: "RU Name", sortable: false, width: 130 },
//     { key: "cars", label: "Car", sortable: true, width: 170 },
//     { key: "models", label: "Model", sortable: false, width: 130 },
//     { key: "years", label: "Years", sortable: false, width: 90 },
//     { key: "photo", label: "Photo", sortable: false, width: 76 },
//     { key: "weight", label: "KG", sortable: true, width: 54 },
// ];

// const PAGE_SIZE = 25;

// const SearchIcon = () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
//         <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
//     </svg>
// );

// const ResetIcon = () => (
//     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
//         <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-3.5" />
//     </svg>
// );

// const ExcelIcon = () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
//         <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
//         <polyline points="14 2 14 8 20 8" />
//         <line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" />
//     </svg>
// );

// const PdfIcon = () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
//         <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
//         <polyline points="14 2 14 8 20 8" />
//     </svg>
// );

// const CameraIcon = () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
//         <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
//         <circle cx="12" cy="13" r="4" />
//     </svg>
// );

// const ChevronLeft = () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
//         <polyline points="15 18 9 12 15 6" />
//     </svg>
// );

// const ChevronRight = () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
//         <polyline points="9 18 15 12 9 6" />
//     </svg>
// );

// function PhotoModal({ src, trt, onClose }) {
//     return (
//         <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal aria-label={`Photo: ${trt}`}>
//             <div className="modal-box" onClick={e => e.stopPropagation()}>
//                 <div className="modal-head">
//                     <span className="modal-title">Photo — <b>{trt}</b></span>
//                     <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
//                 </div>
//                 <img src={src} alt={`Part ${trt}`} className="modal-img" />
//             </div>
//         </div>
//     );
// }

// function PhotoCell({ trt, photo, onPreview }) {
//     if (!photo) {
//         return (
//             <div className="foto-cell">
//                 <div className="foto-empty" title="No photo" aria-label="No photo available">
//                     <CameraIcon />
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="foto-cell">
//             <button
//                 className="foto-thumb"
//                 onClick={() => onPreview({ src: photo, trt })}
//                 aria-label={`View photo of ${trt}`}
//                 title="Preview"
//             >
//                 <img src={photo} alt={`Part ${trt}`} className="foto-img" loading="lazy" />
//             </button>
//         </div>
//     );
// }

// export default function FilterCatalog() {
//     const [search, setSearch] = useState("");
//     const [brand, setBrand] = useState("");
//     const [type, setType] = useState("");
//     const [sortCol, setSortCol] = useState(null);
//     const [sortDir, setSortDir] = useState("asc");
//     const [page, setPage] = useState(1);
//     const [modalPhoto, setModalPhoto] = useState(null);

//     const { data } = useGetCatalogQuery()
//     console.log(data);


//     const handleSort = useCallback(col => {
//         if (!col) return;
//         setSortCol(prev => {
//             if (prev === col) setSortDir(d => d === "asc" ? "desc" : "asc");
//             else setSortDir("asc");
//             return col;
//         });
//         setPage(1);
//     }, []);

//     const handlePreview = useCallback(({ src, trt }) => {
//         setModalPhoto({ src, trt });
//     }, []);

//     const filtered = useMemo(() => {
//         let d = [...PARTS_DATA];
//         const q = search.toLowerCase().trim();

//         if (q) d = d.filter(p =>
//             p.trt.toLowerCase().includes(q) ||
//             p.oem.some(o => o.toLowerCase().includes(q)) ||
//             p.english.toLowerCase().includes(q) ||
//             p.russian.toLowerCase().includes(q) ||
//             p.cars.toLowerCase().includes(q) ||
//             p.ctr.some(c => c.toLowerCase().includes(q)) ||
//             p.lemforder.toLowerCase().includes(q)
//         );

//         if (brand) d = d.filter(p => p.cars.toLowerCase().includes(brand.toLowerCase()));
//         if (type) d = d.filter(p => p.english === type);

//         if (sortCol) {
//             d.sort((a, b) => {
//                 const va = sortCol === "weight" ? a.weight
//                     : Array.isArray(a[sortCol]) ? a[sortCol][0]
//                         : (a[sortCol] ?? "");
//                 const vb = sortCol === "weight" ? b.weight
//                     : Array.isArray(b[sortCol]) ? b[sortCol][0]
//                         : (b[sortCol] ?? "");
//                 const cmp = typeof va === "string" ? va.localeCompare(vb) : va - vb;
//                 return sortDir === "asc" ? cmp : -cmp;
//             });
//         }
//         return d;
//     }, [search, brand, type, sortCol, sortDir]);

//     const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
//     const safePage = Math.min(page, totalPages);
//     const pageData = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

//     const reset = useCallback(() => {
//         setSearch(""); setBrand(""); setType("");
//         setSortCol(null); setPage(1);
//     }, []);

//     const handleSearch = useCallback(v => { setSearch(v); setPage(1); }, []);
//     const handleBrand = useCallback(v => { setBrand(v); setPage(1); }, []);
//     const handleType = useCallback(v => { setType(v); setPage(1); }, []);

//     const exportCSV = useCallback(() => {
//         const headers = ["TRT No", "OEM No", "CTR No", "LEMFÖRDER", "EN Name", "Contents", "RU Name", "Car", "Model", "Years", "Weight KG"];
//         const rows = filtered.map(p => [
//             p.trt, p.oem.join(" / "), p.ctr.join(" / "),
//             p.lemforder, p.english, p.contents, p.russian,
//             p.cars, p.models, p.years, p.weight,
//         ]);
//         const csv = [headers, ...rows].map(r => r.map(v => `"${v}"`).join(",")).join("\n");
//         const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
//         const url = URL.createObjectURL(blob);
//         const a = Object.assign(document.createElement("a"), { href: url, download: "parts_catalog.csv" });
//         a.click(); URL.revokeObjectURL(url);
//     }, [filtered]);

//     const exportPDF = useCallback(() => window.print(), []);

//     const SortArrow = ({ col }) => {
//         if (!col) return null;
//         const active = sortCol === col;
//         return (
//             <span className={`sort-arrow${active ? " active" : ""}`} aria-hidden>
//                 {active ? (sortDir === "asc" ? "▲" : "▼") : "⇅"}
//             </span>
//         );
//     };

//     const hasFilters = search || brand || type;

//     return (
//         <div className="fc">

//             <header className="fc-header">
//                 <div className="fc-header-left">
//                     <div className="fc-logo">
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                             <path d="M12 2L2 7l10 5 10-5-10-5z" />
//                             <path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
//                         </svg>
//                     </div>

//                     <div>
//                         <h1 className="fc-title">Parts Catalog</h1>
//                         <span className="fc-subtitle">{PARTS_DATA.length} total parts</span>
//                     </div>
//                 </div>

//                 <div className="fc-actions">
//                     <button className="fc-btn fc-btn--excel" onClick={exportCSV} title="Download CSV">
//                         <ExcelIcon /> <span>Excel</span>
//                     </button>

//                     <button className="fc-btn fc-btn--pdf" onClick={exportPDF} title="Print">
//                         <PdfIcon /> <span>PDF</span>
//                     </button>
//                 </div>

//             </header>

//             <div className="fc-filters">
//                 <label className="fc-search-wrap" htmlFor="fc-search">
//                     <SearchIcon />
//                     <input
//                         id="fc-search"
//                         className="fc-search"
//                         type="search"
//                         placeholder="TRT, OEM, name, car, CTR..."
//                         value={search}
//                         onChange={e => handleSearch(e.target.value)}
//                         autoComplete="off"
//                         spellCheck="false"
//                     />
//                 </label>

//                 <select className="fc-select" value={brand} onChange={e => handleBrand(e.target.value)} aria-label="Select brand">
//                     <option value="">All Brands</option>
//                     {ALL_BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
//                 </select>

//                 <select className="fc-select" value={type} onChange={e => handleType(e.target.value)} aria-label="Select type">
//                     <option value="">All Types</option>
//                     {ALL_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
//                 </select>

//                 {hasFilters && (
//                     <button className="fc-reset" onClick={reset} title="Clear filters">
//                         <ResetIcon /> Reset
//                     </button>
//                 )}

//                 <div className="fc-counter" aria-live="polite">
//                     <b>{filtered.length}</b> / {PARTS_DATA.length}
//                 </div>
//             </div>

//             <div className="fc-table-wrap" role="region" aria-label="Parts table" tabIndex={0}>
//                 <table className="fc-table" aria-rowcount={filtered.length + 1}>
//                     <colgroup>
//                         {COLUMNS.map(c => <col key={c.key} style={{ width: c.width }} />)}
//                     </colgroup>

//                     <thead>
//                         <tr>
//                             {COLUMNS.map(({ key, label, sortable }) => (
//                                 <th
//                                     key={key}
//                                     className={sortable ? "th-sort" : ""}
//                                     onClick={sortable ? () => handleSort(key) : undefined}
//                                     aria-sort={sortCol === key ? (sortDir === "asc" ? "ascending" : "descending") : undefined}
//                                     scope="col"
//                                 >
//                                     <span className="th-inner">
//                                         {label}
//                                         {sortable && <SortArrow col={key} />}
//                                     </span>
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {pageData.length === 0 ? (

//                             <tr>
//                                 <td colSpan={COLUMNS.length} className="fc-empty">
//                                     <div className="fc-empty-inner">
//                                         <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
//                                             <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
//                                             <line x1="8" y1="11" x2="14" y2="11" />
//                                         </svg>
//                                         <p>No results found</p>
//                                         <button onClick={reset} className="fc-empty-btn">Clear Filters</button>
//                                     </div>
//                                 </td>
//                             </tr>

//                         ) : pageData.map((p, i) => (
//                             <tr key={p.trt} style={{ "--row-i": i }}>
//                                 <td><span className="trt-pill">{p.trt}</span></td>
//                                 <td className="cell-oem">
//                                     {p.oem.map(o => <div key={o}>{o}</div>)}
//                                 </td>

//                                 <td className="cell-ctr">
//                                     {p.ctr.map(c => <span key={c} className="ctr-tag">{c}</span>)}
//                                 </td>
//                                 <td className="cell-mono">{p.lemforder}</td>
//                                 <td><span className="cell-type">{p.english}</span></td>
//                                 <td className="cell-sm">{p.contents}</td>
//                                 <td className="cell-sm cell-ru">{p.russian}</td>
//                                 <td className="cell-sm">{p.cars}</td>
//                                 <td className="cell-sm cell-muted">{p.models}</td>
//                                 <td className="cell-sm">{p.years}</td>
//                                 <td>
//                                     <PhotoCell trt={p.trt} photo={p.photo} onPreview={handlePreview} />
//                                 </td>
//                                 <td className="cell-weight">{p.weight.toFixed(3)}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {totalPages > 1 && (
//                 <div className="fc-pagination" role="navigation" aria-label="Pages">
//                     <button
//                         className="pg-btn"
//                         onClick={() => setPage(p => Math.max(1, p - 1))}
//                         disabled={safePage === 1}
//                         aria-label="Previous page"
//                     >
//                         <ChevronLeft />
//                     </button>

//                     <div className="pg-pages">
//                         {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => {
//                             const show = n === 1 || n === totalPages || Math.abs(n - safePage) <= 1;
//                             const ellipsisBefore = n === 2 && safePage > 4;
//                             const ellipsisAfter = n === totalPages - 1 && safePage < totalPages - 3;
//                             if (!show && !ellipsisBefore && !ellipsisAfter) return null;
//                             if ((ellipsisBefore || ellipsisAfter) && !show)
//                                 return <span key={n} className="pg-ellipsis">…</span>;
//                             return (
//                                 <button
//                                     key={n}
//                                     className={`pg-num${n === safePage ? " active" : ""}`}
//                                     onClick={() => setPage(n)}
//                                     aria-current={n === safePage ? "page" : undefined}
//                                     aria-label={`Page ${n}`}
//                                 >
//                                     {n}
//                                 </button>
//                             );
//                         })}
//                     </div>

//                     <button
//                         className="pg-btn"
//                         onClick={() => setPage(p => Math.min(totalPages, p + 1))}
//                         disabled={safePage === totalPages}
//                         aria-label="Next page"
//                     >
//                         <ChevronRight />
//                     </button>

//                     <span className="pg-info">
//                         {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filtered.length)} / {filtered.length}
//                     </span>
//                 </div>
//             )}

//             {modalPhoto && (
//                 <PhotoModal
//                     src={modalPhoto.src}
//                     trt={modalPhoto.trt}
//                     onClose={() => setModalPhoto(null)}
//                 />
//             )}
//         </div>
//     );
// }


import React, { useState, useCallback } from "react";
import "./filterCatalog.scss";
import { useGetCatalogQuery } from "../../context/api/catalogApi";

const SearchIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const ResetIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
        <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-3.5" />
    </svg>
);

const COLUMNS = [
    { key: "trtNo", label: "TRT №", width: 76 },
    { key: "oemNo", label: "OEM №", width: 118 },
    { key: "ctrNo", label: "CTR №", width: 82 },
    { key: "lemforderNo", label: "LEMFÖRDER", width: 96 },
    { key: "englishName", label: "EN Name", width: 116 },
    { key: "contents", label: "Contents", width: 130 },
    { key: "russianName", label: "RU Name", width: 130 },
    { key: "carName", label: "Car", width: 170 },
    { key: "model", label: "Model", width: 130 },
    { key: "years", label: "Years", width: 90 },
    { key: "photo", label: "Photo", width: 76 },
    { key: "weightPerPcKg", label: "KG", width: 54 },
];

const ExcelIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" />
    </svg>
);

const PdfIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
    </svg>
);

const CameraIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
    </svg>
);

const ChevronLeft = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
        <polyline points="15 18 9 12 15 6" />
    </svg>
);

const ChevronRight = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

function PhotoModal({ src, trt, onClose }) {
    return (
        <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal aria-label={`Photo: ${trt}`}>
            <div className="modal-box" onClick={e => e.stopPropagation()}>
                <div className="modal-head">
                    <span className="modal-title">Photo — <b>{trt}</b></span>
                    <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
                </div>
                <img src={src} alt={`Part ${trt}`} className="modal-img" />
            </div>
        </div>
    );
}

function PhotoCell({ trt, photo, onPreview }) {
    if (!photo) {
        return (
            <div className="foto-cell">
                <div className="foto-empty" title="No photo" aria-label="No photo available">
                    <CameraIcon />
                </div>
            </div>
        );
    }
    return (
        <div className="foto-cell">
            <button
                className="foto-thumb"
                onClick={() => onPreview({ src: photo, trt })}
                aria-label={`View photo of ${trt}`}
                title="Preview"
            >
                <img src={photo} alt={`Part ${trt}`} className="foto-img" loading="lazy" />
            </button>
        </div>
    );
}

const PAGE_SIZE = 25;

export default function FilterCatalog() {
    const [search, setSearch] = useState("");
    const [brand, setBrand] = useState("");
    const [type, setType] = useState("");
    const [page, setPage] = useState(1);
    const [modalPhoto, setModalPhoto] = useState(null);

    const { data = [], isLoading, isError } = useGetCatalogQuery();

    const handlePreview = useCallback(({ src, trt }) => setModalPhoto({ src, trt }), []);

    const totalPages = Math.max(1, Math.ceil(data.length / PAGE_SIZE));
    const safePage = Math.min(page, totalPages);
    const pageData = data.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

    const exportCSV = useCallback(() => {
        const headers = ["TRT No", "OEM No", "CTR No", "LEMFÖRDER", "EN Name", "Contents", "RU Name", "Car", "Model", "Years", "Weight KG"];

        const rows = data.map(p => [
            p.trtNo,
            Array.isArray(p.oemNo) ? p.oemNo.join(" / ") : p.oemNo,
            p.ctrNo,
            p.lemforderNo,
            p.englishName,
            p.contents,
            p.russianName,
            Array.isArray(p.carName) ? p.carName.join(", ") : p.carName,
            Array.isArray(p.model) ? p.model.join(", ") : p.model,
            Array.isArray(p.years) ? p.years.join(", ") : p.years,
            p.weightPerPcKg,
        ]);

        const csv = [headers, ...rows].map(r => r.map(v => `"${v ?? ""}"`).join(",")).join("\n");
        const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = Object.assign(document.createElement("a"), { href: url, download: "parts_catalog.csv" });
        a.click();
        URL.revokeObjectURL(url);

    }, [data]);

    const exportPDF = useCallback(() => window.print(), []);

    return (
        <div className="fc">

            <header className="fc-header">
                <div className="fc-header-left">
                    <div className="fc-logo">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="fc-title">Parts Catalog</h1>
                        <span className="fc-subtitle">{data.length} total parts</span>
                    </div>
                </div>

                <div className="fc-actions">
                    <button className="fc-btn fc-btn--excel" onClick={exportCSV} title="Download CSV">
                        <ExcelIcon /> <span>Excel</span>
                    </button>
                    <button className="fc-btn fc-btn--pdf" onClick={exportPDF} title="Print">
                        <PdfIcon /> <span>PDF</span>
                    </button>
                </div>
            </header>


            <div className="fc-filters">
                <label className="fc-search-wrap" htmlFor="fc-search">
                    <SearchIcon />
                    <input
                        id="fc-search"
                        className="fc-search"
                        type="search"
                        placeholder="TRT, OEM, name, car, CTR..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        autoComplete="off"
                        spellCheck="false"
                    />
                </label>

                <select className="fc-select" value={brand} onChange={e => setBrand(e.target.value)} aria-label="Select brand">
                    <option value="">All Brands</option>
                </select>

                <select className="fc-select" value={type} onChange={e => setType(e.target.value)} aria-label="Select type">
                    <option value="">All Types</option>
                </select>

                {(search || brand || type) && (
                    <button className="fc-reset" onClick={() => { setSearch(""); setBrand(""); setType(""); }} title="Clear filters">
                        <ResetIcon /> Reset
                    </button>
                )}

                <div className="fc-counter" aria-live="polite">
                    <b>{data.length}</b>
                </div>
            </div>

            <div className="fc-table-wrap" role="region" aria-label="Parts table" tabIndex={0}>
                <table className="fc-table" aria-rowcount={data.length + 1}>
                    <colgroup>
                        {COLUMNS.map(c => <col key={c.key} style={{ width: c.width }} />)}
                    </colgroup>

                    <thead>
                        <tr>
                            {COLUMNS.map(({ key, label }) => (
                                <th key={key} scope="col">
                                    <span className="th-inner">{label}</span>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td colSpan={COLUMNS.length} className="fc-empty">
                                    <div className="fc-empty-inner"><p>Loading...</p></div>
                                </td>
                            </tr>
                        ) : isError ? (
                            <tr>
                                <td colSpan={COLUMNS.length} className="fc-empty">
                                    <div className="fc-empty-inner"><p>Failed to load data</p></div>
                                </td>
                            </tr>
                        ) : pageData.length === 0 ? (
                            <tr>
                                <td colSpan={COLUMNS.length} className="fc-empty">
                                    <div className="fc-empty-inner">
                                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                                            <line x1="8" y1="11" x2="14" y2="11" />
                                        </svg>
                                        <p>No results found</p>
                                    </div>
                                </td>
                            </tr>
                        ) : pageData.map((p, i) => (
                            <tr key={p.id ?? p.trtNo} style={{ "--row-i": i }}>
                                <td><span className="trt-pill">{p.trtNo}</span></td>

                                <td className="cell-oem">
                                    {(Array.isArray(p.oemNo) ? p.oemNo : [p.oemNo]).map(o => (
                                        <div key={o}>{o}</div>
                                    ))}
                                </td>

                                <td className="cell-ctr">
                                    <span className="ctr-tag">{p.ctrNo}</span>
                                </td>

                                <td className="cell-mono">{p.lemforderNo}</td>

                                <td><span className="cell-type">{p.englishName}</span></td>

                                <td className="cell-sm">{p.contents}</td>

                                <td className="cell-sm cell-ru">{p.russianName}</td>

                                <td className="cell-sm">
                                    {(Array.isArray(p.carName) ? p.carName : [p.carName]).join(", ")}
                                </td>

                                <td className="cell-sm cell-muted">
                                    {(Array.isArray(p.model) ? p.model : [p.model]).join(", ")}
                                </td>

                                <td className="cell-sm">
                                    {(Array.isArray(p.years) ? p.years : [p.years]).join(", ")}
                                </td>

                                <td>
                                    <PhotoCell trt={p.trtNo} photo={p.photo} onPreview={handlePreview} />
                                </td>

                                <td className="cell-weight">
                                    {typeof p.weightPerPcKg === "number" ? p.weightPerPcKg.toFixed(3) : p.weightPerPcKg}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="fc-pagination" role="navigation" aria-label="Pages">
                    <button
                        className="pg-btn"
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={safePage === 1}
                        aria-label="Previous page"
                    >
                        <ChevronLeft />
                    </button>

                    <div className="pg-pages">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => {
                            const show = n === 1 || n === totalPages || Math.abs(n - safePage) <= 1;
                            const ellipsisBefore = n === 2 && safePage > 4;
                            const ellipsisAfter = n === totalPages - 1 && safePage < totalPages - 3;
                            if (!show && !ellipsisBefore && !ellipsisAfter) return null;
                            if ((ellipsisBefore || ellipsisAfter) && !show)
                                return <span key={n} className="pg-ellipsis">…</span>;
                            return (
                                <button
                                    key={n}
                                    className={`pg-num${n === safePage ? " active" : ""}`}
                                    onClick={() => setPage(n)}
                                    aria-current={n === safePage ? "page" : undefined}
                                    aria-label={`Page ${n}`}
                                >
                                    {n}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        className="pg-btn"
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={safePage === totalPages}
                        aria-label="Next page"
                    >
                        <ChevronRight />
                    </button>

                    <span className="pg-info">
                        {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, data.length)} / {data.length}
                    </span>
                </div>
            )}

            {modalPhoto && (
                <PhotoModal
                    src={modalPhoto.src}
                    trt={modalPhoto.trt}
                    onClose={() => setModalPhoto(null)}
                />
            )}
        </div>
    );
}