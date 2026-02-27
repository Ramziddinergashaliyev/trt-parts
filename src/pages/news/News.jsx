import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./news.scss"
import { newsData, newsDataEn } from '../../static'
import { useTranslation } from 'react-i18next'

const News = () => {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('Barchasi')
  const [visibleCards, setVisibleCards] = useState([])
  const { t, i18n } = useTranslation()

  const allData = i18n?.language === "rus" ? newsData : newsDataEn

  useEffect(() => {
    window.scrollTo(0, 0)

    allData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index])
      }, index * 100)
    })

  }, [allData])

  const handleNewsClick = (id) => {
    navigate(`/news-single/${id}`)
  }

  return (
    <div className="new-container container">

      <div className="categories-wrapper">
      </div>

      <div className="new-grid">
        {allData?.map((news, index) => (

          <article
            key={news.id}
            className={`new-card ${visibleCards.includes(index) ? 'visible' : ''}`}
            onClick={() => handleNewsClick(news.id)}
            style={{ cursor: 'pointer' }}
          >

            <div className="card-image">
              <img src={news.img} alt={news.title} />
            </div>

            <div className="card-content">

              <div className="card-date">{news.date}</div>

              <h3 className="card-title">{news.title}</h3>
              <p className="card-description">{news.description}</p>

              <button className="read-more">
                {t("Более")}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

            </div>

          </article>
        ))}
      </div>
    </div>
  )
}

export default News