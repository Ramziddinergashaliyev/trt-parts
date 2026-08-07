// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import "./news.scss"
// import { newsData, newsDataEn } from '../../static'
// import { useTranslation } from 'react-i18next'
// import { FaArrowRight } from 'react-icons/fa6'

// const News = () => {
//   const navigate = useNavigate()
//   const [activeCategory, setActiveCategory] = useState('Barchasi')
//   const [visibleCards, setVisibleCards] = useState([])
//   const { t, i18n } = useTranslation()

//   const allData = i18n?.language === "rus" ? newsData : newsDataEn

//   useEffect(() => {
//     window.scrollTo(0, 0)

//     allData.forEach((_, index) => {
//       setTimeout(() => {
//         setVisibleCards(prev => [...prev, index])
//       }, index * 100)
//     })

//   }, [allData])

//   const handleNewsClick = (id) => {
//     navigate(`/news-single/${id}`)
//   }

//   return (
//     <div className="new-container container">

//       <div className="categories-wrapper">
//       </div>

//       <div className="new-grid">
//         {allData?.map((news, index) => (

//           <article
//             key={news.id}
//             className={`new-card ${visibleCards.includes(index) ? 'visible' : ''}`}
//             onClick={() => handleNewsClick(news.id)}
//             style={{ cursor: 'pointer' }}>

//             <div className="card-image">
//               <img src={news.img} alt={news.title} />
//             </div>

//             <div className="card-content">

//               <div className="card-date">{news.date}</div>

//               <h3 className="card-title">{news.title}</h3>
//               <p className="card-description">{news.description}</p>

//               <button className="read-more">
//                 {t("Read more")}
//                 <FaArrowRight />
//               </button>

//             </div>

//           </article>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default News


// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import "./news.scss"
// import { newsData, newsDataEn } from '../../static'
// import { useTranslation } from 'react-i18next'
// import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

// const ITEMS_PER_PAGE = 6

// const News = () => {
//   const navigate = useNavigate()
//   const [activeCategory, setActiveCategory] = useState('Barchasi')
//   const [visibleCards, setVisibleCards] = useState([])
//   const [currentPage, setCurrentPage] = useState(1)
//   const { t, i18n } = useTranslation()

//   const allData = i18n?.language === "rus" ? newsData : newsDataEn

//   const totalPages = Math.ceil(allData.length / ITEMS_PER_PAGE)

//   const paginatedData = allData.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   )

//   useEffect(() => {
//     window.scrollTo(0, 0)

//     setVisibleCards([])
//     paginatedData.forEach((_, index) => {
//       setTimeout(() => {
//         setVisibleCards(prev => [...prev, index])
//       }, index * 100)
//     })

//   }, [allData, currentPage])

//   const handleNewsClick = (id) => {
//     navigate(`/news-single/${id}`)
//   }

//   const handlePageChange = (page) => {
//     if (page < 1 || page > totalPages || page === currentPage) return
//     setCurrentPage(page)
//     window.scrollTo(0, 0)
//   }

//   // Sahifa raqamlarini "..." bilan qisqartirib chiqarish
//   const getPageNumbers = () => {
//     const pages = []
//     const delta = 1

//     for (let i = 1; i <= totalPages; i++) {
//       if (
//         i === 1 ||
//         i === totalPages ||
//         (i >= currentPage - delta && i <= currentPage + delta)
//       ) {
//         pages.push(i)
//       } else if (pages[pages.length - 1] !== '...') {
//         pages.push('...')
//       }
//     }
//     return pages
//   }

//   return (
//     <div className="new-container container">

//       <div className="categories-wrapper">
//       </div>

//       <div className="new-grid">
//         {paginatedData?.map((news, index) => (

//           <article
//             key={news.id}
//             className={`new-card ${visibleCards.includes(index) ? 'visible' : ''}`}
//             onClick={() => handleNewsClick(news.id)}
//             style={{ cursor: 'pointer' }}>

//             <div className="card-image">
//               <img src={news.img} alt={news.title} />
//             </div>

//             <div className="card-content">

//               <div className="card-date">{news.date}</div>

//               <h3 className="card-title">{news.title}</h3>
//               <p className="card-description">{news.description}</p>

//               <button className="read-more">
//                 {t("Read more")}
//                 <FaArrowRight />
//               </button>

//             </div>

//           </article>
//         ))}
//       </div>

//       {totalPages > 1 && (
//         <div className="pagination">
//           <button
//             className="pagination-arrow"
//             disabled={currentPage === 1}
//             onClick={() => handlePageChange(currentPage - 1)}
//             aria-label="Oldingi sahifa"
//           >
//             <FaChevronLeft />
//           </button>

//           <div className="pagination-numbers">
//             {getPageNumbers().map((page, i) =>
//               page === '...' ? (
//                 <span key={`dots-${i}`} className="pagination-dots">•••</span>
//               ) : (
//                 <button
//                   key={page}
//                   className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
//                   onClick={() => handlePageChange(page)}
//                 >
//                   {page}
//                 </button>
//               )
//             )}
//           </div>

//           <button
//             className="pagination-arrow"
//             disabled={currentPage === totalPages}
//             onClick={() => handlePageChange(currentPage + 1)}
//             aria-label="Keyingi sahifa"
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default News


import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./news.scss"
import { newsData, newsDataEn } from '../../static'
import { useTranslation } from 'react-i18next'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

const ITEMS_PER_PAGE = 6

const News = () => {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('Barchasi')
  const [visibleCards, setVisibleCards] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const { t, i18n } = useTranslation()

  const allData = i18n?.language === "rus" ? newsData : newsDataEn

  const totalPages = Math.ceil(allData.length / ITEMS_PER_PAGE)

  const paginatedData = allData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const progressPercent = totalPages > 1
    ? ((currentPage - 1) / (totalPages - 1)) * 100
    : 100

  useEffect(() => {
    window.scrollTo(0, 0)

    setVisibleCards([])
    paginatedData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index])
      }, index * 100)
    })

  }, [allData, currentPage])

  const handleNewsClick = (id) => {
    navigate(`/news-single/${id}`)
  }

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const getPageNumbers = () => {
    const pages = []
    const delta = 1

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i)
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...')
      }
    }
    return pages
  }

  return (
    <div className="new-container container">

      <div className="categories-wrapper">
      </div>

      <div className="new-grid">
        {paginatedData?.map((news, index) => (

          <article
            key={news.id}
            className={`new-card ${visibleCards.includes(index) ? 'visible' : ''}`}
            onClick={() => handleNewsClick(news.id)}
            style={{ cursor: 'pointer' }}>

            <div className="card-image">
              <img src={news.img} alt={news.title} />
            </div>

            <div className="card-content">

              <div className="card-date">{news.date}</div>

              <h3 className="card-title">{news.title}</h3>
              <p className="card-description">{news.description}</p>

              <button className="read-more">
                {t("Read more")}
                <FaArrowRight />
              </button>

            </div>

          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="pagination" aria-label="Sahifalash">

          <div className="pagination-row">
            <button
              className="pagination-arrow"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              aria-label="Oldingi sahifa"
            >
              <FaChevronLeft />
            </button>

            <div className="pagination-numbers">
              {getPageNumbers().map((page, i) =>
                page === '...' ? (
                  <span key={`dots-${i}`} className="pagination-dots">···</span>
                ) : (
                  <button
                    key={page}
                    className={`pagination-num ${currentPage === page ? 'active' : ''}`}
                    onClick={() => handlePageChange(page)}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              className="pagination-arrow"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              aria-label="Keyingi sahifa"
            >
              <FaChevronRight />
            </button>
          </div>

        </nav>
      )}
    </div>
  )
}

export default News