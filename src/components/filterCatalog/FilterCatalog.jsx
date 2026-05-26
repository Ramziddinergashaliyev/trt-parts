// import React, { useState, useCallback, useMemo, useEffect, useRef } from "react";
// import "./filterCatalog.scss";

// import { useGetCatalogQuery, useUpdateCatalogMutation } from "../../context/api/catalogApi";
// import { filterCatalogItems } from "../../utils/catalogSearch";
// import { exportCatalogExcel, exportCatalogPdf } from "../../utils/catalogExport";

// const SearchIcon = () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
//         <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
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

// const DotsIcon = () => (
//     <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//         <circle cx="12" cy="5" r="2" />
//         <circle cx="12" cy="12" r="2" />
//         <circle cx="12" cy="19" r="2" />
//     </svg>
// );

// const EditIcon = () => (
//     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
//         <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
//         <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
//     </svg>
// );

// const DeleteIcon = () => (
//     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
//         <polyline points="3 6 5 6 21 6" />
//         <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
//         <path d="M10 11v6M14 11v6" />
//         <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
//     </svg>
// );

// const COLUMNS = [
//     { key: "trtNo", label: "TRT №", width: 76 },
//     { key: "oemNo", label: "OEM №", width: 118 },
//     { key: "ctrNo", label: "CTR №", width: 82 },
//     { key: "lemforderNo", label: "LEMFÖRDER", width: 96 },
//     { key: "englishName", label: "EN Name", width: 116 },
//     { key: "contents", label: "Contents", width: 130 },
//     { key: "russianName", label: "RU Name", width: 130 },
//     { key: "carName", label: "Car", width: 170 },
//     { key: "model", label: "Model", width: 130 },
//     { key: "years", label: "Years", width: 90 },
//     { key: "photo", label: "Photo", width: 76 },
//     { key: "weightPerPcKg", label: "KG", width: 54 },
//     { key: "actions", label: "", width: 48 },
// ];

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

// function EditModal({ item, onClose, onSave }) {
//     const [form, setForm] = useState({ ...item });

//     const handleChange = (key, value) => {
//         setForm(prev => ({ ...prev, [key]: value }));
//     };

//     const handleSave = () => {
//         onSave(form);
//         onClose();
//     };

//     const fields = [
//         { key: "trtNo", label: "TRT №" },
//         { key: "oemNo", label: "OEM №" },
//         { key: "ctrNo", label: "CTR №" },
//         { key: "lemforderNo", label: "LEMFÖRDER №" },
//         { key: "englishName", label: "EN Name" },
//         { key: "russianName", label: "RU Name" },
//         { key: "contents", label: "Contents" },
//         { key: "carName", label: "Car" },
//         { key: "model", label: "Model" },
//         { key: "years", label: "Years" },
//         { key: "weightPerPcKg", label: "Weight (KG)" },
//     ];

//     return (
//         <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal aria-label="Edit item">
//             <div className="modal-box modal-box--edit" onClick={e => e.stopPropagation()}>

//                 <div className="modal-head">
//                     <div className="modal-head-icon modal-head-icon--edit">
//                         <EditIcon />
//                     </div>
//                     <div>
//                         <span className="modal-title-main">Edit Part</span>
//                         <span className="modal-title-sub">{item.trtNo}</span>
//                     </div>
//                     <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
//                 </div>

//                 <div className="modal-body">
//                     <div className="edit-grid">
//                         {fields.map(({ key, label }) => (
//                             <div className="edit-field" key={key}>
//                                 <label className="edit-label">{label}</label>
//                                 <input
//                                     className="edit-input"
//                                     value={Array.isArray(form[key]) ? form[key].join(", ") : (form[key] ?? "")}
//                                     onChange={e => handleChange(key, e.target.value)}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="modal-footer">
//                     <button className="modal-btn modal-btn--cancel" onClick={onClose}>Cancel</button>
//                     <button className="modal-btn modal-btn--save" onClick={handleSave}>Save Changes</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function DeleteModal({ item, onClose, onConfirm }) {
//     return (
//         <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal aria-label="Delete item">
//             <div className="modal-box modal-box--delete" onClick={e => e.stopPropagation()}>
//                 <div className="modal-head">
//                     <div className="modal-head-icon modal-head-icon--delete">
//                         <DeleteIcon />
//                     </div>
//                     <div>
//                         <span className="modal-title-main">Delete Part</span>
//                         <span className="modal-title-sub">{item.trtNo}</span>
//                     </div>
//                     <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
//                 </div>
//                 <div className="modal-body modal-body--center">
//                     <div className="delete-warning-icon">
//                         <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
//                             <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
//                             <line x1="12" y1="9" x2="12" y2="13" />
//                             <line x1="12" y1="17" x2="12.01" y2="17" />
//                         </svg>
//                     </div>
//                     <p className="delete-text">
//                         Are you sure you want to delete <b>{item.trtNo}</b>?
//                     </p>
//                     <p className="delete-subtext">
//                         {item.englishName} — this action cannot be undone.
//                     </p>
//                 </div>
//                 <div className="modal-footer">
//                     <button className="modal-btn modal-btn--cancel" onClick={onClose}>Cancel</button>
//                     <button className="modal-btn modal-btn--delete" onClick={() => { onConfirm(item); onClose(); }}>
//                         Yes, Delete
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function RowMenu({ item, onEdit, onDelete }) {
//     const [open, setOpen] = useState(false);
//     const ref = useRef(null);

//     useEffect(() => {
//         if (!open) return;
//         const handler = (e) => {
//             if (ref.current && !ref.current.contains(e.target)) setOpen(false);
//         };
//         document.addEventListener("mousedown", handler);
//         return () => document.removeEventListener("mousedown", handler);
//     }, [open]);

//     return (
//         <div className="row-menu" ref={ref}>
//             <button
//                 className={`row-menu-btn${open ? " row-menu-btn--open" : ""}`}
//                 onClick={() => setOpen(v => !v)}
//                 aria-label="Actions"
//                 title="Actions"
//             >
//                 <DotsIcon />
//             </button>
//             {open && (
//                 <div className="row-menu-dropdown" role="menu">
//                     <button
//                         className="row-menu-item row-menu-item--edit"
//                         role="menuitem"
//                         onClick={() => { setOpen(false); onEdit(item); }}
//                     >
//                         <EditIcon /> Edit
//                     </button>
//                     <div className="row-menu-divider" />
//                     <button
//                         className="row-menu-item row-menu-item--delete"
//                         role="menuitem"
//                         onClick={() => { setOpen(false); onDelete(item); }}
//                     >
//                         <DeleteIcon /> Delete
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

// const PAGE_SIZE = 25;

// export default function FilterCatalog() {
//     const [search, setSearch] = useState("");
//     const [page, setPage] = useState(1);
//     const [modalPhoto, setModalPhoto] = useState(null);
//     const [editItem, setEditItem] = useState(null);
//     const [deleteItem, setDeleteItem] = useState(null);

//     const { data: rawData = [], isLoading, isError } = useGetCatalogQuery();
//     const [localData, setLocalData] = useState([]);
//     const [exporting, setExporting] = useState(false);
//     const [exportingPDF, setExportingPDF] = useState(false);
//     const [updateCatalog, { isLoading: isUpdating }] = useUpdateCatalogMutation();

//     useEffect(() => {
//         setLocalData(rawData);
//     }, [rawData]);

//     const filteredData = useMemo(
//         () => filterCatalogItems(localData, search),
//         [localData, search],
//     );

//     useEffect(() => { setPage(1); }, [search]);

//     const handlePreview = useCallback(({ src, trt }) => setModalPhoto({ src, trt }), []);

//     const handleSave = useCallback((updated) => {
//         setLocalData(prev => prev.map(p => p.id === updated.id ? updated : p));
//     }, []);

//     const handleConfirmDelete = useCallback((item) => {
//         setLocalData(prev => prev.filter(p => p.id !== item.id));
//     }, []);

//     const totalPages = Math.max(1, Math.ceil(filteredData.length / PAGE_SIZE));
//     const safePage = Math.min(page, totalPages);
//     const pageData = filteredData.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

//     const handleExportExcel = useCallback(async () => {
//         if (!filteredData.length) return;
//         setExporting(true);
//         try { await exportCatalogExcel(filteredData); }
//         finally { setExporting(false); }
//     }, [filteredData]);

//     const handleExportPdf = useCallback(async () => {
//         if (!filteredData.length) return;
//         setExportingPDF(true);
//         try { await exportCatalogPdf(filteredData); }
//         finally { setExportingPDF(false); }
//     }, [filteredData]);

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
//                         <span className="fc-subtitle">
//                             {search.trim()
//                                 ? `${filteredData.length} of ${localData.length} parts`
//                                 : `${localData.length} total parts`}
//                         </span>
//                     </div>
//                 </div>
//                 <div className="fc-actions">
//                     <button className="fc-btn fc-btn--excel" onClick={handleExportExcel} disabled={exporting || !filteredData.length} title="Download Excel">
//                         <ExcelIcon /> <span>{exporting ? "Saving..." : "Excel"}</span>
//                     </button>
//                     <button className="fc-btn fc-btn--pdf" onClick={handleExportPdf} disabled={exportingPDF || !filteredData.length} title="Download PDF">
//                         <PdfIcon /> <span>{exportingPDF ? "Saving..." : "PDF"}</span>
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
//                         placeholder="TRT, OEM, CTR, LEMFÖRDER, name, car, model, years, KG..."
//                         value={search}
//                         onChange={e => setSearch(e.target.value)}
//                         autoComplete="off"
//                         spellCheck="false"
//                     />
//                 </label>
//                 <div className="fc-counter" aria-live="polite">
//                     <b>{filteredData.length}</b>
//                 </div>
//             </div>

//             <div className="fc-table-wrap" role="region" aria-label="Parts table" tabIndex={0}>
//                 <table className="fc-table" aria-rowcount={filteredData.length + 1}>
//                     <colgroup>
//                         {COLUMNS.map(c => <col key={c.key} style={{ width: c.width }} />)}
//                     </colgroup>
//                     <thead>
//                         <tr>
//                             {COLUMNS.map(({ key, label }) => (
//                                 <th key={key} scope="col">
//                                     <span className="th-inner">{label}</span>
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {isLoading ? (
//                             <tr>
//                                 <td colSpan={COLUMNS.length} className="fc-empty">
//                                     <div className="fc-empty-inner"><p>Loading...</p></div>
//                                 </td>
//                             </tr>
//                         ) : isError ? (
//                             <tr>
//                                 <td colSpan={COLUMNS.length} className="fc-empty">
//                                     <div className="fc-empty-inner"><p>Failed to load data</p></div>
//                                 </td>
//                             </tr>
//                         ) : pageData.length === 0 ? (
//                             <tr>
//                                 <td colSpan={COLUMNS.length} className="fc-empty">
//                                     <div className="fc-empty-inner">
//                                         <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
//                                             <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
//                                             <line x1="8" y1="11" x2="14" y2="11" />
//                                         </svg>
//                                         <p>No results found</p>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ) : pageData.map((p, i) => (
//                             <tr key={`${p.id ?? "row"}-${i}`} style={{ "--row-i": i }}>
//                                 <td><span className="trt-pill">{p.trtNo}</span></td>

//                                 <td className="cell-oem">
//                                     {(Array.isArray(p.oemNo) ? p.oemNo : [p.oemNo]).map(o => (
//                                         <div key={o}>{o}</div>
//                                     ))}
//                                 </td>

//                                 <td className="cell-ctr">
//                                     <span className="ctr-tag">{p.ctrNo}</span>
//                                 </td>

//                                 <td className="cell-mono">{p.lemforderNo}</td>

//                                 <td><span className="cell-type">{p.englishName}</span></td>

//                                 <td className="cell-sm">{p.contents}</td>

//                                 <td className="cell-sm cell-ru">{p.russianName}</td>

//                                 <td className="cell-sm">
//                                     {(Array.isArray(p.carName) ? p.carName : [p.carName]).join(", ")}
//                                 </td>

//                                 <td className="cell-sm cell-muted">
//                                     {(Array.isArray(p.model) ? p.model : [p.model]).join(", ")}
//                                 </td>

//                                 <td className="cell-sm">
//                                     {(Array.isArray(p.years) ? p.years : [p.years]).join(", ")}
//                                 </td>

//                                 <td>
//                                     <PhotoCell trt={p.trtNo} photo={p.photo} onPreview={handlePreview} />
//                                 </td>

//                                 <td className="cell-weight">
//                                     {typeof p.weightPerPcKg === "number" ? p.weightPerPcKg.toFixed(3) : p.weightPerPcKg}
//                                 </td>

//                                 <td className="cell-actions">
//                                     <RowMenu
//                                         item={p}
//                                         onEdit={setEditItem}
//                                         onDelete={setDeleteItem}
//                                     />
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {totalPages > 1 && (
//                 <div className="fc-pagination" role="navigation" aria-label="Pages">
//                     <button className="pg-btn" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={safePage === 1} aria-label="Previous page">
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
//                                 <button key={n} className={`pg-num${n === safePage ? " active" : ""}`} onClick={() => setPage(n)} aria-current={n === safePage ? "page" : undefined} aria-label={`Page ${n}`}>
//                                     {n}
//                                 </button>
//                             );
//                         })}
//                     </div>
//                     <button className="pg-btn" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={safePage === totalPages} aria-label="Next page">
//                         <ChevronRight />
//                     </button>
//                     <span className="pg-info">
//                         {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filteredData.length)} / {filteredData.length}
//                     </span>
//                 </div>
//             )}

//             {modalPhoto && (
//                 <PhotoModal src={modalPhoto.src} trt={modalPhoto.trt} onClose={() => setModalPhoto(null)} />
//             )}

//             {editItem && (
//                 <EditModal item={editItem} onClose={() => setEditItem(null)} onSave={handleSave} />
//             )}

//             {deleteItem && (
//                 <DeleteModal item={deleteItem} onClose={() => setDeleteItem(null)} onConfirm={handleConfirmDelete} />
//             )}
//         </div>
//     );
// }


import React, { useState, useCallback, useMemo, useEffect, useRef } from "react";
import "./filterCatalog.scss";

import { useGetCatalogQuery, useUpdateCatalogMutation } from "../../context/api/catalogApi";
import { filterCatalogItems } from "../../utils/catalogSearch";
import { exportCatalogExcel, exportCatalogPdf } from "../../utils/catalogExport";

const SearchIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

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

const DotsIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <circle cx="12" cy="5" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="19" r="2" />
    </svg>
);

const EditIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
);

const DeleteIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
        <path d="M10 11v6M14 11v6" />
        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
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
    { key: "actions", label: "", width: 48 },
];

const PAGE_SIZE = 25;

function toArray(val) {
    if (Array.isArray(val)) return val;
    if (typeof val === "string") return val.split(",").map(s => s.trim()).filter(Boolean);
    return [];
}

function buildFormData(form, photoFile) {
    const fd = new FormData();

    fd.append("trtNo", form.trtNo ?? "");
    fd.append("ctrNo", form.ctrNo ?? "");
    fd.append("lemforderNo", form.lemforderNo ?? "");
    fd.append("englishName", form.englishName ?? "");
    fd.append("russianName", form.russianName ?? "");
    fd.append("contents", form.contents ?? "");
    fd.append("weightPerPcKg", form.weightPerPcKg ?? "");
    fd.append("startOfSales", form.startOfSales ?? "");
    fd.append("groupName", form.groupName ?? "");

    fd.append("oemNo", JSON.stringify(toArray(form.oemNo)));
    fd.append("carName", JSON.stringify(toArray(form.carName)));
    fd.append("model", JSON.stringify(toArray(form.model)));
    fd.append("years", JSON.stringify(toArray(form.years)));

    if (photoFile) fd.append("photo", photoFile);

    return fd;
}

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

function EditModal({ item, onClose, onSave, onUpdate }) {
    const [form, setForm] = useState({ ...item });
    const [photoFile, setPhotoFile] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(item.photo || null);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (key, value) => {
        setForm(prev => ({ ...prev, [key]: value }));
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setPhotoFile(file);
        setPhotoPreview(URL.createObjectURL(file));
    };

    const handleSave = async () => {
        setIsSaving(true);
        setError(null);
        try {
            const formData = buildFormData(form, photoFile);
            await onUpdate({ id: item.id, body: formData }).unwrap();

            const updated = {
                ...item,
                ...form,
                oemNo: toArray(form.oemNo),
                carName: toArray(form.carName),
                model: toArray(form.model),
                years: toArray(form.years),
                ...(photoFile ? { photo: photoPreview } : {}),
            };
            onSave(updated);
            onClose();
        } catch (err) {
            console.error("Update failed:", err);
            setError(err?.data?.message || "Saqlashda xatolik yuz berdi. Qaytadan urinib ko'ring.");
        } finally {
            setIsSaving(false);
        }
    };

    const fields = [
        { key: "trtNo", label: "TRT №" },
        { key: "oemNo", label: "OEM № (vergul bilan ajrating)" },
        { key: "ctrNo", label: "CTR №" },
        { key: "lemforderNo", label: "LEMFÖRDER №" },
        { key: "englishName", label: "EN Name" },
        { key: "russianName", label: "RU Name" },
        { key: "contents", label: "Contents" },
        { key: "carName", label: "Car (vergul bilan ajrating)" },
        { key: "model", label: "Model (vergul bilan ajrating)" },
        { key: "years", label: "Years (vergul bilan ajrating)" },
        { key: "weightPerPcKg", label: "Weight (KG)" },
    ];

    return (
        <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal aria-label="Edit item">
            <div className="modal-box modal-box--edit" onClick={e => e.stopPropagation()}>

                <div className="modal-head">
                    <div className="modal-head-icon modal-head-icon--edit">
                        <EditIcon />
                    </div>
                    <div>
                        <span className="modal-title-main">Edit Part</span>
                        <span className="modal-title-sub">{item.trtNo}</span>
                    </div>
                    <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
                </div>

                <div className="modal-body">
                    <div className="edit-grid">
                        {fields.map(({ key, label }) => (
                            <div className="edit-field" key={key}>
                                <label className="edit-label">{label}</label>
                                <input
                                    className="edit-input"
                                    value={Array.isArray(form[key]) ? form[key].join(", ") : (form[key] ?? "")}
                                    onChange={e => handleChange(key, e.target.value)}
                                    disabled={isSaving}
                                />
                            </div>
                        ))}

                        <div className="edit-field edit-field--full">
                            <label className="edit-label">Photo</label>
                            <input
                                type="file"
                                accept="image/*"
                                className="edit-input"
                                onChange={handlePhotoChange}
                                disabled={isSaving}
                            />
                            {photoPreview && (
                                <img
                                    src={photoPreview}
                                    style={{ width: 120, height: "auto", marginTop: 8, borderRadius: 4 }}
                                    alt="Preview"
                                    className="edit-photo-preview"
                                />
                            )}
                        </div>
                    </div>

                    {error && (
                        <div className="edit-error" role="alert">
                            {error}
                        </div>
                    )}
                </div>

                <div className="modal-footer">
                    <button
                        className="modal-btn modal-btn--cancel"
                        onClick={onClose}
                        disabled={isSaving}
                    >
                        Cancel
                    </button>
                    <button
                        className="modal-btn modal-btn--save"
                        onClick={handleSave}
                        disabled={isSaving}
                    >
                        {isSaving ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </div>
        </div>
    );
}

function DeleteModal({ item, onClose, onConfirm }) {
    return (
        <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal aria-label="Delete item">
            <div className="modal-box modal-box--delete" onClick={e => e.stopPropagation()}>
                <div className="modal-head">
                    <div className="modal-head-icon modal-head-icon--delete">
                        <DeleteIcon />
                    </div>
                    <div>
                        <span className="modal-title-main">Delete Part</span>
                        <span className="modal-title-sub">{item.trtNo}</span>
                    </div>
                    <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
                </div>
                <div className="modal-body modal-body--center">
                    <div className="delete-warning-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                            <line x1="12" y1="9" x2="12" y2="13" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                    </div>
                    <p className="delete-text">
                        Are you sure you want to delete <b>{item.trtNo}</b>?
                    </p>
                    <p className="delete-subtext">
                        {item.englishName} — this action cannot be undone.
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="modal-btn modal-btn--cancel" onClick={onClose}>Cancel</button>
                    <button
                        className="modal-btn modal-btn--delete"
                        onClick={() => { onConfirm(item); onClose(); }}
                    >
                        Yes, Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

function RowMenu({ item, onEdit, onDelete }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (!open) return;
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [open]);

    return (
        <div className="row-menu" ref={ref}>
            <button
                className={`row-menu-btn${open ? " row-menu-btn--open" : ""}`}
                onClick={() => setOpen(v => !v)}
                aria-label="Actions"
                title="Actions"
            >
                <DotsIcon />
            </button>
            {open && (
                <div className="row-menu-dropdown" role="menu">
                    <button
                        className="row-menu-item row-menu-item--edit"
                        role="menuitem"
                        onClick={() => { setOpen(false); onEdit(item); }}
                    >
                        <EditIcon /> Edit
                    </button>
                    <div className="row-menu-divider" />
                    <button
                        className="row-menu-item row-menu-item--delete"
                        role="menuitem"
                        onClick={() => { setOpen(false); onDelete(item); }}
                    >
                        <DeleteIcon /> Delete
                    </button>
                </div>
            )}
        </div>
    );
}

export default function FilterCatalog() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [modalPhoto, setModalPhoto] = useState(null);
    const [editItem, setEditItem] = useState(null);
    const [deleteItem, setDeleteItem] = useState(null);
    const [exporting, setExporting] = useState(false);
    const [exportingPDF, setExportingPDF] = useState(false);

    const { data: rawData = [], isLoading, isError } = useGetCatalogQuery();
    const [updateCatalog] = useUpdateCatalogMutation();

    const [localData, setLocalData] = useState([]);
    useEffect(() => { setLocalData(rawData); }, [rawData]);

    const filteredData = useMemo(
        () => filterCatalogItems(localData, search),
        [localData, search],
    );

    useEffect(() => { setPage(1); }, [search]);

    const handlePreview = useCallback(
        ({ src, trt }) => setModalPhoto({ src, trt }),
        [],
    );

    const handleSave = useCallback((updated) => {
        setLocalData(prev => prev.map(p => p.id === updated.id ? updated : p));
    }, []);

    const handleConfirmDelete = useCallback((item) => {
        setLocalData(prev => prev.filter(p => p.id !== item.id));
    }, []);

    const handleExportExcel = useCallback(async () => {
        if (!filteredData.length) return;
        setExporting(true);
        try { await exportCatalogExcel(filteredData); }
        finally { setExporting(false); }
    }, [filteredData]);

    const handleExportPdf = useCallback(async () => {
        if (!filteredData.length) return;
        setExportingPDF(true);
        try { await exportCatalogPdf(filteredData); }
        finally { setExportingPDF(false); }
    }, [filteredData]);

    const totalPages = Math.max(1, Math.ceil(filteredData.length / PAGE_SIZE));
    const safePage = Math.min(page, totalPages);
    const pageData = filteredData.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

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
                        <span className="fc-subtitle">
                            {search.trim()
                                ? `${filteredData.length} of ${localData.length} parts`
                                : `${localData.length} total parts`}
                        </span>
                    </div>
                </div>
                <div className="fc-actions">
                    <button
                        className="fc-btn fc-btn--excel"
                        onClick={handleExportExcel}
                        disabled={exporting || !filteredData.length}
                        title="Download Excel"
                    >
                        <ExcelIcon /> <span>{exporting ? "Saving..." : "Excel"}</span>
                    </button>
                    <button
                        className="fc-btn fc-btn--pdf"
                        onClick={handleExportPdf}
                        disabled={exportingPDF || !filteredData.length}
                        title="Download PDF"
                    >
                        <PdfIcon /> <span>{exportingPDF ? "Saving..." : "PDF"}</span>
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
                        placeholder="TRT, OEM, CTR, LEMFÖRDER, name, car, model, years, KG..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        autoComplete="off"
                        spellCheck="false"
                    />
                </label>
                <div className="fc-counter" aria-live="polite">
                    <b>{filteredData.length}</b>
                </div>
            </div>

            <div className="fc-table-wrap" role="region" aria-label="Parts table" tabIndex={0}>
                <table className="fc-table" aria-rowcount={filteredData.length + 1}>
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
                            <tr key={`${p.id ?? "row"}-${i}`} style={{ "--row-i": i }}>
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
                                    {typeof p.weightPerPcKg === "number"
                                        ? p.weightPerPcKg.toFixed(3)
                                        : p.weightPerPcKg}
                                </td>

                                <td className="cell-actions">
                                    <RowMenu
                                        item={p}
                                        onEdit={setEditItem}
                                        onDelete={setDeleteItem}
                                    />
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
                        {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filteredData.length)} / {filteredData.length}
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

            {editItem && (
                <EditModal
                    item={editItem}
                    onClose={() => setEditItem(null)}
                    onSave={handleSave}
                    onUpdate={updateCatalog}
                />
            )}

            {deleteItem && (
                <DeleteModal
                    item={deleteItem}
                    onClose={() => setDeleteItem(null)}
                    onConfirm={handleConfirmDelete}
                />
            )}
        </div>
    );
}