// import { useState, useRef, useEffect, useCallback } from "react";
// import armBg from "../../assets/car/a-bg.webp";
// import ballBg from "../../assets/car/b-bg.webp";
// import roadBg from "../../assets/car/t-bg.webp";
// import rubberBg from "../../assets/car/r-bg.webp";
// import stbBg from "../../assets/car/s-bg.webp";
// import rackBg from "../../assets/car/rk-bg.webp";

// import arm from "../../assets/car/a.webp";
// import ball from "../../assets/car/b.webp";
// import road from "../../assets/car/t.webp";
// import rubber from "../../assets/car/r.webp";
// import stb from "../../assets/car/s.webp";
// import rack from "../../assets/car/rk.webp";

// import "./car.scss";

// const PARTS = [
//     { id: "control-arm", name: "Control Arm", image: arm, bgImage: armBg },
//     { id: "ball-joint", name: "Ball Joint", image: ball, bgImage: ballBg },
//     { id: "tie-rod", name: "Tie Rod End", image: road, bgImage: roadBg },
//     { id: "rubber", name: "Rubber Elements", image: rubber, bgImage: rubberBg },
//     { id: "stab-link", name: "Stabilizer Link", image: stb, bgImage: stbBg },
//     { id: "rack-end", name: "Rack End", image: rack, bgImage: rackBg },
// ];

// export default function Car() {
//     const [activeIdx, setActiveIdx] = useState(0);
//     const [displayedIdx, setDisplayedIdx] = useState(0);
//     const [loading, setLoading] = useState(false);
//     const [mounted, setMounted] = useState(false);
//     const [isAnimating, setIsAnimating] = useState(false);
//     const trackRef = useRef(null);
//     const rafRef = useRef(null);

//     useEffect(() => {
//         const t = setTimeout(() => setMounted(true), 80);
//         return () => clearTimeout(t);
//     }, []);

//     const goTo = useCallback((idx) => {
//         if (idx === activeIdx || isAnimating) return;
//         setActiveIdx(idx);
//         setLoading(true);
//         setIsAnimating(true);

//         const img = new Image();

//         img.onload = () => {
//             setDisplayedIdx(idx);

//             setTimeout(() => {
//                 setLoading(false);
//                 setTimeout(() => setIsAnimating(false), 0);
//             }, 0);
//         };

//         img.onerror = () => {
//             setDisplayedIdx(idx);
//             setTimeout(() => {
//                 setLoading(false);
//                 setTimeout(() => setIsAnimating(false), 200);
//             }, 300);
//         };

//         img.src = PARTS[idx].bgImage;
//     }, [activeIdx, isAnimating]);

//     const scrollToCard = useCallback((idx) => {
//         const track = trackRef.current;
//         if (!track) return;
//         const card = track.querySelectorAll(".pcars__card")[idx];
//         if (!card) return;
//         const tR = track.getBoundingClientRect();
//         const cR = card.getBoundingClientRect();
//         const scrollLeft = cR.left - tR.left - tR.width / 2 + cR.width / 2;
//         track.scrollBy({ left: scrollLeft, behavior: "smooth" });
//     }, []);

//     const handleGoTo = useCallback((idx) => {
//         goTo(idx);
//         scrollToCard(idx);
//     }, [goTo, scrollToCard]);

//     const handleScroll = useCallback(() => {
//         if (rafRef.current) cancelAnimationFrame(rafRef.current);

//         rafRef.current = requestAnimationFrame(() => {
//             const track = trackRef.current;
//             if (!track) return;
//             const cx = track.getBoundingClientRect().left + track.offsetWidth / 2;
//             let closest = null;
//             let minD = Infinity;

//             track.querySelectorAll(".pcars__card").forEach((el, i) => {
//                 const r = el.getBoundingClientRect();
//                 const d = Math.abs(r.left + r.width / 2 - cx);

//                 if (d < minD) {
//                     minD = d;
//                     closest = i;
//                 }
//             });

//             if (closest !== null && closest !== activeIdx && !isAnimating) {
//                 goTo(closest);
//             }
//         });

//     }, [activeIdx, goTo, isAnimating]);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             if (trackRef.current) {
//                 scrollToCard(0);
//             }
//         }, 350);

//         return () => clearTimeout(timer);
//     }, [scrollToCard]);

//     useEffect(() => {

//         return () => {
//             if (rafRef.current) {
//                 cancelAnimationFrame(rafRef.current);
//             }
//         };

//     }, []);

//     const activePart = PARTS[displayedIdx];

//     return (
//         <section className={`pcars${mounted ? " pcars--mounted" : ""}`}>
//             <div className="pcars__inner">

//                 <div className="pcars__carousel-wrap">
//                     <button
//                         className="pcars__nav pcars__nav--prev"
//                         onClick={() => handleGoTo(Math.max(0, activeIdx - 1))}
//                         disabled={activeIdx === 0 || isAnimating}
//                         aria-label="Previous part"
//                     >
//                         <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
//                             <path d="M11 13.5L6.5 9L11 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </button>

//                     <div className="pcars__track-outer">
//                         <div className="pcars__track" ref={trackRef} onScroll={handleScroll}>
//                             <div className="pcars__spacer" />
//                             {PARTS.map((part, i) => (
//                                 <div
//                                     key={part.id}
//                                     className={`pcars__card${activeIdx === i ? " is-active" : ""}`}
//                                     style={{ "--i": i }}
//                                     onClick={() => handleGoTo(i)}
//                                     role="button"
//                                     tabIndex={0}
//                                     onKeyDown={(e) => {
//                                         if (e.key === "Enter" || e.key === " ") {
//                                             e.preventDefault();
//                                             handleGoTo(i);
//                                         }
//                                     }}
//                                 >
//                                     <div className="pcars__card-img">
//                                         <img src={part.image} alt={part.name} loading="lazy" />
//                                     </div>
//                                     <h4>{part.name}</h4>
//                                 </div>
//                             ))}
//                             <div className="pcars__spacer" />
//                         </div>
//                     </div>

//                     <button
//                         className="pcars__nav pcars__nav--next"
//                         onClick={() => handleGoTo(Math.min(PARTS.length - 1, activeIdx + 1))}
//                         disabled={activeIdx === PARTS.length - 1 || isAnimating}
//                         aria-label="Next part"
//                     >
//                         <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
//                             <path d="M7 4.5L11.5 9L7 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </button>
//                 </div>

//                 <div className="pcars__stage">

//                     {loading && (
//                         <div className="pcars__loader">
//                             <div className="pcars__spinner" />
//                         </div>
//                     )}

//                     <div className={`pcars__image-wrapper ${loading ? " is-loading" : ""} ${isAnimating ? " is-animating" : ""}`}>
//                         <img
//                             key={displayedIdx}
//                             src={activePart.bgImage}
//                             alt={activePart.name}
//                             className={`pcars__stage-img ${loading ? " is-hidden" : " is-visible"}`}
//                             loading="eager"
//                         />
//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// }

import { useState, useRef, useEffect, useCallback } from "react";
import armBg from "../../assets/car/a-bg.webp";
import ballBg from "../../assets/car/b-bg.webp";
import roadBg from "../../assets/car/t-bg.webp";
import rubberBg from "../../assets/car/r-bg.webp";
import stbBg from "../../assets/car/s-bg.webp";
import rackBg from "../../assets/car/rk-bg.webp";

import arm from "../../assets/car/a.webp";
import ball from "../../assets/car/b.webp";
import road from "../../assets/car/t.webp";
import rubber from "../../assets/car/r.webp";
import stb from "../../assets/car/s.webp";
import rack from "../../assets/car/rk.webp";

import "./car.scss";

const PARTS = [
    { id: "control-arm", name: "Control Arm", image: arm, bgImage: armBg },
    { id: "ball-joint", name: "Ball Joint", image: ball, bgImage: ballBg },
    { id: "tie-rod", name: "Tie Rod End", image: road, bgImage: roadBg },
    { id: "rubber", name: "Rubber Elements", image: rubber, bgImage: rubberBg },
    { id: "stab-link", name: "Stabilizer Link", image: stb, bgImage: stbBg },
    { id: "rack-end", name: "Rack End", image: rack, bgImage: rackBg },
];

export default function Car() {
    const [activeIdx, setActiveIdx] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [mounted, setMounted] = useState(false);

    const [slotA, setSlotA] = useState({ idx: 0, zIndex: 2, opacity: 1 });
    const [slotB, setSlotB] = useState({ idx: 0, zIndex: 1, opacity: 1 });
    const frontSlot = useRef("a");

    const trackRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 80);
        return () => clearTimeout(t);
    }, []);

    const goTo = useCallback((idx) => {
        if (idx === activeIdx || isAnimating) return;
        setIsAnimating(true);
        setActiveIdx(idx);

        if (frontSlot.current === "a") {
            setSlotB({ idx, zIndex: 1, opacity: 0 });
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setSlotB({ idx, zIndex: 2, opacity: 1 });
                    setSlotA(prev => ({ ...prev, zIndex: 1, opacity: 0 }));
                    frontSlot.current = "b";
                    setTimeout(() => setIsAnimating(false), 500);
                });
            });
        } else {
            setSlotA({ idx, zIndex: 1, opacity: 0 });
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setSlotA({ idx, zIndex: 2, opacity: 1 });
                    setSlotB(prev => ({ ...prev, zIndex: 1, opacity: 0 }));
                    frontSlot.current = "a";
                    setTimeout(() => setIsAnimating(false), 500);
                });
            });
        }
    }, [activeIdx, isAnimating]);

    const scrollToCard = useCallback((idx) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.querySelectorAll(".pcars__card")[idx];
        if (!card) return;
        const tR = track.getBoundingClientRect();
        const cR = card.getBoundingClientRect();
        const scrollLeft = cR.left - tR.left - tR.width / 2 + cR.width / 2;
        track.scrollBy({ left: scrollLeft, behavior: "smooth" });
    }, []);

    const handleGoTo = useCallback((idx) => {
        goTo(idx);
        scrollToCard(idx);
    }, [goTo, scrollToCard]);

    const handleScroll = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            const track = trackRef.current;
            if (!track) return;
            const cx = track.getBoundingClientRect().left + track.offsetWidth / 2;
            let closest = null;
            let minD = Infinity;
            track.querySelectorAll(".pcars__card").forEach((el, i) => {
                const r = el.getBoundingClientRect();
                const d = Math.abs(r.left + r.width / 2 - cx);
                if (d < minD) { minD = d; closest = i; }
            });
            if (closest !== null && closest !== activeIdx && !isAnimating) {
                goTo(closest);
            }
        });
    }, [activeIdx, goTo, isAnimating]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (trackRef.current) scrollToCard(0);
        }, 350);
        return () => clearTimeout(timer);
    }, [scrollToCard]);

    useEffect(() => {
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, []);

    const imgStyle = (slot) => ({
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: slot.zIndex,
        opacity: slot.opacity,
        transition: "opacity 0.5s ease",
        willChange: "opacity",
    });

    return (
        <section className={`pcars${mounted ? " pcars--mounted" : ""}`}>
            <div className="pcars__inner">

                <div className="pcars__carousel-wrap">
                    <button
                        className="pcars__nav pcars__nav--prev"
                        onClick={() => handleGoTo(Math.max(0, activeIdx - 1))}
                        disabled={activeIdx === 0 || isAnimating}
                        aria-label="Previous part"
                    >
                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                            <path d="M11 13.5L6.5 9L11 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className="pcars__track-outer">
                        <div className="pcars__track" ref={trackRef} onScroll={handleScroll}>
                            <div className="pcars__spacer" />
                            {PARTS.map((part, i) => (
                                <div
                                    key={part.id}
                                    className={`pcars__card${activeIdx === i ? " is-active" : ""}`}
                                    style={{ "--i": i }}
                                    onClick={() => handleGoTo(i)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            handleGoTo(i);
                                        }
                                    }}
                                >
                                    <div className="pcars__card-img">
                                        <img src={part.image} alt={part.name} loading="lazy" />
                                    </div>
                                    <h4>{part.name}</h4>
                                </div>
                            ))}
                            <div className="pcars__spacer" />
                        </div>
                    </div>

                    <button
                        className="pcars__nav pcars__nav--next"
                        onClick={() => handleGoTo(Math.min(PARTS.length - 1, activeIdx + 1))}
                        disabled={activeIdx === PARTS.length - 1 || isAnimating}
                        aria-label="Next part"
                    >
                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                            <path d="M7 4.5L11.5 9L7 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className="pcars__stage">
                    <img
                        src={PARTS[slotA.idx].bgImage}
                        alt={PARTS[slotA.idx].name}
                        style={imgStyle(slotA)}
                    />
                    <img
                        src={PARTS[slotB.idx].bgImage}
                        alt={PARTS[slotB.idx].name}
                        style={imgStyle(slotB)}
                    />
                </div>
            </div>
        </section>
    );
}


// import { useState, useRef, useEffect, useCallback } from "react";
// import armBg from "../../assets/car/a-bg.webp";
// import ballBg from "../../assets/car/b-bg.webp";
// import roadBg from "../../assets/car/t-bg.webp";
// import rubberBg from "../../assets/car/r-bg.webp";
// import stbBg from "../../assets/car/s-bg.webp";
// import rackBg from "../../assets/car/rk-bg.webp";

// import arm from "../../assets/car/a.webp";
// import ball from "../../assets/car/b.webp";
// import road from "../../assets/car/t.webp";
// import rubber from "../../assets/car/r.webp";
// import stb from "../../assets/car/s.webp";
// import rack from "../../assets/car/rk.webp";

// import "./car.scss";

// const PARTS = [
//     { id: "control-arm", name: "Control Arm", image: arm, bgImage: armBg },
//     { id: "ball-joint", name: "Ball Joint", image: ball, bgImage: ballBg },
//     { id: "tie-rod", name: "Tie Rod End", image: road, bgImage: roadBg },
//     { id: "rubber", name: "Rubber Elements", image: rubber, bgImage: rubberBg },
//     { id: "stab-link", name: "Stabilizer Link", image: stb, bgImage: stbBg },
//     { id: "rack-end", name: "Rack End", image: rack, bgImage: rackBg },
// ];

// export default function Car() {
//     const [activeIdx, setActiveIdx] = useState(0);
//     const [isAnimating, setIsAnimating] = useState(false);
//     // Ikkita slot: current va next rasm
//     const [layers, setLayers] = useState([
//         { idx: 0, opacity: 1 },
//     ]);
//     const [mounted, setMounted] = useState(false);
//     const trackRef = useRef(null);
//     const rafRef = useRef(null);

//     useEffect(() => {
//         const t = setTimeout(() => setMounted(true), 80);
//         return () => clearTimeout(t);
//     }, []);

//     const goTo = useCallback((idx) => {
//         if (idx === activeIdx || isAnimating) return;
//         setIsAnimating(true);
//         setActiveIdx(idx);

//         // Yangi rasmni yuklash
//         const img = new Image();
//         const onReady = () => {
//             // Yangi layerni qo'shib, fade in qilamiz
//             setLayers(prev => [
//                 ...prev,
//                 { idx, opacity: 0 },
//             ]);

//             // Keyingi frame da opacity ni 1 ga o'tkazamiz (CSS transition ishlashi uchun)
//             requestAnimationFrame(() => {
//                 requestAnimationFrame(() => {
//                     setLayers([{ idx, opacity: 1 }]);
//                     setTimeout(() => setIsAnimating(false), 400); // CSS transition davomiyligi
//                 });
//             });
//         };

//         img.onload = onReady;
//         img.onerror = onReady; // Xato bo'lsa ham o'tkazamiz
//         img.src = PARTS[idx].bgImage;
//     }, [activeIdx, isAnimating]);

//     const scrollToCard = useCallback((idx) => {
//         const track = trackRef.current;
//         if (!track) return;
//         const card = track.querySelectorAll(".pcars__card")[idx];
//         if (!card) return;
//         const tR = track.getBoundingClientRect();
//         const cR = card.getBoundingClientRect();
//         const scrollLeft = cR.left - tR.left - tR.width / 2 + cR.width / 2;
//         track.scrollBy({ left: scrollLeft, behavior: "smooth" });
//     }, []);

//     const handleGoTo = useCallback((idx) => {
//         goTo(idx);
//         scrollToCard(idx);
//     }, [goTo, scrollToCard]);

//     const handleScroll = useCallback(() => {
//         if (rafRef.current) cancelAnimationFrame(rafRef.current);
//         rafRef.current = requestAnimationFrame(() => {
//             const track = trackRef.current;
//             if (!track) return;
//             const cx = track.getBoundingClientRect().left + track.offsetWidth / 2;
//             let closest = null;
//             let minD = Infinity;
//             track.querySelectorAll(".pcars__card").forEach((el, i) => {
//                 const r = el.getBoundingClientRect();
//                 const d = Math.abs(r.left + r.width / 2 - cx);
//                 if (d < minD) { minD = d; closest = i; }
//             });
//             if (closest !== null && closest !== activeIdx && !isAnimating) {
//                 goTo(closest);
//             }
//         });
//     }, [activeIdx, goTo, isAnimating]);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             if (trackRef.current) scrollToCard(0);
//         }, 350);
//         return () => clearTimeout(timer);
//     }, [scrollToCard]);

//     useEffect(() => {
//         return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
//     }, []);

//     return (
//         <section className={`pcars${mounted ? " pcars--mounted" : ""}`}>
//             <div className="pcars__inner">

//                 <div className="pcars__carousel-wrap">
//                     <button
//                         className="pcars__nav pcars__nav--prev"
//                         onClick={() => handleGoTo(Math.max(0, activeIdx - 1))}
//                         disabled={activeIdx === 0 || isAnimating}
//                         aria-label="Previous part"
//                     >
//                         <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
//                             <path d="M11 13.5L6.5 9L11 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </button>

//                     <div className="pcars__track-outer">
//                         <div className="pcars__track" ref={trackRef} onScroll={handleScroll}>
//                             <div className="pcars__spacer" />
//                             {PARTS.map((part, i) => (
//                                 <div
//                                     key={part.id}
//                                     className={`pcars__card${activeIdx === i ? " is-active" : ""}`}
//                                     style={{ "--i": i }}
//                                     onClick={() => handleGoTo(i)}
//                                     role="button"
//                                     tabIndex={0}
//                                     onKeyDown={(e) => {
//                                         if (e.key === "Enter" || e.key === " ") {
//                                             e.preventDefault();
//                                             handleGoTo(i);
//                                         }
//                                     }}
//                                 >
//                                     <div className="pcars__card-img">
//                                         <img src={part.image} alt={part.name} loading="lazy" />
//                                     </div>
//                                     <h4>{part.name}</h4>
//                                 </div>
//                             ))}
//                             <div className="pcars__spacer" />
//                         </div>
//                     </div>

//                     <button
//                         className="pcars__nav pcars__nav--next"
//                         onClick={() => handleGoTo(Math.min(PARTS.length - 1, activeIdx + 1))}
//                         disabled={activeIdx === PARTS.length - 1 || isAnimating}
//                         aria-label="Next part"
//                     >
//                         <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
//                             <path d="M7 4.5L11.5 9L7 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </button>
//                 </div>

//                 <div className="pcars__stage">
//                     <div className="pcars__image-wrapper">
//                         {layers.map((layer) => (
//                             <img
//                                 key={layer.idx}
//                                 src={PARTS[layer.idx].bgImage}
//                                 alt={PARTS[layer.idx].name}
//                                 className="pcars__stage-img"
//                                 style={{
//                                     opacity: layer.opacity,
//                                     transition: "opacity 0.4s ease",
//                                     position: "absolute",
//                                     inset: 0,
//                                     width: "100%",
//                                     height: "100%",
//                                     objectFit: "cover",
//                                 }}
//                             />
//                         ))}
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }