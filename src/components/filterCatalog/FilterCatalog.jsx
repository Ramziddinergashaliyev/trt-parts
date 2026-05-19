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