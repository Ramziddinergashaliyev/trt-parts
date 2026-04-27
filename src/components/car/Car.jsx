//2-variant
// import { useState, useRef, useEffect } from "react";
// import carImage from "../../assets/car/bg1.png";

// import arm from "../../assets/car/arm.webp";
// import ball from "../../assets/car/ball.webp";
// import road from "../../assets/car/road.webp";
// import rubber from "../../assets/car/rubber.webp";
// import stb from "../../assets/car/stb.webp";
// import rack from "../../assets/car/rack.webp";

// import "./car.scss";

// const PARTS = [
//     {
//         id: "control-arm",
//         image: arm,
//         name: "Control Arm",
//         anchor: { top: 63, left: 70 },
//         boxSide: "top-right",
//     },
//     {
//         id: "ball-joint",
//         image: ball,
//         name: "Ball Joint",
//         anchor: { top: 66, left: 71 },
//         boxSide: "bottom-right",
//     },
//     {
//         id: "tie-rod",
//         image: road,
//         name: "Tie Rod End",
//         anchor: { top: 65, left: 26 },
//         boxSide: "top-left",
//     },
//     {
//         id: "rubber",
//         image: rubber,
//         name: "Rubber Components",
//         anchor: { top: 65, left: 64 },
//         boxSide: "bottom-right",
//     },
//     {
//         id: "stab-link",
//         image: stb,
//         name: "Stabilizer Link",
//         anchor: { top: 60, left: 28 },
//         boxSide: "top-left",
//     },
//     {
//         id: "rack-end",
//         image: rack,
//         name: "Rack End",
//         anchor: { top: 68, left: 42 },
//         boxSide: "top-left",
//     }
// ];

// function getBoxPosition(anchor, boxSide, containerW, containerH) {
//     const ax = (anchor.left / 100) * containerW;
//     const ay = (anchor.top / 100) * containerH;
//     const LINE = 110;

//     let ex, ey, bx, by;

//     switch (boxSide) {
//         case "top-left":
//             ex = ax - LINE; ey = ay - LINE;
//             bx = ex - 175; by = ey - 185;
//             break;

//         case "top-right":
//             ex = ax + LINE; ey = ay - LINE;
//             bx = ex; by = ey - 185;
//             break;

//         case "bottom-left":
//             ex = ax - LINE; ey = ay + LINE;
//             bx = ex - 175; by = ey;
//             break;

//         case "bottom-right":
//         default:
//             ex = ax + LINE; ey = ay + LINE;
//             bx = ex; by = ey;
//             break;
//     }

//     bx = Math.max(4, Math.min(bx, containerW - 179));
//     by = Math.max(4, Math.min(by, containerH - 195));

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

//     const toggle = (id) => setActiveId((cur) => (cur === id ? null : id));

//     return (
//         <section className="pcars container">
//             <div className="pcars__stage">
//                 <div className="pcars__stage-bg" />

//                 <div className="pcars__car" ref={carRef}>
//                     <img src={carImage} alt="Avtomobil sxemasi" />

//                     {PARTS.map((p) => {
//                         const isActive = activeId === p.id;
//                         const { ax, ay, ex, ey, path, bx, by } = getBoxPosition(
//                             p.anchor,
//                             p.boxSide,
//                             dims.w,
//                             dims.h
//                         );

//                         return (
//                             <div
//                                 key={p.id}
//                                 className={`pcars__annotation${isActive ? " is-active" : ""}`}
//                                 style={{ position: "absolute", inset: 0 }}
//                             >
//                                 <svg
//                                     className="pcars__ann-svg"
//                                     width={dims.w}
//                                     height={dims.h}
//                                     viewBox={`0 0 ${dims.w} ${dims.h}`}
//                                 >
//                                     <path className="pcars__ann-line" d={path} />
//                                     <circle className="pcars__ann-dot" cx={ax} cy={ay} r={5} />
//                                     <circle className="pcars__ann-dot" cx={ex} cy={ey} r={3} />
//                                 </svg>

//                                 <div className="pcars__ann-box" style={{ left: bx, top: by }}>
//                                     <div className="pcars__ann-img-wrap">
//                                         <img src={p.image} alt={p.name} className="pcars__ann-img" />
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>

//             <div className="pcars__row">
//                 {PARTS.map((p) => (
//                     <button
//                         key={p.id}
//                         type="button"
//                         className={`pcars__card${activeId === p.id ? " is-active" : ""}`}
//                         onClick={() => toggle(p.id)}
//                     >
//                         <span className="pcars__dot" />
//                         <span className="pcars__name">{p.name}</span>
//                     </button>
//                 ))}
//             </div>
//         </section>
//     );
// } 

import { useState, useRef, useEffect } from "react";
import carImage from "../../assets/car/bg1.png";

import arm from "../../assets/car/arm.webp";
import ball from "../../assets/car/ball.webp";
import road from "../../assets/car/road.webp";
import rubber from "../../assets/car/rubber.webp";
import stb from "../../assets/car/stb.webp";
import rack from "../../assets/car/rack.webp";

import "./car.scss";

const BOX_W = 175;
const BOX_H = 143;

const PARTS = [
    {
        id: "control-arm",
        image: arm,
        name: "Control Arm",
        anchor: { top: 63, left: 70 },
        boxSide: "top-right",
    },
    {
        id: "ball-joint",
        image: ball,
        name: "Ball Joint",
        anchor: { top: 66, left: 71 },
        boxSide: "bottom-right",
    },
    {
        id: "tie-rod",
        image: road,
        name: "Tie Rod End",
        anchor: { top: 65, left: 26 },
        boxSide: "top-left",
    },
    {
        id: "rubber",
        image: rubber,
        name: "Rubber Components",
        anchor: { top: 65, left: 64 },
        boxSide: "bottom-right",
    },
    {
        id: "stab-link",
        image: stb,
        name: "Stabilizer Link",
        anchor: { top: 60, left: 28 },
        boxSide: "top-left",
    },
    {
        id: "rack-end",
        image: rack,
        name: "Rack End",
        anchor: { top: 68, left: 42 },
        boxSide: "top-left",
    }
];

function getBoxPosition(anchor, boxSide, containerW, containerH) {
    const ax = (anchor.left / 100) * containerW;
    const ay = (anchor.top / 100) * containerH;
    const GAP = 90;

    let bx, by;

    switch (boxSide) {
        case "top-left":
            bx = ax - GAP - BOX_W;
            by = ay - GAP - BOX_H;
            break;
        case "top-right":
            bx = ax + GAP;
            by = ay - GAP - BOX_H;
            break;
        case "bottom-left":
            bx = ax - GAP - BOX_W;
            by = ay + GAP;
            break;
        case "bottom-right":
        default:
            bx = ax + GAP;
            by = ay + GAP;
            break;
    }

    bx = Math.max(4, Math.min(bx, containerW - BOX_W - 4));
    by = Math.max(4, Math.min(by, containerH - BOX_H - 4));

    const ex = bx + BOX_W / 2;
    const ey = by + BOX_H / 2;

    const path = `M ${ax} ${ay} C ${ax} ${(ay + ey) / 2}, ${ex} ${(ay + ey) / 2}, ${ex} ${ey}`;

    return { ax, ay, ex, ey, path, bx, by };
}

export default function Car() {
    const [activeId, setActiveId] = useState(null);
    const carRef = useRef(null);
    const [dims, setDims] = useState({ w: 820, h: 461 });

    useEffect(() => {
        const update = () => {
            if (carRef.current) {
                const r = carRef.current.getBoundingClientRect();
                setDims({ w: r.width, h: r.height });
            }
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const toggle = (id) => setActiveId((cur) => (cur === id ? null : id));

    return (
        <section className="pcars container">
            <div className="pcars__stage">
                <div className="pcars__stage-bg" />

                <div className="pcars__car" ref={carRef}>
                    <img src={carImage} alt="Avtomobil sxemasi" />

                    {PARTS.map((p) => {
                        const isActive = activeId === p.id;
                        const { ax, ay, ex, ey, path, bx, by } = getBoxPosition(
                            p.anchor,
                            p.boxSide,
                            dims.w,
                            dims.h
                        );

                        return (
                            <div
                                key={p.id}
                                className={`pcars__annotation${isActive ? " is-active" : ""}`}
                                style={{ position: "absolute", inset: 0, zIndex: isActive ? 10 : 0 }}
                            >
                                <svg
                                    className="pcars__ann-svg"
                                    width={dims.w}
                                    height={dims.h}
                                    viewBox={`0 0 ${dims.w} ${dims.h}`}
                                    style={{ zIndex: 1 }}
                                >
                                    <path className="pcars__ann-line" d={path} />
                                    <circle className="pcars__ann-dot" cx={ax} cy={ay} r={5} />
                                    <circle className="pcars__ann-dot" cx={ex} cy={ey} r={3} />
                                </svg>

                                <div
                                    className="pcars__ann-box"
                                    style={{ left: bx, top: by, zIndex: 2 }}
                                >
                                    <div className="pcars__ann-img-wrap">
                                        <img src={p.image} alt={p.name} className="pcars__ann-img" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="pcars__row">
                {PARTS.map((p) => (
                    <button
                        key={p.id}
                        type="button"
                        className={`pcars__card${activeId === p.id ? " is-active" : ""}`}
                        onClick={() => toggle(p.id)}
                    >
                        <span className="pcars__dot" />
                        <span className="pcars__name">{p.name}</span>
                    </button>
                ))}
            </div>
        </section>
    );
}

// 3-variant

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

// function SvgLine({ part, active, dims, annRefs, imgRef }) {
//     const [pathD, setPathD] = useState("");
//     const [len, setLen] = useState(200);
//     const pathRef = useRef(null);

//     useEffect(() => {
//         const w = dims.w, h = dims.h;
//         const x1 = part.dot.l / 100 * w;
//         const y1 = part.dot.t / 100 * h;

//         const annEl = annRefs.current[part.id];
//         const annW = annEl ? Math.max(annEl.offsetWidth, 150) : 150;
//         const annH = annEl ? Math.max(annEl.offsetHeight, 46) : 46;

//         const bx = part.box.l / 100 * w + annW / 2;
//         const by = part.box.side === "top"
//             ? part.box.t / 100 * h + annH
//             : part.box.t / 100 * h;

//         const imgEl = imgRef.current;
//         const imgTop = imgEl ? imgEl.offsetTop : h * 0.15;
//         const imgBot = imgEl ? imgEl.offsetTop + imgEl.offsetHeight : h * 0.85;

//         let vy;
//         if (part.box.side === "top") {
//             vy = Math.min((y1 + by) / 2, imgTop - 10);
//         } else {
//             vy = Math.max((y1 + by) / 2, imgBot + 10);
//         }

//         const d = `M ${x1} ${y1} L ${x1} ${vy} L ${bx} ${vy} L ${bx} ${by}`;
//         const totalLen = Math.abs(y1 - vy) + Math.abs(bx - x1) + Math.abs(vy - by) + 2;

//         setPathD(d);
//         setLen(totalLen);
//     }, [dims, part, annRefs, imgRef]);

//     useEffect(() => {
//         const el = pathRef.current;
//         if (!el) return;
//         el.classList.remove("active");
//         void el.offsetWidth; // reflow
//         if (active) el.classList.add("active");
//     }, [active]);

//     return (
//         <path
//             ref={pathRef}
//             d={pathD}
//             fill="none"
//             stroke="#c0392b"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeDasharray={len}
//             strokeDashoffset={active ? undefined : len}
//             style={{ "--len": len }}
//             className="pcars__svg-path"
//         />
//     );
// }

// export default function Car() {
//     const [activeId, setActiveId] = useState(null);
//     const stageRef = useRef(null);
//     const annRefs = useRef({});
//     const imgRef = useRef(null);
//     const dims = useStageDims(stageRef);

//     const toggle = useCallback((id) => {
//         setActiveId((cur) => cur === id ? null : id);
//     }, []);

//     return (
//         <section className="pcars container">
//             <div className="pcars__wrap">
//                 <div className="pcars__stage" ref={stageRef}>

//                     <svg className="pcars__lines" style={{ overflow: "visible" }}>
//                         {PARTS.map((p) => (
//                             <SvgLine
//                                 key={p.id}
//                                 part={p}
//                                 active={activeId === p.id}
//                                 dims={dims}
//                                 annRefs={annRefs}
//                                 imgRef={imgRef}
//                             />
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

//                     <img
//                         ref={imgRef}
//                         src={carImage}
//                         alt="Toyota Supra"
//                         className="pcars__car-img"
//                     />
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