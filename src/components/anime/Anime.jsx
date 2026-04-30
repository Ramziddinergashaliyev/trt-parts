import { useState, useEffect } from 'react';
import './anime.scss';

const PARTS = [
    {
        id: 'control-arm',
        name: 'Control Arm',
        shortDesc: 'High-strength steel control arm ensures precise wheel movement and stability. Built to withstand extreme conditions.',
        tags: ['Durable', 'Precise Fit', 'OE Quality'],
        image: 'https://static.codia.ai/s/image_7167b40c-7738-44af-b5c5-2418893518a7.png',
        floatImage: 'https://static.codia.ai/s/image_7167b40c-7738-44af-b5c5-2418893518a7.png',
        dotColor: '#2563eb',
        position: { top: '22%', left: '28%' },
    },
    {
        id: 'ball-joint',
        name: 'Ball Joint',
        shortDesc: 'Precision-engineered ball joint for smooth steering and suspension movement.',
        tags: ['Durable', 'Precise Fit', 'OE Quality'],
        image: 'https://static.codia.ai/s/image_b887e45c-0839-4df0-8cb8-c86a2696d00f.png',
        floatImage: 'https://static.codia.ai/s/image_b887e45c-0839-4df0-8cb8-c86a2696d00f.png',
        dotColor: '#2563eb',
        position: { top: '12%', left: '50%' },
    },
    {
        id: 'tie-rod-end',
        name: 'Tie Rod End',
        shortDesc: 'OE-grade tie rod end for accurate steering response and long service life.',
        tags: ['Durable', 'Precise Fit', 'OE Quality'],
        image: 'https://static.codia.ai/s/image_5830cf56-2bd8-4f64-995d-46121637c4e0.png',
        floatImage: 'https://static.codia.ai/s/image_5830cf56-2bd8-4f64-995d-46121637c4e0.png',
        dotColor: '#2563eb',
        position: { top: '18%', left: '72%' },
    },
    {
        id: 'rack-end',
        name: 'Rack End',
        shortDesc: 'Heavy-duty rack end designed for maximum durability under demanding conditions.',
        tags: ['Durable', 'Precise Fit', 'OE Quality'],
        image: 'https://static.codia.ai/s/image_5830cf56-2bd8-4f64-995d-46121637c4e0.png',
        floatImage: 'https://static.codia.ai/s/image_5830cf56-2bd8-4f64-995d-46121637c4e0.png',
        dotColor: '#2563eb',
        position: { top: '45%', left: '82%' },
    },
    {
        id: 'stabilizer-link',
        name: 'Stabilizer Link',
        shortDesc: 'Robust stabilizer link that keeps your vehicle balanced and stable on every turn.',
        tags: ['Durable', 'Precise Fit', 'OE Quality'],
        image: 'https://static.codia.ai/s/image_4ca23f41-1351-4e3d-b58f-43967021dc47.png',
        floatImage: 'https://static.codia.ai/s/image_4ca23f41-1351-4e3d-b58f-43967021dc47.png',
        dotColor: '#2563eb',
        position: { top: '65%', left: '78%' },
    },
];

const FEATURES = [
    {
        icon: 'https://static.codia.ai/s/image_24cbd134-fcb6-4e1a-86ae-d6b56074f67f.png',
        label: 'Premium Quality',
        sub: 'OE standard materials',
    },
    {
        icon: 'https://static.codia.ai/s/image_273e4f58-394d-4dfd-bba5-4cbc4369e61f.png',
        label: 'Perfect Fit',
        sub: 'Engineered for accuracy',
    },
    {
        icon: 'https://static.codia.ai/s/image_ae73c0d2-e2f1-4584-887d-24a05842ea5e.png',
        label: 'High Performance',
        sub: 'Built for maximum durability',
    },
];

const TAG_ICONS = [
    'https://static.codia.ai/s/image_ee1684a9-cb11-4096-80b5-4df32cb62169.png',
    'https://static.codia.ai/s/image_05b5bb04-3e37-4faf-a446-bead96ebcf5d.png',
    'https://static.codia.ai/s/image_56474fbc-898e-409f-b20e-e932c9478779.png',
];

export default function Anime() {
    const [activePart, setActivePart] = useState(PARTS[0]);
    const [animating, setAnimating] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setTimeout(() => setMounted(true), 80);
    }, []);

    function handleSelectPart(part) {
        if (part.id === activePart.id) return;
        setAnimating(true);
        setTimeout(() => {
            setActivePart(part);
            setAnimating(false);
        }, 280);
    }

    return (
        <div className={`assembly-root${mounted ? ' mounted' : ''}`}>

            <div className="top-bar">

                <div className="top-bar-left">
                    <span className="top-bar-line" />
                    <span className="top-bar-tagline">PRECISION. QUALITY. PERFORMANCE</span>
                </div>

                <button className="view360-btn">
                    <img
                        src="https://static.codia.ai/s/image_24cbd134-fcb6-4e1a-86ae-d6b56074f67f.png"
                        alt=""
                        className="view360-icon"
                    />
                    <span>360° View</span>
                </button>

            </div>

            <div className="main-layout">
                <aside className="left-panel">

                    <div className="hero-text">
                        <h1 className="title-black">Interactive</h1>
                        <h1 className="title-blue">Assembly</h1>
                    </div>

                    <p className="hero-desc">
                        Explore high-quality auto parts and see how they fit together in perfect harmony.
                    </p>

                    <div className="feature-list">

                        {FEATURES.map((f) => (
                            <div className="feature-item" key={f.label}>
                                <div className="feature-icon-wrap">
                                    <img src={f.icon} alt={f.label} className="feature-icon" />
                                </div>
                                <div>
                                    <div className="feature-label">{f.label}</div>
                                    <div className="feature-sub">{f.sub}</div>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className={`part-detail-card${animating ? ' card-fade-out' : ' card-fade-in'}`}>

                        <div className="part-detail-top">
                            <img
                                src={activePart.image}
                                alt={activePart.name}
                                className="part-detail-img"
                            />
                            <div className="part-detail-info">
                                <div className="part-detail-name">{activePart.name}</div>
                                <p className="part-detail-desc">{activePart.shortDesc}</p>
                            </div>
                        </div>

                        <div className="part-detail-tags">
                            {activePart.tags.map((tag, i) => (
                                <span className="part-tag" key={tag}>
                                    <img src={TAG_ICONS[i]} alt="" className="tag-icon" />
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <button className="learn-more-btn">
                            Learn More
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                    </div>
                </aside>

                <div className="car-canvas">
                    <div className="car-image-wrap">
                        <img
                            src="https://static.codia.ai/s/image_00c18cfa-2d7e-4c57-8ac2-ca2d3b0091c7.png"
                            alt="Car"
                            className="car-image"
                        />

                        <div className="orbit-ring" />

                        {PARTS.map((part) => (
                            <div
                                key={part.id}
                                className={`part-callout${activePart.id === part.id ? ' active' : ''}`}
                                style={{ top: part.position.top, left: part.position.left }}
                                onClick={() => handleSelectPart(part)}
                            >
                                <img src={part.floatImage} alt={part.name} className="callout-img" />
                                <div className="callout-label">
                                    <span className="callout-name">{part.name}</span>
                                    <button className="callout-btn">
                                        View Details
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                            <path d="M2 5h6M5 2l3 3-3 3" stroke="#444" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="callout-dot">
                                    <span className="dot-pulse" />
                                </div>
                                <div className="callout-line" />
                            </div>
                        ))}
                    </div>

                    <div className="parts-selector">
                        {PARTS.map((part) => (
                            <div
                                key={part.id}
                                className={`selector-item${activePart.id === part.id ? ' selected' : ''}`}
                                onClick={() => handleSelectPart(part)}
                            >
                                <img src={part.image} alt={part.name} className="selector-img" />
                                <span className="selector-name">{part.name}</span>
                                <span className="selector-dot" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="right-panel">
                    <button className="see-all-btn">
                        See All Parts
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M4 9h10M9 4l5 5-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
