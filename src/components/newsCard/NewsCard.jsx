import React from 'react';
import './newsCard.scss';
import { newsData, newsDataEn } from '../../static';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const NewsCard = () => {
    const { t, i18n } = useTranslation()
    const navigate = useNavigate();

    const productData = i18n?.languages[0] === "ru" ? newsData : newsDataEn

    const handleViewAllNews = () => {
        navigate('/news');
    };

    const handleCardClick = (newsId) => {
        navigate(`/news-single/${newsId}`);
    };

    const formatDate = (dateString) => {
        const date = dateString ? new Date(dateString) : new Date();
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleDateString('en-US', { month: 'short' });
        return { day, month };
    };

    return (
        <section className="news-section container">
            <div className="news-card-container">
                <div className="news-header">
                    <h2 className="news-heading">{t("Latest News")}</h2>
                    <div className="news-actions">
                        <NavLink to={"/news"} className="news-actions-btn">{t("all")}<MdArrowOutward /></NavLink>
                    </div>
                </div>
                <div className="news-grid">
                    {productData.slice(0, 3)?.map((item, index) => {

                        return (
                            <article
                                key={item.id}
                                className="news-card"
                                style={{ '--animation-order': index }}
                                onClick={() => handleCardClick(item.id)}
                            >
                                <div className="news-card__image-wrapper">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="news-card__image"
                                    />
                                </div>

                                <div className="news-card__overlay"></div>

                                <div className="news-card__content">
                                    <div></div>
                                    <h3 className="news-card__title">{item.title}</h3>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default NewsCard;