import React, { useEffect, useState } from "react";
import "./newsPage.scss";
import { FaPlay } from "react-icons/fa";
import img from "../../assets/img/trt.webp";
import { FaInstagram } from "react-icons/fa";
import Loading from "../../components/loading/Loading";

const NewsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data/posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="news container">
      {posts ? (
        <>
          <a
            className="news__top"
            href="https://www.instagram.com/trt_official_global/"
          >
            <div className="news__top-img">
              <img src={img} alt="" />
              <span className="news__top-img-icon">
                <FaInstagram />
              </span>
            </div>
            <p className="news__top-title">trt_official_global</p>
          </a>
          <div className="news__cards">
            {posts.map((post) => (
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
            <button className="news__btn-ewe">Загрузить еще</button>
            <a
              className="news__btn-insta"
              href="https://www.instagram.com/trt_official_global/"
            >
              <FaInstagram /> Подписаться в Instagram
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="news__loading">
            <Loading />
          </div>
        </>
      )}
    </div>
  );
};

export default NewsPage;
