import React, { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useParams, useNavigate } from 'react-router-dom'
import { newsData, newsDataEn } from '../../static'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './newsSingle.scss'

const NewsSingle = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [news, setNews] = useState(null)
    const [lightbox, setLightbox] = useState(null)
    const { t, i18n } = useTranslation()
    const observerRef = useRef(null)
    const fullData = i18n?.language === "rus" ? newsData : newsDataEn

    const openLightbox = (images, index = 0) => setLightbox({ images, index })
    const closeLightbox = () => setLightbox(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        const foundNews = fullData.find(item => item.id === parseInt(id))
        if (foundNews) {
            setNews(foundNews)
        } else {
            navigate('/news')
        }
    }, [id, navigate, fullData])

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        }

        observerRef.current = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        })

        const sections = document.querySelectorAll('.location-section')
        sections.forEach((section) => {
            observerRef.current.observe(section)
        })

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect()
            }
        }
    }, [news])

    // Bet	    Bet	    Bet	    Garov tikmoq
    // Cost	    Cost	Cost	Narxi bo'lmoq
    // Cut	    Cut	    Cut	    Kesmoq
    // Hit	    Hit	    Hit	    Urmoq
    // Hurt	    Hurt	Hurt	Og'ritmoq
    // Let	    Let	    Let	    Ruxsat bermoq

    // Bend	    Bent	Bent	Egmoq
    // Bleed	Bled	Bled	Qonamoq
    // Bring	Brought	Brought	Olib kelmoq
    // Build	Built	Built	Qurmoq
    // Buy	    Bought	Bought	Sotib olmoq
    // Catch	Caught	Caught	Tutmoq
    // Dig	    Dug	    Dug	    Qazimoq
    // Feed	    Fed	    Fed	    Ovqatlantirmoq
    // Feel	    Felt	Felt	His qilmoq
    // Fight	Fought	Fought	Urushmoq
    // Find	    Found	Found	Topmoq
    // Hang	    Hung	Hung	Ilmoq
    // Have	    Had	    Had	    Ega bo'lmoq
    // Hear	    Heard	Heard	Eshitmoq
    // Hold	    Held	Held	Ushlab turmoq
    // Keep	    Kept	Kept	Saqlamoq
    // Lay	    Laid	Laid	Qo'ymoq
    // Lead	    Led	    Led	    Yetaklamoq
    // Leave	Left	Left	Ketmoq
    // Lend	    Lent	Lent	Qarzga bermoq

    // Begin	Began	Begun	Boshlamoq
    // Bite	    Bit	    Bitten	Tishlamoq
    // Blow	    Blew	Blown	Puflamoq
    // Break	Broke	Broken	Sindirmoq
    // Choose	Chose	Chosen	Tanlamoq
    // Do	    Did	    Done	Qilmoq
    // Draw	    Drew	Drawn	Chizmoq
    // Drink	Drank	Drunk	Ichmoq
    // Drive	Drove	Driven	Haydamoq
    // Eat	    Ate	    Eaten	Yemoq
    // Fall	    Fell	Fallen	Yiqilmoq
    // Fly	    Flew	Flown	Uchmoq
    // Forget	Forgot	Forgotten	Unutmoq
    // Forgive	Forgave	Forgiven	Kechirmoq
    // Freeze	Froze	Frozen	Muzlamoq
    // Get	    Got	    Gotten	Olmoq
    // Give	    Gave	Given	Bermoq
    // Go	    Went	Gone	Bormoq
    // Hide	    Hid	    Hidden	Yashirmoq
    // Know	    Knew	Known	Bilmoq
    // Lie	    Lay	    Lain	Yotmoq

    useEffect(() => {
        if (!lightbox) return

        const onKeyDown = (e) => {
            if (e.key === 'Escape') setLightbox(null)
        }
        document.addEventListener('keydown', onKeyDown)

        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.body.style.overflow = prevOverflow
        }
    }, [lightbox])

    const renderLightbox = () => {
        if (!lightbox?.images?.length) return null

        const handleOverlayClick = (e) => {
            if (
                e.target.closest(
                    '.swiper-button-next, .swiper-button-prev, .swiper-pagination, .lightbox-close, img'
                )
            ) {
                return
            }
            closeLightbox()
        }

        return createPortal(
            <div className="lightbox-overlay" onClick={handleOverlayClick}>
                <button
                    className="lightbox-close"
                    onClick={closeLightbox}
                    aria-label="Close"
                >
                    ✕
                </button>

                <div className="lightbox-content">
                    <Swiper
                        modules={[Navigation, Pagination, Keyboard]}
                        initialSlide={lightbox.index}
                        centeredSlides={true}
                        slidesPerView="auto"
                        spaceBetween={24}
                        speed={600}
                        grabCursor={true}
                        slideToClickedSlide={true}
                        navigation={lightbox.images.length > 1}
                        pagination={lightbox.images.length > 1 ? { clickable: true } : false}
                        keyboard={{ enabled: true }}
                        className="lightbox-swiper"
                    >
                        {lightbox.images.map((img, i) => (
                            <SwiperSlide key={i}>
                                {({ isActive }) => (
                                    <div className={`lightbox-slide ${isActive ? 'is-active' : ''}`}>
                                        <img src={img} alt={`preview-${i + 1}`} />
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>,
            document.body
        )
    }

    const renderLocationSections = () => {
        if (!news.locationData) {
            return news.fullContent?.map((text, index) => (
                <p key={index} className="article-text">{text}</p>
            ))
        }

        return news.locationData.map((location) => {
            const imagesBlock = (animClass) => (
                <div className={`location-images-block ${animClass}`}>
                    <div className="images-grid">
                        {location.images.map((img, imgIndex) => (
                            <div
                                key={imgIndex}
                                className="image-item"
                                onClick={() => openLightbox(location.images, imgIndex)}
                            >
                                <img src={img} alt={`${location.title} ${imgIndex + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            )

            const textBlock = (animClass) => (
                <div className={`location-text-block ${animClass}`}>
                    <h2 className="location-title">{location.title}</h2>
                    <p className="location-subtitle">📍 {location.location}</p>
                    <p className="location-description">{location.description}</p>
                </div>
            )

            if (location.position === 'right') {
                return (
                    <div key={location.id} className="location-section scroll-animate" data-direction="right">
                        <div className="location-content-wrapper layout-right">
                            {imagesBlock('animate-from-right')}
                            {textBlock('animate-from-right')}
                        </div>
                    </div>
                )
            }

            return (
                <div key={location.id} className="location-section scroll-animate" data-direction="left">
                    <div className="location-content-wrapper layout-left">
                        {textBlock('animate-from-left')}
                        {imagesBlock('animate-from-left')}
                    </div>
                </div>
            )
        })
    }

    const renderSpecialSections = () => {
        return news.sections?.map((section, sectionIndex) => (
            <div key={sectionIndex} className="special-section">
                <div className="special-section-texts">
                    {section.texts.map((item, i) =>
                        item.type === "heading" ? (
                            <h2 key={i} className="section-heading">{item.text}</h2>
                        ) : (
                            <p key={i} className="article-text">{item.text}</p>
                        )
                    )}
                </div>

                {section.images?.length > 0 && (
                    <div className={`special-section-images ${sectionIndex === 1 ? 'special-section-images--second' : ''}`}>
                        {section.images.map((img, i) => (
                            <div
                                key={i}
                                className="special-image-item"
                                onClick={() => openLightbox(section.images, i)}
                            >
                                <img src={img} alt={`section-${sectionIndex}-${i}`} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ))
    }

    const renderGallerySections = () => {
        return news.gallerySections?.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
                <div className="article-content">
                    <div className="article-content-info">
                        {section.heading && (
                            <h2 className="section-heading">{section.heading}</h2>
                        )}
                        {section.texts?.map((textItem, i) => (
                            <p key={i} className="article-text">{textItem}</p>
                        ))}
                    </div>
                </div>

                <div className="news-gallery-grid">
                    {section.images?.[0] && (
                        <div
                            className="gallery-main"
                            onClick={() => openLightbox(section.images, 0)}
                        >
                            <img
                                src={section.images[0]}
                                alt={`${news.title}-${sectionIndex}-1`}
                            />
                        </div>
                    )}
                    {section.images?.length > 1 && (
                        <div className="gallery-secondary">
                            {section.images.slice(1).map((img, imgIndex) => (
                                <div
                                    key={imgIndex}
                                    className="gallery-secondary-item"
                                    onClick={() => openLightbox(section.images, imgIndex + 1)}
                                >
                                    <img
                                        src={img}
                                        alt={`${news.title}-${sectionIndex}-${imgIndex + 2}`}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </React.Fragment>
        ))
    }

    if (!news) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        )
    }

    const currentId = parseInt(id)

    const breadcrumb = (
        <div className="breadcrumb">
            <span onClick={() => navigate('/')} className="breadcrumb-item">{t("Домашняя")}</span>
            <span className="breadcrumb-divider">/</span>
            <span onClick={() => navigate('/news')} className="breadcrumb-item">{t("Новости")}</span>
            <span className="breadcrumb-divider">/</span>
            <span className="breadcrumb-current">{news?.category}</span>
        </div>
    )

    if (currentId === 5) {
        return (
            <div className="news-single-page">
                <div className="news-single-container container">
                    {breadcrumb}

                    <article className="news-article">
                        <div className="article-header">
                            <h1 className="article-title">{news.title}</h1>
                        </div>

                        <div className="article-content-top">
                            {news.description?.map((el, index) => (
                                <p key={index} className="article-lead">{el}</p>
                            ))}
                        </div>

                        <div className="article-content">
                            <div className="article-content-info">
                                {renderSpecialSections()}
                            </div>
                        </div>
                    </article>
                </div>
                {renderLightbox()}
            </div>
        )
    }

    if ([6, 7, 8, 9].includes(currentId)) {
        return (
            <div className="news-single-page">
                <div className="news-single-container container">
                    {breadcrumb}

                    <article className="news-article">
                        <div className="article-header">
                            <h1 className="article-title">{news.title}</h1>
                        </div>

                        <div className="article-content-top">
                            {news.description?.map((el, index) => (
                                <p key={index} className="article-lead">{el}</p>
                            ))}
                        </div>

                        {renderGallerySections()}
                    </article>
                </div>
                {renderLightbox()}
            </div>
        )
    }

    return (
        <div className="news-single-page">
            <div className="news-single-container container">
                {breadcrumb}

                <article className="news-article">
                    <div className="article-header">
                        <h1 className="article-title">{news.title}</h1>
                    </div>

                    <div className="article-content-top">
                        {news.description?.map((el, index) => (
                            <p key={index} className="article-lead">{el}</p>
                        ))}
                    </div>

                    <div className="news-article-bottom">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={15}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            }}
                            loop={true}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="article-swiper"
                        >
                            {news.image?.map((el, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="article-image-slide"
                                        onClick={() => openLightbox(news.image, index)}
                                    >
                                        <img src={el} alt={news.title} />
                                        {news.world?.[index] && (
                                            <p className="article-image-name-title">{news.world[index]}</p>
                                        )}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="article-content">
                        <div className="article-content-info">
                            {renderLocationSections()}
                        </div>
                    </div>
                </article>
            </div>
            {renderLightbox()}
        </div>
    )
}

export default NewsSingle