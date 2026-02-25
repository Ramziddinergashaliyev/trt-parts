
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './newsSingle.scss'
import { newsData, newsDataEn } from '../../static'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const NewsSingle = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [news, setNews] = useState(null)
    const { t, i18n } = useTranslation()
    const observerRef = useRef(null)

    const fullData = i18n?.language === "ru" ? newsData : newsDataEn

    useEffect(() => {
        window.scrollTo(0, 0)

        const foundNews = fullData.find(item => item.id === parseInt(id))

        if (foundNews) {
            setNews(foundNews)
        } else {
            navigate('/news')
        }
    }, [id, navigate, fullData])

    // Intersection Observer setup
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

        // Observe all location sections
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

    const renderLocationSections = () => {
        if (!news.locationData) {
            return news.fullContent?.map((text, index) => (
                <p key={index} className="article-text">{text}</p>
            ))
        }

        return news.locationData.map((location, index) => {
            if (location.position === 'right') {
                return (
                    <div key={location.id} className="location-section scroll-animate" data-direction="right">
                        <div className="location-content-wrapper layout-right">
                            <div className="location-images-block animate-from-right">
                                <div className="images-grid">
                                    {location.images.map((img, imgIndex) => (
                                        <div key={imgIndex} className="image-item">
                                            <img src={img} alt={`${location.title} ${imgIndex + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="location-text-block animate-from-right">
                                <h2 className="location-title">{location.title}</h2>
                                <p className="location-subtitle">📍 {location.location}</p>
                                <p className="location-description">{location.description}</p>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div key={location.id} className="location-section scroll-animate" data-direction="left">
                        <div className="location-content-wrapper layout-left">
                            <div className="location-text-block animate-from-left">
                                <h2 className="location-title">{location.title}</h2>
                                <p className="location-subtitle">📍 {location.location}</p>
                                <p className="location-description">{location.description}</p>
                            </div>
                            <div className="location-images-block animate-from-left">
                                <div className="images-grid">
                                    {location.images.map((img, imgIndex) => (
                                        <div key={imgIndex} className="image-item">
                                            <img src={img} alt={`${location.title} ${imgIndex + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }

    if (!news) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        )
    }

    return (
        <div className="news-single-page">
            <div className="news-single-container container">
                <div className="breadcrumb">
                    <span onClick={() => navigate('/')} className="breadcrumb-item">{t("Домашняя")}</span>
                    <span className="breadcrumb-divider">/</span>
                    <span onClick={() => navigate('/news')} className="breadcrumb-item">{t("Новости")}</span>
                    <span className="breadcrumb-divider">/</span>
                    <span className="breadcrumb-current">{news?.category}</span>
                </div>

                <article className="news-article">
                    <div className="article-header">
                        <h1 className="article-title">{news.title}</h1>
                    </div>

                    <div className="article-content-top">
                        {
                            news.description?.map((el, index) => (
                                <p key={index} className="article-lead">
                                    {el}
                                </p>
                            ))
                        }
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
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="article-swiper"
                        >
                            {news.image?.map((el, index) => (
                                <SwiperSlide key={index}>
                                    <div className="article-image-slide">
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
        </div>
    )
}

export default NewsSingle