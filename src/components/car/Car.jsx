//1-variant
// import { useState, useRef, useEffect } from "react";
// import "./car.scss";

// const carImage = "/assets/car/main.png";
// const carImage2 = "/assets/car/2.png";  

// const PARTS = [
//     {
//         id: "rack-end",
//         label: "Rack End",
//         description: "Connects the rack to the tie rod end and transfers steering input to the wheels.",
//         dotPos: { top: "62%", left: "22%" },
//         boxPos: { top: "8%", left: "2%" },
//         size: 80,
//     },
//     {
//         id: "tie-rod",
//         label: "Tie Rod End",
//         description: "Connects the tie rod to the steering knuckle and allows smooth steering movement.",
//         dotPos: { top: "52%", left: "30%" },
//         boxPos: { top: "8%", left: "35%" },
//         size: 80,
//     },
//     {
//         id: "rubber",
//         label: "Rubber Components",
//         description: "Bushings and mounts reduce vibration, noise and ensure smooth operation.",
//         dotPos: { top: "78%", left: "20%" },
//         boxPos: { top: "72%", left: "2%" },
//         size: 80,
//     },
//     {
//         id: "control-arm",
//         label: "Control Arm",
//         description: "Connects the suspension to the chassis and allows the wheel to move up and down while maintaining alignment.",
//         dotPos: { top: "80%", left: "38%" },
//         boxPos: { top: "72%", left: "32%" },
//         size: 80,
//     },
//     {
//         id: "ball-joint",
//         label: "Ball Joint",
//         description: "Allows the control arm to pivot and keeps the wheel attached while allowing smooth movement.",
//         dotPos: { top: "80%", left: "58%" },
//         boxPos: { top: "72%", left: "54%" },
//         size: 80,
//     },
//     {
//         id: "stabilizer",
//         label: "Stabilizer Link",
//         description: "Connects the stabilizer bar to the suspension and reduces body roll during cornering.",
//         dotPos: { top: "68%", left: "80%" },
//         boxPos: { top: "72%", left: "76%" },
//         size: 80,
//     },
// ];

// function AnimatedLine({ dotPos, boxPos, active }) {
//     const svgRef = useRef(null);
//     const [path, setPath] = useState("");
//     const [length, setLength] = useState(0);

//     useEffect(() => {
//         if (!svgRef.current) return;
//         const container = svgRef.current.parentElement;
//         const w = container.offsetWidth;
//         const h = container.offsetHeight;

//         const x1 = (parseFloat(dotPos.left) / 100) * w;
//         const y1 = (parseFloat(dotPos.top) / 100) * h;

//         const bx = (parseFloat(boxPos.left) / 100) * w + 80;
//         const by = (parseFloat(boxPos.top) / 100) * h + (parseFloat(boxPos.top) > 50 ? 0 : 70);

//         const mx = (x1 + bx) / 2;
//         const d = `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${by}, ${bx} ${by}`;
//         setPath(d);

//         const dx = bx - x1;
//         const dy = by - y1;
//         setLength(Math.sqrt(dx * dx + dy * dy) * 1.5);
//     }, [dotPos, boxPos]);

//     return (
//         <svg
//             ref={svgRef}
//             className={`pcars__line-svg${active ? " is-active" : ""}`}
//             style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 5 }}
//         >
//             <path
//                 d={path}
//                 fill="none"
//                 stroke="#c0392b"
//                 strokeWidth="1.5"
//                 strokeDasharray={length}
//                 strokeDashoffset={active ? 0 : length}
//                 style={{ transition: active ? "stroke-dashoffset 0.6s cubic-bezier(0.4,0,0.2,1)" : "stroke-dashoffset 0.3s ease" }}
//             />
//             {path && (
//                 <circle
//                     cx={`${parseFloat(dotPos.left)}%`}
//                     cy={`${parseFloat(dotPos.top)}%`}
//                     r="5"
//                     fill="#c0392b"
//                     opacity={active ? 1 : 0}
//                     style={{ transition: "opacity 0.3s ease 0.1s" }}
//                 />
//             )}
//         </svg>
//     );
// }

// export default function Car() {
//     const [activeId, setActiveId] = useState(null);
//     const active = PARTS.find((p) => p.id === activeId) || null;

//     const toggle = (id) => {
//         setActiveId((cur) => (cur === id ? null : id));
//     };

//     return (
//         <section className="pcars container">
//             <div className="pcars__wrap">
//                 <p className="pcars__label">Suspension & Steering</p>
//                 <h1 className="pcars__title">Toyota Supra</h1>
//                 <p className="pcars__sub">Select a component below to explore its location and function</p>

//                 <div className="pcars__stage">
//                     <div className="pcars__stage-bg" />

//                     {PARTS.map((p) => (
//                         <AnimatedLine
//                             key={p.id}
//                             dotPos={p.dotPos}
//                             boxPos={p.boxPos}
//                             active={activeId === p.id}
//                         />
//                     ))}

//                     {PARTS.map((p) => {
//                         const isActive = activeId === p.id;
//                         const isTop = parseFloat(p.boxPos.top) < 50;
//                         return (
//                             <div
//                                 key={p.id}
//                                 className={`pcars__annotation${isActive ? " is-active" : ""}${isTop ? " is-top" : " is-bottom"}`}
//                                 style={{ top: p.boxPos.top, left: p.boxPos.left }}
//                             >
//                                 <span className="pcars__ann-label">{p.label}</span>
//                                 <span className="pcars__ann-desc">{p.description}</span>
//                             </div>
//                         );
//                     })}

//                     <div className="pcars__car">
//                         <img src={carImage} alt="Toyota Supra suspension diagram" />
//                     </div>
//                 </div>

//                 <div className="pcars__row">
//                     {PARTS.map((p) => {
//                         const isActive = activeId === p.id;
//                         return (
//                             <button
//                                 key={p.id}
//                                 type="button"
//                                 className={`pcars__card${isActive ? " is-active" : ""}`}
//                                 onClick={() => toggle(p.id)}
//                             >
//                                 <span className="pcars__name">{p.label}</span>
//                                 {isActive && (
//                                     <span className="pcars__cardsub">{p.description}</span>
//                                 )}
//                                 <span className="pcars__learn">{isActive ? "Selected ↑" : "View →"}</span>
//                             </button>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// }


//2-variant

// import { useState, useRef, useEffect } from "react";
// import carImage from "../../assets/car/main.png";
// import pistonImg from "../../assets/car/two.png";
// import brakeImg from "../../assets/car/ong.png";
// import shockImg from "../../assets/car/three.png";
// import bearingImg from "../../assets/car/five.png";
// import timingImg from "../../assets/car/four.png";
// import "./car.scss";

// const PARTS = [
//     {
//         id: "piston",
//         image: pistonImg,
//         name: "PISTON",
//         desc: "Dvigatel ichida yonish kuchini mexanik harakatga aylantiradi va silindrda oldinga-orqaga harakatlanadi.",
//         anchor: { top: 55, left: 27 },
//         boxSide: "top-left",
//     },
//     {
//         id: "brake",
//         image: brakeImg,
//         name: "TORMOZ DISK",
//         desc: "G'ildirak bilan birga aylanib, tormoz paroknalari siqilganda avtomobilni to'xtatuvchi disk.",
//         anchor: { top: 65, left: 23 },
//         boxSide: "bottom-left",
//     },
//     {
//         id: "shock",
//         image: shockImg,
//         name: "AMORTIZATOR",
//         desc: "Yo'l notekisliklarini yutib, haydovchi va yo'lovchilarga qulay yurish ta'minlaydi.",
//         anchor: { top: 38, left: 73 },
//         boxSide: "top-right",
//     },
//     {
//         id: "bearing",
//         image: bearingImg,
//         name: "PODSHIPNIK",
//         desc: "G'ildirak o'qi atrofida silliq aylanishni ta'minlab, ishqalanish va yeyilishni kamaytiradi.",
//         anchor: { top: 72, left: 82 },
//         boxSide: "bottom-right",
//     },
//     {
//         id: "timing",
//         image: timingImg,
//         name: "ZANJIR (TIMING)",
//         desc: "Krank va klapan millarini sinxron aylantiradi, dvigatel vaqtini aniq ushlab turadi.",
//         anchor: { top: 48, left: 22 },
//         boxSide: "top-left",
//     },
// ];

// function getLineGeometry(anchor, boxSide, containerW, containerH) {
//     const ax = (anchor.left / 100) * containerW;
//     const ay = (anchor.top / 100) * containerH;

//     const LINE_LEN = 90;
//     const CURVE = 60;

//     let ex, ey, bx, by;

//     switch (boxSide) {
//         case "top-left":
//             ex = ax - LINE_LEN;
//             ey = ay - LINE_LEN;
//             bx = ex - 220;
//             by = ey - 80;
//             break;
//         case "top-right":
//             ex = ax + LINE_LEN;
//             ey = ay - LINE_LEN;
//             bx = ex;
//             by = ey - 80;
//             break;
//         case "bottom-left":
//             ex = ax - LINE_LEN;
//             ey = ay + LINE_LEN;
//             bx = ex - 220;
//             by = ey;
//             break;
//         case "bottom-right":
//         default:
//             ex = ax + LINE_LEN;
//             ey = ay + LINE_LEN;
//             bx = ex;
//             by = ey;
//             break;
//     }

//     // Keep box inside container
//     bx = Math.max(0, Math.min(bx, containerW - 225));
//     by = Math.max(0, Math.min(by, containerH - 100));

//     const path = `M ${ax} ${ay} C ${ax} ${(ay + ey) / 2}, ${ex} ${(ay + ey) / 2}, ${ex} ${ey}`;

//     return { ax, ay, ex, ey, path, bx, by };
// }

// export default function Car() {
//     const [activeId, setActiveId] = useState(null);
//     const carRef = useRef(null);
//     const [dims, setDims] = useState({ w: 820, h: 461 });

//     useEffect(() => {
//         const update = () => {
//             if (carRef.current) {
//                 const r = carRef.current.getBoundingClientRect();
//                 setDims({ w: r.width, h: r.height });
//             }
//         };
//         update();
//         window.addEventListener("resize", update);
//         return () => window.removeEventListener("resize", update);
//     }, []);

//     const active = PARTS.find((p) => p.id === activeId) || null;

//     const toggle = (id) => setActiveId((cur) => (cur === id ? null : id));

//     return (
//         <section className="pcars container">
//             <div className="pcars__wrap">
//                 <h1 style={{ paddingBottom: "40px" }} className="pcars__title">
//                     Passenger Cars
//                 </h1>

//                 <div className="pcars__stage">
//                     <div className="pcars__stage-bg" />

//                     {/* Car image + overlays */}
//                     <div className="pcars__car" ref={carRef}>
//                         <img src={carImage} alt="Avtomobil sxemasi" />

//                         {/* One annotation layer per part */}
//                         {PARTS.map((p) => {
//                             const isActive = activeId === p.id;
//                             const { ax, ay, ex, ey, path, bx, by } = getLineGeometry(
//                                 p.anchor,
//                                 p.boxSide,
//                                 dims.w,
//                                 dims.h
//                             );

//                             return (
//                                 <div
//                                     key={p.id}
//                                     className={`pcars__annotation${isActive ? " is-active" : ""}`}
//                                     style={{ inset: 0, position: "absolute" }}
//                                 >
//                                     {/* SVG line */}
//                                     <svg
//                                         className="pcars__ann-svg"
//                                         width={dims.w}
//                                         height={dims.h}
//                                         viewBox={`0 0 ${dims.w} ${dims.h}`}
//                                     >
//                                         <path className="pcars__ann-line" d={path} />
//                                         {/* dot at anchor */}
//                                         <circle
//                                             className="pcars__ann-dot"
//                                             cx={ax}
//                                             cy={ay}
//                                             r={5}
//                                         />
//                                         {/* dot at line end */}
//                                         <circle
//                                             className="pcars__ann-dot"
//                                             cx={ex}
//                                             cy={ey}
//                                             r={3}
//                                         />
//                                     </svg>

//                                     {/* Label box */}
//                                     <div
//                                         className="pcars__ann-box"
//                                         style={{ left: bx, top: by }}
//                                     >
//                                         <div className="pcars__ann-title">{p.name}</div>
//                                         <div className="pcars__ann-desc">{p.desc}</div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* Part cards */}
//                 <div className="pcars__row">
//                     {PARTS.map((p) => {
//                         const isActive = activeId === p.id;
//                         return (
//                             <button
//                                 key={p.id}
//                                 type="button"
//                                 className={`pcars__card${isActive ? " is-active" : ""}`}
//                                 onClick={() => toggle(p.id)}
//                             >
//                                 <span className="pcars__icon">
//                                     <img src={p.image} alt={p.name} loading="lazy" />
//                                 </span>
//                                 <span className="pcars__name">{p.name}</span>
//                             </button>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// }


// 3-variant

import { useState, useRef, useEffect, useCallback } from "react";
import "./car.scss";

import carImage from "../../assets/car/main.png";

const PARTS = [
    {
        id: "rack-end",
        label: "RACK END",
        desc: "Connects the rack to the tie rod end and transfers steering input to the wheels.",
        dot: { t: 59, l: 20 },
        box: { t: 2, l: 1, side: "top" },
    },
    {
        id: "tie-rod",
        label: "TIE ROD END",
        desc: "Connects the tie rod to the steering knuckle and allows steering movement.",
        dot: { t: 57, l: 30 },
        box: { t: 2, l: 36, side: "top" },
    },
    {
        id: "rubber",
        label: "RUBBER COMPONENTS",
        desc: "Bushings and mounts reduce vibration, noise and ensure smooth operation.",
        dot: { t: 56, l: 20 },
        box: { t: 96, l: 1, side: "bot" },
    },
    {
        id: "control-arm",
        label: "CONTROL ARM",
        desc: "Connects the suspension to the chassis and allows the wheel to move up and down while maintaining alignment.",
        dot: { t: 70, l: 40 },
        box: { t: 96, l: 28, side: "bot" },
    },
    {
        id: "ball-joint",
        label: "BALL JOINT",
        desc: "Allows the control arm to pivot and keeps the wheel attached while allowing smooth movement.",
        dot: { t: 78, l: 58 },
        box: { t: 96, l: 52, side: "bot" },
    },
    {
        id: "stabilizer",
        label: "STABILIZER LINK",
        desc: "Connects the stabilizer bar to the suspension and reduces body roll during cornering.",
        dot: { t: 64, l: 79 },
        box: { t: 96, l: 74, side: "bot" },
    },
];

function useStageDims(ref) {
    const [dims, setDims] = useState({ w: 800, h: 450 });
    useEffect(() => {
        const measure = () => {
            if (ref.current) setDims({ w: ref.current.offsetWidth, h: ref.current.offsetHeight });
        };
        measure();
        const ro = new ResizeObserver(measure);
        if (ref.current) ro.observe(ref.current);
        return () => ro.disconnect();
    }, []);
    return dims;
}

function SvgLine({ part, active, dims, annRefs, imgRef }) {
    const [pathD, setPathD] = useState("");
    const [len, setLen] = useState(200);
    const pathRef = useRef(null);

    useEffect(() => {
        const w = dims.w, h = dims.h;
        const x1 = part.dot.l / 100 * w;
        const y1 = part.dot.t / 100 * h;

        const annEl = annRefs.current[part.id];
        const annW = annEl ? Math.max(annEl.offsetWidth, 150) : 150;
        const annH = annEl ? Math.max(annEl.offsetHeight, 46) : 46;

        const bx = part.box.l / 100 * w + annW / 2;
        const by = part.box.side === "top"
            ? part.box.t / 100 * h + annH
            : part.box.t / 100 * h;

        // Clamp vertical midpoint so line never crosses the car image
        const imgEl = imgRef.current;
        const imgTop = imgEl ? imgEl.offsetTop : h * 0.15;
        const imgBot = imgEl ? imgEl.offsetTop + imgEl.offsetHeight : h * 0.85;

        let vy;
        if (part.box.side === "top") {
            vy = Math.min((y1 + by) / 2, imgTop - 10);
        } else {
            vy = Math.max((y1 + by) / 2, imgBot + 10);
        }

        // Short L-bend: dot → vertical to vy → horizontal to bx → vertical to annotation
        const d = `M ${x1} ${y1} L ${x1} ${vy} L ${bx} ${vy} L ${bx} ${by}`;
        const totalLen = Math.abs(y1 - vy) + Math.abs(bx - x1) + Math.abs(vy - by) + 2;

        setPathD(d);
        setLen(totalLen);
    }, [dims, part, annRefs, imgRef]);

    // Re-trigger CSS animation on each activation
    useEffect(() => {
        const el = pathRef.current;
        if (!el) return;
        el.classList.remove("active");
        void el.offsetWidth; // reflow
        if (active) el.classList.add("active");
    }, [active]);

    return (
        <path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="#c0392b"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={len}
            strokeDashoffset={active ? undefined : len}
            style={{ "--len": len }}
            className="pcars__svg-path"
        />
    );
}

export default function Car() {
    const [activeId, setActiveId] = useState(null);
    const stageRef = useRef(null);
    const annRefs = useRef({});
    const imgRef = useRef(null);
    const dims = useStageDims(stageRef);

    const toggle = useCallback((id) => {
        setActiveId((cur) => cur === id ? null : id);
    }, []);

    return (
        <section className="pcars container">
            <div className="pcars__wrap">
                <div className="pcars__stage" ref={stageRef}>

                    <svg className="pcars__lines" style={{ overflow: "visible" }}>
                        {PARTS.map((p) => (
                            <SvgLine
                                key={p.id}
                                part={p}
                                active={activeId === p.id}
                                dims={dims}
                                annRefs={annRefs}
                                imgRef={imgRef}
                            />
                        ))}
                    </svg>

                    {PARTS.map((p) => (
                        <span
                            key={p.id}
                            className={`pcars__dot${activeId === p.id ? " is-on" : ""}`}
                            style={{ top: `${p.dot.t}%`, left: `${p.dot.l}%` }}
                        />
                    ))}

                    {PARTS.map((p) => (
                        <div
                            key={p.id}
                            ref={(el) => { annRefs.current[p.id] = el; }}
                            className={`pcars__ann pcars__ann--${p.box.side}${activeId === p.id ? " is-on" : ""}`}
                            style={{ top: `${p.box.t}%`, left: `${p.box.l}%` }}
                        >
                            <span className="pcars__ann-label">{p.label}</span>
                            <span className="pcars__ann-desc">{p.desc}</span>
                        </div>
                    ))}

                    <img
                        ref={imgRef}
                        src={carImage}
                        alt="Toyota Supra"
                        className="pcars__car-img"
                    />
                </div>

                <div className="pcars__row">
                    {PARTS.map((p, i) => {
                        const isOn = activeId === p.id;
                        return (
                            <button
                                key={p.id}
                                className={`pcars__card${isOn ? " is-on" : ""}`}
                                style={{ "--i": i }}
                                onClick={() => toggle(p.id)}
                                type="button"
                            >
                                <span className="pcars__card-bar" />
                                <span className="pcars__card-name">{p.label}</span>
                                {isOn && <span className="pcars__card-desc">{p.desc}</span>}
                                <span className="pcars__card-hint">{isOn ? "Yopish ↑" : "Ko'rish \u2192"}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// import { useState, useRef, useEffect, useCallback } from "react";
// import "./car.scss";

// import carImage from "../../assets/car/main.png";

// const PARTS = [
//     {
//         id: "rack-end",
//         label: "RACK END",
//         desc: "Connects the rack to the tie rod end and transfers steering input to the wheels.",
//         dot: { t: 59, l: 20 },
//         box: { t: 2, l: 1, side: "top" },
//     },
//     {
//         id: "tie-rod",
//         label: "TIE ROD END",
//         desc: "Connects the tie rod to the steering knuckle and allows steering movement.",
//         dot: { t: 57, l: 30 },
//         box: { t: 2, l: 36, side: "top" },
//     },
//     {
//         id: "rubber",
//         label: "RUBBER COMPONENTS",
//         desc: "Bushings and mounts reduce vibration, noise and ensure smooth operation.",
//         dot: { t: 56, l: 20 },
//         box: { t: 96, l: 1, side: "bot" },
//     },
//     {
//         id: "control-arm",
//         label: "CONTROL ARM",
//         desc: "Connects the suspension to the chassis and allows the wheel to move up and down while maintaining alignment.",
//         dot: { t: 70, l: 40 },
//         box: { t: 96, l: 28, side: "bot" },
//     },
//     {
//         id: "ball-joint",
//         label: "BALL JOINT",
//         desc: "Allows the control arm to pivot and keeps the wheel attached while allowing smooth movement.",
//         dot: { t: 78, l: 58 },
//         box: { t: 96, l: 52, side: "bot" },
//     },
//     {
//         id: "stabilizer",
//         label: "STABILIZER LINK",
//         desc: "Connects the stabilizer bar to the suspension and reduces body roll during cornering.",
//         dot: { t: 64, l: 79 },
//         box: { t: 96, l: 74, side: "bot" },
//     },
// ];

// function useStageDims(ref) {
//     const [dims, setDims] = useState({ w: 800, h: 450 });
//     useEffect(() => {
//         const measure = () => {
//             if (ref.current) setDims({ w: ref.current.offsetWidth, h: ref.current.offsetHeight });
//         };
//         measure();
//         const ro = new ResizeObserver(measure);
//         if (ref.current) ro.observe(ref.current);
//         return () => ro.disconnect();
//     }, []);
//     return dims;
// }

// function SvgLine({ part, active, dims, annRefs }) {
//     const [pathD, setPathD] = useState("");
//     const [len, setLen] = useState(200);

//     useEffect(() => {
//         const w = dims.w, h = dims.h;
//         const x1 = part.dot.l / 100 * w;
//         const y1 = part.dot.t / 100 * h;
//         const annEl = annRefs.current[part.id];
//         const annW = annEl ? Math.max(annEl.offsetWidth, 150) : 150;
//         const annH = annEl ? Math.max(annEl.offsetHeight, 52) : 52;

//         const bx = part.box.l / 100 * w + annW / 2;
//         const by = part.box.side === "top"
//             ? part.box.t / 100 * h + annH
//             : part.box.t / 100 * h;

//         const d = `M ${x1} ${y1} C ${x1} ${(y1 + by) / 2}, ${bx} ${(y1 + by) / 2}, ${bx} ${by}`;
//         const l = Math.hypot(bx - x1, by - y1) * 1.1 + 10;
//         setPathD(d);
//         setLen(l);
//     }, [dims, part, annRefs]);

//     return (
//         <path
//             d={pathD}
//             fill="none"
//             stroke="#c0392b"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeDasharray={len}
//             strokeDashoffset={active ? 0 : len}
//             className={`pcars__svg-path${active ? " active" : ""}`}
//         />
//     );
// }

// export default function Car() {
//     const [activeId, setActiveId] = useState(null);
//     const stageRef = useRef(null);
//     const annRefs = useRef({});
//     const dims = useStageDims(stageRef);

//     const toggle = useCallback((id) => {
//         setActiveId((cur) => cur === id ? null : id);
//     }, []);

//     return (
//         <section className="pcars container">
//             <div className="pcars__wrap">
//                 <p className="pcars__label">Suspension &amp; Steering</p>
//                 <h1 className="pcars__title">Toyota Supra</h1>
//                 <p className="pcars__sub">Zapchastni bosing — joyi va tavsifi animatsiya bilan chiqadi</p>

//                 <div className="pcars__stage" ref={stageRef}>

//                     <svg className="pcars__lines" style={{ overflow: "visible" }}>
//                         {PARTS.map((p) => (
//                             <SvgLine key={p.id} part={p} active={activeId === p.id} dims={dims} annRefs={annRefs} />
//                         ))}
//                     </svg>

//                     {PARTS.map((p) => (
//                         <span
//                             key={p.id}
//                             className={`pcars__dot${activeId === p.id ? " is-on" : ""}`}
//                             style={{ top: `${p.dot.t}%`, left: `${p.dot.l}%` }}
//                         />
//                     ))}

//                     {PARTS.map((p) => (
//                         <div
//                             key={p.id}
//                             ref={(el) => { annRefs.current[p.id] = el; }}
//                             className={`pcars__ann pcars__ann--${p.box.side}${activeId === p.id ? " is-on" : ""}`}
//                             style={{ top: `${p.box.t}%`, left: `${p.box.l}%` }}
//                         >
//                             <span className="pcars__ann-label">{p.label}</span>
//                             <span className="pcars__ann-desc">{p.desc}</span>
//                         </div>
//                     ))}

//                     <img src={carImage} alt="Toyota Supra" className="pcars__car-img" />
//                 </div>

//                 <div className="pcars__row">
//                     {PARTS.map((p, i) => {
//                         const isOn = activeId === p.id;
//                         return (
//                             <button
//                                 key={p.id}
//                                 className={`pcars__card${isOn ? " is-on" : ""}`}
//                                 style={{ "--i": i }}
//                                 onClick={() => toggle(p.id)}
//                                 type="button"
//                             >
//                                 <span className="pcars__card-bar" />
//                                 <span className="pcars__card-name">{p.label}</span>
//                                 {isOn && <span className="pcars__card-desc">{p.desc}</span>}
//                                 <span className="pcars__card-hint">{isOn ? "Yopish ↑" : "Ko'rish \u2192"}</span>
//                             </button>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// }