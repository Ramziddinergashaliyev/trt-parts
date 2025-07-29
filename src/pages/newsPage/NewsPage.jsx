import React, { useEffect, useState } from "react";
import "./newsPage.scss";
import { FaPlay, FaInstagram } from "react-icons/fa";
import img from "../../assets/img/trt.webp";
import Loading from "../../components/loading/Loading";

const NewsPage = () => {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/posts.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="news container">
      {loading ? (
        <div className="news__loading">
          <Loading />
        </div>
      ) : (
        <>
          <a
            className="news__top"
            href="https://www.instagram.com/trt_official_global/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="news__top-img">
              <img src={img} alt="trt" />
              <span className="news__top-img-icon">
                <FaInstagram />
              </span>
            </div>
            <p className="news__top-title">trt_official_global</p>
          </a>

          <div className="news__cards">
            {posts.slice(0, visibleCount).map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="news__card"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="news__image"
                />
                <div className="news__caption">
                  <FaPlay />
                </div>
              </a>
            ))}
          </div>

          <div className="news__btn">
            {visibleCount < posts.length && (
              <button className="news__btn-ewe" onClick={loadMore}>
                Загрузить еще
              </button>
            )}
            <a
              className="news__btn-insta"
              href="https://www.instagram.com/trt_official_global/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram /> Подписаться в Instagram
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsPage;
