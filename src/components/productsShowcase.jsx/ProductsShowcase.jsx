import { useState, useEffect, useRef } from "react";
import "./ProductsShowcase.scss";

import arm from "../../assets/anime/arm.webp";
import ball from "../../assets/anime/ball.webp";
import road from "../../assets/anime/road.webp";
import bush from "../../assets/anime/bush.webp";
import stab from "../../assets/anime/stab-4093.webp";
import rack from "../../assets/anime/rack-3014.webp";

const IMAGES = [arm, ball, road, bush, stab, rack];

const PRODUCTS = [
  {
    id: "brake-drum",
    index: "01",
    name: "Brake Drum",
    category: "Braking System",
    trtCode: "RS9021R",
    brand: "LADA RIVA LAIKA SW",
    model: "2101–2107",
    oem: "2101-2904100",
    year: "1971–",
  },
  {
    id: "piston",
    index: "02",
    name: "Forged Piston",
    category: "Combustion Core",
    trtCode: "FP1205R",
    brand: "LADA RIVA LAIKA SW",
    model: "2101–2107",
    oem: "2101-1004015",
    year: "1971–",
  },
  {
    id: "coilover",
    index: "03",
    name: "Coilover Damper",
    category: "Ride Control",
    trtCode: "CD2408R",
    brand: "LADA RIVA LAIKA SW",
    model: "2101–2107",
    oem: "2101-2905402",
    year: "1971–",
  },
  {
    id: "gearset",
    index: "04",
    name: "Helical Gearset",
    category: "Power Transfer",
    trtCode: "HG8500R",
    brand: "LADA RIVA LAIKA SW",
    model: "2101–2107",
    oem: "2101-1701210",
    year: "1971–",
  },
  {
    id: "filter",
    index: "05",
    name: "Multi-Layer Filter",
    category: "Air & Oil",
    trtCode: "ML9920R",
    brand: "LADA RIVA LAIKA SW",
    model: "2101–2107",
    oem: "2101-1012005",
    year: "1971–",
  },
  {
    id: "tire",
    index: "06",
    name: "All-Terrain Tire",
    category: "Contact Patch",
    trtCode: "AT8000R",
    brand: "LADA RIVA LAIKA SW",
    model: "2101–2107",
    oem: "2101-3101015",
    year: "1971–",
  },
];

export default function ProductsShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = PRODUCTS[activeIdx];
  const intervalRef = useRef(null);
  const [animKey, setAnimKey] = useState(0);

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIdx((i) => (i + 1) % PRODUCTS.length);
      setAnimKey((k) => k + 1);
    }, 5000);
  };

  useEffect(() => {
    startAutoplay();
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, []);

  const select = (i) => {
    setActiveIdx(i);
    setAnimKey((k) => k + 1);
    startAutoplay();
  };

  const specs = [
    { l: "TRT Code", v: active.trtCode, red: true },
    { l: "Brand", v: active.brand },
    { l: "Model", v: active.model },
    { l: "OEM Number", v: active.oem, red: true },
    { l: "Year", v: active.year },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section className="sc">
        <div aria-hidden className="sc__glow" />
        <div className="sc__wrap">

          <div className="sc__eyebrow">
            <div className="sc__ey-tag">TRT Auto Parts · Catalog</div>
            <div className="sc__ey-code">{active.trtCode}</div>
          </div>

          <div className="sc__stage">

            <div className="sc__left">
              <div key={`meta-${active.id}-${animKey}`} className="sc__top-meta anim-slide-left">
                <span className="sc__cat">◆ {active.category}</span>
                <span className="sc__origin">{active.origin}</span>
              </div>

              <div className="sc__canvas">
                {PRODUCTS.map((p, i) => (
                  <div
                    key={p.id}
                    className={`sc__img-wrap${i === activeIdx ? " is-active" : ""}`}
                  >
                    <img
                      src={IMAGES[i]}
                      alt={p.name}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}

                <div aria-hidden className="sc__vignette" />

              </div>

              <div className="sc__progress">
                {PRODUCTS.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => select(i)}
                    aria-label={`Select ${p.name}`}
                    className="sc__pbar"
                  >
                    <span className={
                      `sc__pfill${i === activeIdx ? " is-active" : i < activeIdx ? " is-past" : ""}`
                    } />
                  </button>
                ))}
              </div>
            </div>

            <div className="sc__right">
              <div>
                <div key={`title-${active.id}-${animKey}`} className="anim-slide-bottom">
                  <h3 className="sc__name">{active.name}</h3>
                  <p className="sc__tagline">{active.tagline}</p>
                </div>

                <dl key={`dl-${active.id}-${animKey}`} className="sc__specs anim-fade">
                  {specs.map((row) => (
                    <div key={row.l} className="sc__spec-row">
                      <dt>{row.l}</dt>
                      <dd className={row.red ? "is-red" : ""}>{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="sc__catalog">
                {PRODUCTS.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    onMouseEnter={() => select(i)}
                    onClick={() => select(i)}
                    className={`sc__cat-item${i === activeIdx ? " is-active" : ""}`}
                  >
                    <div className="sc__cat-left">
                      <span className="sc__cat-idx">{p.index}</span>
                      <span className="sc__cat-name">{p.name}</span>
                    </div>
                    <span className="sc__cat-hint">Viewing →</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}