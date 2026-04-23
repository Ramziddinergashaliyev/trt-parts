// import { useState, useRef, useEffect } from "react";
// import "./car.scss";

// const parts = [
//     {
//         id: 1,
//         name: "Engine",
//         uz: "Dvigatel",
//         icon: "⚙️",
//         x: 62,
//         y: 52,
//         description: "High-performance combustion engine, 2.0L turbocharged",
//         color: "#c0392b",
//         hotspot: { cx: 62, cy: 52 },
//     },
//     {
//         id: 2,
//         name: "Transmission",
//         uz: "Uzatmalar qutisi",
//         icon: "🔧",
//         x: 53,
//         y: 60,
//         description: "8-speed automatic transmission with paddle shifters",
//         color: "#e67e22",
//         hotspot: { cx: 53, cy: 60 },
//     },
//     {
//         id: 3,
//         name: "Front Suspension",
//         uz: "Old amortizator",
//         icon: "🔩",
//         x: 28,
//         y: 60,
//         description: "MacPherson strut independent front suspension",
//         color: "#2980b9",
//         hotspot: { cx: 28, cy: 60 },
//     },
//     {
//         id: 4,
//         name: "Rear Suspension",
//         uz: "Orqa amortizator",
//         icon: "🔩",
//         x: 78,
//         y: 62,
//         description: "Multi-link rear suspension for optimal handling",
//         color: "#8e44ad",
//         hotspot: { cx: 78, cy: 62 },
//     },
//     {
//         id: 5,
//         name: "Brake System",
//         uz: "Tormoz tizimi",
//         icon: "🛑",
//         x: 22,
//         y: 70,
//         description: "Ventilated disc brakes with ABS and EBD",
//         color: "#e74c3c",
//         hotspot: { cx: 22, cy: 70 },
//     },
//     {
//         id: 6,
//         name: "Steering",
//         uz: "Rul mexanizmi",
//         icon: "🎯",
//         x: 38,
//         y: 38,
//         description: "Electric power-assisted rack and pinion steering",
//         color: "#16a085",
//         hotspot: { cx: 38, cy: 38 },
//     },
//     {
//         id: 7,
//         name: "Fuel Tank",
//         uz: "Yoqilg'i baki",
//         icon: "⛽",
//         x: 70,
//         y: 68,
//         description: "60L capacity steel fuel tank with vapor recovery",
//         color: "#f39c12",
//         hotspot: { cx: 70, cy: 68 },
//     },
//     {
//         id: 8,
//         name: "Exhaust System",
//         uz: "Chiqindi tizimi",
//         icon: "💨",
//         x: 85,
//         y: 68,
//         description: "Stainless steel cat-back exhaust with muffler",
//         color: "#7f8c8d",
//         hotspot: { cx: 85, cy: 68 },
//     },
//     {
//         id: 9,
//         name: "Radiator",
//         uz: "Radiator",
//         icon: "❄️",
//         x: 20,
//         y: 48,
//         description: "Aluminum cross-flow radiator with electric fan",
//         color: "#1abc9c",
//         hotspot: { cx: 20, cy: 48 },
//     },
//     {
//         id: 10,
//         name: "NVH Mount",
//         uz: "NVH tayanch",
//         icon: "🔇",
//         x: 50,
//         y: 45,
//         description: "Hydraulic engine mount for vibration isolation",
//         color: "#d35400",
//         hotspot: { cx: 50, cy: 45 },
//     },
// ];

// const CAR_SVG = `
// <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
//   <defs>
//     <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//       <stop offset="0%" style="stop-color:#e8e8e8;stop-opacity:0.9"/>
//       <stop offset="100%" style="stop-color:#c5c5c5;stop-opacity:0.7"/>
//     </linearGradient>
//     <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//       <stop offset="0%" style="stop-color:#dde8f0;stop-opacity:0.5"/>
//       <stop offset="100%" style="stop-color:#a8c8e8;stop-opacity:0.3"/>
//     </linearGradient>
//     <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
//       <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="rgba(0,0,0,0.2)"/>
//     </filter>
//     <filter id="glow">
//       <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//       <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
//     </filter>
//   </defs>

//   <!-- Car shadow -->
//   <ellipse cx="400" cy="390" rx="280" ry="18" fill="rgba(0,0,0,0.12)"/>

//   <!-- Car body lower -->
//   <path d="M120 280 Q130 320 170 330 L630 330 Q670 320 680 280 L680 240 L120 240 Z" 
//         fill="url(#bodyGrad)" stroke="#bbb" stroke-width="1.5" filter="url(#shadow)"/>

//   <!-- Car body upper -->
//   <path d="M200 240 Q220 180 280 155 L430 145 Q510 148 540 160 L620 240 Z" 
//         fill="url(#bodyGrad)" stroke="#bbb" stroke-width="1.5"/>

//   <!-- Windshield -->
//   <path d="M285 158 Q290 175 305 238 L490 238 Q495 175 510 160 Z" 
//         fill="url(#glassGrad)" stroke="#aac" stroke-width="1"/>

//   <!-- Rear window -->
//   <path d="M200 242 Q210 210 235 185 L280 155 Q270 180 285 238 Z" 
//         fill="url(#glassGrad)" stroke="#aac" stroke-width="1" opacity="0.7"/>

//   <!-- Front window -->
//   <path d="M510 162 Q540 185 555 210 L570 240 L490 240 Z" 
//         fill="url(#glassGrad)" stroke="#aac" stroke-width="1" opacity="0.7"/>

//   <!-- Hood -->
//   <path d="M120 242 Q140 235 200 238 L200 255 Q140 252 120 258 Z" 
//         fill="#d8d8d8" stroke="#bbb" stroke-width="1"/>

//   <!-- Trunk -->
//   <path d="M620 240 L680 242 L680 260 L620 258 Z" 
//         fill="#d8d8d8" stroke="#bbb" stroke-width="1"/>

//   <!-- Front Wheel -->
//   <circle cx="210" cy="330" r="52" fill="#2a2a2a" stroke="#444" stroke-width="3"/>
//   <circle cx="210" cy="330" r="38" fill="#333" stroke="#555" stroke-width="2"/>
//   <circle cx="210" cy="330" r="26" fill="#1a1a1a" stroke="#3a3a3a" stroke-width="2"/>
//   <circle cx="210" cy="330" r="12" fill="#555" stroke="#888" stroke-width="1.5"/>
//   <!-- Wheel spokes -->
//   <line x1="210" y1="304" x2="210" y2="318" stroke="#666" stroke-width="2"/>
//   <line x1="210" y1="342" x2="210" y2="356" stroke="#666" stroke-width="2"/>
//   <line x1="184" y1="330" x2="198" y2="330" stroke="#666" stroke-width="2"/>
//   <line x1="222" y1="330" x2="236" y2="330" stroke="#666" stroke-width="2"/>
//   <line x1="192" y1="312" x2="202" y2="322" stroke="#666" stroke-width="2"/>
//   <line x1="218" y1="338" x2="228" y2="348" stroke="#666" stroke-width="2"/>
//   <line x1="228" y1="312" x2="218" y2="322" stroke="#666" stroke-width="2"/>
//   <line x1="202" y1="338" x2="192" y2="348" stroke="#666" stroke-width="2"/>

//   <!-- Rear Wheel -->
//   <circle cx="590" cy="330" r="52" fill="#2a2a2a" stroke="#444" stroke-width="3"/>
//   <circle cx="590" cy="330" r="38" fill="#333" stroke="#555" stroke-width="2"/>
//   <circle cx="590" cy="330" r="26" fill="#1a1a1a" stroke="#3a3a3a" stroke-width="2"/>
//   <circle cx="590" cy="330" r="12" fill="#555" stroke="#888" stroke-width="1.5"/>
//   <line x1="590" y1="304" x2="590" y2="318" stroke="#666" stroke-width="2"/>
//   <line x1="590" y1="342" x2="590" y2="356" stroke="#666" stroke-width="2"/>
//   <line x1="564" y1="330" x2="578" y2="330" stroke="#666" stroke-width="2"/>
//   <line x1="602" y1="330" x2="616" y2="330" stroke="#666" stroke-width="2"/>
//   <line x1="572" y1="312" x2="582" y2="322" stroke="#666" stroke-width="2"/>
//   <line x1="598" y1="338" x2="608" y2="348" stroke="#666" stroke-width="2"/>
//   <line x1="608" y1="312" x2="598" y2="322" stroke="#666" stroke-width="2"/>
//   <line x1="582" y1="338" x2="572" y2="348" stroke="#666" stroke-width="2"/>

//   <!-- Engine block -->
//   <rect x="130" y="255" width="120" height="70" rx="5" fill="#8a8a8a" stroke="#666" stroke-width="1.5" opacity="0.8"/>
//   <rect x="140" y="265" width="100" height="20" rx="3" fill="#6a6a6a" opacity="0.9"/>
//   <rect x="145" y="290" width="30" height="25" rx="2" fill="#7a7a7a"/>
//   <rect x="180" y="290" width="30" height="25" rx="2" fill="#7a7a7a"/>
//   <rect x="215" y="290" width="30" height="25" rx="2" fill="#7a7a7a"/>

//   <!-- Transmission -->
//   <rect x="255" y="268" width="80" height="50" rx="4" fill="#7a7a7a" stroke="#555" stroke-width="1" opacity="0.8"/>

//   <!-- Driveshaft -->
//   <rect x="340" y="295" width="200" height="10" rx="5" fill="#666" stroke="#555" stroke-width="1" opacity="0.7"/>

//   <!-- Fuel tank -->
//   <ellipse cx="540" cy="290" rx="50" ry="28" fill="#8a8a8a" stroke="#666" stroke-width="1.5" opacity="0.7"/>

//   <!-- Exhaust pipe -->
//   <path d="M650 305 Q670 310 690 308 Q700 307 702 312" stroke="#888" stroke-width="5" fill="none" stroke-linecap="round"/>
//   <path d="M700 310 Q710 308 715 312" stroke="#666" stroke-width="3" fill="none"/>

//   <!-- Radiator front -->
//   <rect x="118" y="248" width="18" height="60" rx="3" fill="#9a9a9a" stroke="#777" stroke-width="1" opacity="0.8"/>
//   <line x1="118" y1="258" x2="136" y2="258" stroke="#666" stroke-width="1"/>
//   <line x1="118" y1="268" x2="136" y2="268" stroke="#666" stroke-width="1"/>
//   <line x1="118" y1="278" x2="136" y2="278" stroke="#666" stroke-width="1"/>
//   <line x1="118" y1="288" x2="136" y2="288" stroke="#666" stroke-width="1"/>
//   <line x1="118" y1="298" x2="136" y2="298" stroke="#666" stroke-width="1"/>

//   <!-- Front suspension struts -->
//   <line x1="210" y1="278" x2="210" y2="255" stroke="#777" stroke-width="6" stroke-linecap="round"/>
//   <line x1="205" y1="255" x2="240" y2="258" stroke="#888" stroke-width="4"/>

//   <!-- Rear suspension -->
//   <line x1="590" y1="278" x2="590" y2="255" stroke="#777" stroke-width="6" stroke-linecap="round"/>
//   <line x1="585" y1="255" x2="555" y2="258" stroke="#888" stroke-width="4"/>

//   <!-- Headlights -->
//   <ellipse cx="122" cy="262" rx="8" ry="14" fill="#f0f0a0" opacity="0.8" stroke="#ddd" stroke-width="1"/>
//   <ellipse cx="122" cy="262" rx="5" ry="10" fill="#ffff80" opacity="0.9"/>

//   <!-- Taillights -->
//   <rect x="678" y="252" width="8" height="20" rx="2" fill="#ff4444" opacity="0.8"/>
//   <rect x="679" y="253" width="6" height="18" rx="2" fill="#ff6666" opacity="0.6"/>

//   <!-- Door lines -->
//   <line x1="300" y1="200" x2="295" y2="330" stroke="#aaa" stroke-width="1" opacity="0.5"/>
//   <line x1="450" y1="195" x2="445" y2="330" stroke="#aaa" stroke-width="1" opacity="0.5"/>

//   <!-- Roof rack hint -->
//   <rect x="250" y="148" width="200" height="5" rx="2" fill="#bbb" opacity="0.4"/>

//   <!-- NVH engine mount -->
//   <rect x="285" y="272" width="30" height="20" rx="4" fill="#6a6a6a" stroke="#444" stroke-width="1.5" opacity="0.85"/>
//   <rect x="292" y="278" width="16" height="8" rx="2" fill="#888" opacity="0.9"/>

//   <!-- Steering column hint -->
//   <line x1="285" y1="200" x2="290" y2="260" stroke="#888" stroke-width="3" opacity="0.6"/>
//   <circle cx="285" cy="195" r="18" fill="none" stroke="#999" stroke-width="2" opacity="0.5"/>
// </svg>
// `;

// export default function Car() {
//     const [activePart, setActivePart] = useState(null);
//     const carRef = useRef(null);
//     const [carDims, setCarDims] = useState({ w: 800, h: 420 });

//     useEffect(() => {
//         const update = () => {
//             if (carRef.current) {
//                 const rect = carRef.current.getBoundingClientRect();
//                 setCarDims({ w: rect.width, h: rect.height });
//             }
//         };
//         update();
//         window.addEventListener("resize", update);
//         return () => window.removeEventListener("resize", update);
//     }, []);

//     const activePd = parts.find((p) => p.id === activePart);

//     const handlePartClick = (partId) => {
//         setActivePart(activePart === partId ? null : partId);
//     };

//     return (
//         <>
//             <div className="section-root">
//                 <div className="section-header">
//                     <span className="section-label">Industrial Solutions</span>
//                     <h1 className="section-title">Passenger Cars</h1>
//                     <div className="section-divider" />
//                     <p className="section-subtitle">
//                         Industrial transferring and value chain improvement
//                     </p>
//                 </div>

//                 <div className="main-layout">
//                     {/* Car Visualization */}
//                     <div className="car-stage">
//                         <div className="car-wrapper" ref={carRef}>
//                             <div
//                                 dangerouslySetInnerHTML={{ __html: CAR_SVG }}
//                                 style={{ display: "block" }}
//                             />
//                             {/* Hotspots overlay */}
//                             <div
//                                 style={{
//                                     position: "absolute",
//                                     inset: 0,
//                                     pointerEvents: "none",
//                                 }}
//                             >
//                                 {parts.map((part) => {
//                                     const xPct = part.x / 100;
//                                     const yPct = part.y / 100;
//                                     const isActive = activePart === part.id;
//                                     return (
//                                         <div
//                                             key={part.id}
//                                             className={`hotspot ${isActive ? "active" : ""}`}
//                                             style={{
//                                                 left: `${xPct * 100}%`,
//                                                 top: `${yPct * 100}%`,
//                                                 pointerEvents: "auto",
//                                                 "--part-color": part.color,
//                                             }}
//                                             onClick={() => handlePartClick(part.id)}
//                                             title={part.name}
//                                         >
//                                             <div className="hotspot-ring" style={{ "--part-color": part.color }}>
//                                                 <div
//                                                     className="hotspot-dot"
//                                                     style={{
//                                                         background: isActive ? part.color : "#fff",
//                                                         borderColor: part.color,
//                                                     }}
//                                                 />
//                                                 <style>{`
//                           .hotspot-ring::before {
//                             border-color: ${part.color};
//                           }
//                         `}</style>
//                                             </div>
//                                             <div className="hotspot-label">{part.name}</div>
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>

//                         {/* Detail Panel */}
//                         <div
//                             className={`detail-panel ${activePd ? "visible" : ""}`}
//                             style={{ "--active-color": activePd?.color }}
//                         >
//                             {activePd && (
//                                 <>
//                                     <div className="detail-panel-header">
//                                         <span className="detail-panel-icon">{activePd.icon}</span>
//                                         <div>
//                                             <div className="detail-panel-title">{activePd.name}</div>
//                                             <div style={{ fontSize: 11, color: activePd.color, marginTop: 2 }}>
//                                                 {activePd.uz}
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <p className="detail-panel-desc">{activePd.description}</p>
//                                     <button
//                                         className="detail-close"
//                                         onClick={() => setActivePart(null)}
//                                     >
//                                         ✕
//                                     </button>
//                                 </>
//                             )}
//                         </div>
//                     </div>

//                     {/* Parts List */}
//                     <div className="parts-grid">
//                         {parts.map((part) => {
//                             const isActive = activePart === part.id;
//                             return (
//                                 <div
//                                     key={part.id}
//                                     className={`part-card ${isActive ? "active" : ""}`}
//                                     style={{
//                                         "--part-color": part.color,
//                                         "--part-bg": part.color + "18",
//                                     }}
//                                     onClick={() => handlePartClick(part.id)}
//                                 >
//                                     <div className="part-icon-wrap">{part.icon}</div>
//                                     <div className="part-info">
//                                         <div className="part-name">{part.name}</div>
//                                         <div className="part-uz">{part.uz}</div>
//                                     </div>
//                                     <span className="part-arrow">→</span>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

import { useState } from "react";
import carImage from "../../assets/car/main.png";
import pistonImg from "../../assets/car/two.png";
import brakeImg from "../../assets/car/ong.png";
import shockImg from "../../assets/car/three.png";
import bearingImg from "../../assets/car/five.png";
import timingImg from "../../assets/car/four.png";
import "./car.scss";

const PARTS = [
    {
        id: "piston",
        name: "Piston Rings",
        sub: "Dvigatel zichligi",
        label: "PISTON RINGS",
        info: "Piston halqalari dvigatel silindrlari ichidagi gazlarning chiqib ketishini oldini oladi va yog'ni nazorat qiladi. Ular yuqori harorat va bosimga chidamli.",
        image: pistonImg,
        pos: { top: "55%", left: "27%" },
        size: 70,
    },
    {
        id: "brake",
        name: "Brake Disc",
        sub: "Tormoz tizimi",
        label: "TORMOZ DISKI",
        info: "Tormoz diski g'ildirak bilan birgalikda aylanadi. Tormoz parokasi diskni qisib, harakatni sekinlashtiradi. Ventillatsion teshiklar haddan tashqari qizishni oldini oladi.",
        image: brakeImg,
        pos: { top: "65%", left: "23.4%" },
        size: 95,
    },
    {
        id: "shock",
        name: "Shock Absorber",
        sub: "Amortizatsiya",
        label: "AMORTIZATOR",
        info: "Amortizator yo'l notekisliklaridan kelib chiqadigan tebranishlarni yutadi. U prujina bilan birgalikda ishlaydi va haydash qulayligini ta'minlaydi.",
        image: shockImg,
        pos: { top: "52%", left: "73%" },
        size: 90,
    },
    {
        id: "bearing",
        name: "Wheel Bearing",
        sub: "G'ildirak o'qi",
        label: "PODSHIPNIK",
        info: "Podshipnik g'ildirakni o'q atrofida erkin aylantiradi va ishqalanishni kamaytiradi. Uning buzilishi g'ildirakdan keluvchi shovqin bilan bilinadi.",
        image: bearingImg,
        pos: { top: "75%", left: "82%" },
        size: 80,
    },
    {
        id: "timing",
        name: "Timing Belt",
        sub: "Sinxronizatsiya",
        label: "GAZ TARQATISH KAMAR",
        info: "Gaz taqsimlash kamari krank valini alyumin boshcha bilan sinxronlaydi. Uning o'z vaqtida almashtirilmasligi dvigatelning jiddiy shikastlanishiga olib kelishi mumkin.",
        image: timingImg,
        pos: { top: "48%", left: "22%" },
        size: 75,
    }
];

const DEFAULT_INFO =
    "Quyidagi zapchast kartochkalaridan birini bosing — mashina ichida joyi ko'rsatiladi";

export default function Car() {
    const [activeId, setActiveId] = useState(null);
    const active = PARTS.find((p) => p.id === activeId) || null;

    const toggle = (id) => {
        setActiveId((cur) => (cur === id ? null : id));
    };

    return (
        <section className="pcars container">
            <div className="pcars__wrap">
                <div className="pcars__label">Yo'lovchi avtomobillari</div>
                <h1 className="pcars__title">Passenger Cars</h1>
                <p className="pcars__sub">
                    Industrial transferring and value chain improvement
                </p>

                <div className="pcars__stage">
                    <div className="pcars__stage-bg" />
                    <div className="pcars__car">
                        <img src={carImage} alt="Yo'lovchi avtomobili sxemasi" />
                        {PARTS.map((p) => {
                            const isActive = activeId === p.id;
                            return (
                                <div
                                    key={p.id}
                                    className={`pcars__placed${isActive ? " is-active" : ""}`}
                                    style={{
                                        top: p.pos.top,
                                        left: p.pos.left,
                                        width: `${p.size}px`,
                                    }}
                                    aria-hidden={!isActive}>
                                    <img src={p.image} alt={p.name} loading="lazy" />
                                    <span className="pcars__placed-tag">{p.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="pcars__row">
                    {PARTS.map((p) => {
                        const isActive = activeId === p.id;
                        return (
                            <button
                                key={p.id}
                                type="button"
                                className={`pcars__card${isActive ? " is-active" : ""
                                    }`}
                                onClick={() => toggle(p.id)}
                            >
                                <span className="pcars__icon">
                                    <img src={p.image} alt={p.name} loading="lazy" />
                                </span>
                                <span className="pcars__name">{p.name}</span>
                                <span className="pcars__cardsub">{p.sub}</span>
                                <span className="pcars__learn">Ko'rish →</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}