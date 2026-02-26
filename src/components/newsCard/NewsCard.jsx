import React from 'react';
import './newsCard.scss';
import { newsData, newsDataEn } from '../../static';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const NewsCard = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const productData = i18n?.languages[0] === 'ru' ? newsData : newsDataEn;

    const handleViewAllNews = () => navigate('/news');
    const handleCardClick = (id) => navigate(`/news-single/${id}`);

    const formatDate = (dateString) => {
        const date = dateString ? new Date(dateString) : new Date();
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleDateString('en-US', { month: 'long' });
        const year = date.getFullYear();
        return { day, month, year };
    };

    return (
        <section className="news-section container">
            <div className="news-header">
                <h2 className="news-heading">
                    {t('Latest')} <span>{t('News')}</span>
                </h2>
                <NavLink to="/news" className="news-view-all">
                    All News <MdArrowOutward />
                </NavLink>
            </div>

            <div className="news-grid">
                {productData.slice(0, 3).map((item, index) => {
                    const { day, month, year } = formatDate(item.date);
                    return (
                        <article
                            key={item.id}
                            className="news-card"
                            style={{ '--i': index }}
                            onClick={() => handleCardClick(item.id)}
                        >
                            <div className="news-card__image-wrapper">
                                <img
                                    className="news-card__image"
                                    src={item.img}
                                    alt={item.title}
                                />
                            </div>

                            <div className="news-card__content">
                                <div className="news-card__date">
                                    <span>{item?.date}</span>
                                    <span className="news-card__date-sep" />
                                </div>

                                <h3 className="news-card__title">{item.title}</h3>

                                <div className="news-card__footer">
                                    <span className="news-card__read">Read more</span>
                                    <div className="news-card__arrow">
                                        <MdArrowOutward />
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default NewsCard;