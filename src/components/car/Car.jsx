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
//     { id: "control-arm", name: "Control Arm", shortDesc: "High Strength Steel", image: arm, bgImage: armBg },
//     { id: "ball-joint", name: "Ball Joint", shortDesc: "Precision Engineered", image: ball, bgImage: ballBg },
//     { id: "tie-rod", name: "Tie Rod End", shortDesc: "Enhanced Durability", image: road, bgImage: roadBg },
//     { id: "rubber", name: "Rubber Elements", shortDesc: "Vibration Dampening", image: rubber, bgImage: rubberBg },
//     { id: "stab-link", name: "Stabilizer Link", shortDesc: "Maximum Stability", image: stb, bgImage: stbBg },
//     { id: "rack-end", name: "Rack End", shortDesc: "Smooth Steering", image: rack, bgImage: rackBg },
// ];

// export default function Car() {
//     const [activeIdx, setActiveIdx] = useState(0);
//     const [displayedIdx, setDisplayedIdx] = useState(0);
//     const [loading, setLoading] = useState(false);
//     const [mounted, setMounted] = useState(false);
//     const trackRef = useRef(null);
//     const rafRef = useRef(null);

//     useEffect(() => {
//         const t = setTimeout(() => setMounted(true), 60);
//         return () => clearTimeout(t);
//     }, []);

//     const goTo = useCallback((idx) => {
//         if (idx === activeIdx) return;
//         setActiveIdx(idx);
//         setLoading(true);
//         const img = new Image();
//         img.onload = () => { setDisplayedIdx(idx); setLoading(false); };
//         img.onerror = () => { setDisplayedIdx(idx); setLoading(false); };
//         img.src = PARTS[idx].bgImage;
//     }, [activeIdx]);

//     const scrollToCard = useCallback((idx) => {
//         const track = trackRef.current;
//         if (!track) return;
//         const card = track.querySelectorAll(".pcars__card")[idx];
//         if (!card) return;
//         const tR = track.getBoundingClientRect();
//         const cR = card.getBoundingClientRect();
//         track.scrollBy({ left: cR.left - tR.left - tR.width / 2 + cR.width / 2, behavior: "smooth" });
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
//             let closest = null, minD = Infinity;
//             track.querySelectorAll(".pcars__card").forEach((el, i) => {
//                 const r = el.getBoundingClientRect();
//                 const d = Math.abs(r.left + r.width / 2 - cx);
//                 if (d < minD) { minD = d; closest = i; }
//             });
//             if (closest !== null && closest !== activeIdx) goTo(closest);
//         });
//     }, [activeIdx, goTo]);

//     useEffect(() => {
//         setTimeout(() => scrollToCard(0), 300);
//     }, []);

//     const activePart = PARTS[displayedIdx];

//     return (
//         <section className={`pcars${mounted ? " pcars--mounted" : ""}`}>
//             <div className="pcars__inner container">

//                 <div className="pcars__carousel-wrap">
//                     <button
//                         className="pcars__nav"
//                         onClick={() => handleGoTo(Math.max(0, activeIdx - 1))}
//                         disabled={activeIdx === 0}
//                         aria-label="Previous"
//                     >
//                         <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
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
//                                 >
//                                     <div className="pcars__card-img">
//                                         <img src={part.image} alt={part.name} />
//                                     </div>
//                                     <h4>{part.name}</h4>
//                                     <p>{part.shortDesc}</p>
//                                     <div className="pcars__dot" />
//                                 </div>
//                             ))}
//                             <div className="pcars__spacer" />
//                         </div>
//                     </div>

//                     <button
//                         className="pcars__nav"
//                         onClick={() => handleGoTo(Math.min(PARTS.length - 1, activeIdx + 1))}
//                         disabled={activeIdx === PARTS.length - 1}
//                         aria-label="Next"
//                     >
//                         <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
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
//                     <img
//                         key={displayedIdx}
//                         src={activePart.bgImage}
//                         alt={activePart.name}
//                         className={`pcars__stage-img${loading ? " is-hidden" : ""}`}
//                     />
//                 </div>

//                 <div className="pcars__hint">
//                     <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
//                         <path d="M4 8H12M4 8L7 5M4 8L7 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                     <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
//                         <rect x="1" y="1" width="14" height="14" rx="3.5" stroke="currentColor" strokeWidth="1.2" />
//                     </svg>
//                     <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
//                         <path d="M12 8H4M12 8L9 5M12 8L9 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                     <span>Swipe to explore parts</span>
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
    const [displayedIdx, setDisplayedIdx] = useState(0);
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const trackRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 80);
        return () => clearTimeout(t);
    }, []);

    const goTo = useCallback((idx) => {
        if (idx === activeIdx || isAnimating) return;

        setActiveIdx(idx);
        setLoading(true);
        setIsAnimating(true);

        const img = new Image();
        img.onload = () => {
            setDisplayedIdx(idx);
            setTimeout(() => {
                setLoading(false);
                setTimeout(() => setIsAnimating(false), 200);
            }, 300);
        };
        img.onerror = () => {
            setDisplayedIdx(idx);
            setTimeout(() => {
                setLoading(false);
                setTimeout(() => setIsAnimating(false), 200);
            }, 300);
        };
        img.src = PARTS[idx].bgImage;
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
                if (d < minD) {
                    minD = d;
                    closest = i;
                }
            });

            if (closest !== null && closest !== activeIdx && !isAnimating) {
                goTo(closest);
            }
        });
    }, [activeIdx, goTo, isAnimating]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (trackRef.current) {
                scrollToCard(0);
            }
        }, 350);
        return () => clearTimeout(timer);
    }, [scrollToCard]);

    useEffect(() => {
        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    const activePart = PARTS[displayedIdx];

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

                    {loading && (
                        <div className="pcars__loader">
                            <div className="pcars__spinner" />
                        </div>
                    )}

                    <div className={`pcars__image-wrapper ${loading ? " is-loading" : ""} ${isAnimating ? " is-animating" : ""}`}>
                        <img
                            key={displayedIdx}
                            src={activePart.bgImage}
                            alt={activePart.name}
                            className={`pcars__stage-img ${loading ? " is-hidden" : " is-visible"}`}
                            loading="eager"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}