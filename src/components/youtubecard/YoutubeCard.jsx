import React, { useState } from "react";
import { FaPlay, FaYoutube } from "react-icons/fa";
import "./youtubecard.scss";
import { useTranslation } from "react-i18next";

const videos = [
  { id: 1, videoId: "QTxnN9pEnOg" },
  { id: 2, videoId: "2iLmTBYvQpA" },
  { id: 3, videoId: "QDsVWJrHcvQ" },
];

const YoutubeCard = () => {
  const [hovered, setHovered] = useState(null);
  const { t } = useTranslation()

  const handleOpen = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <section className="yt">
      <div className="container">
        <div className="yt__head">

          <div className="yt__head-left">
            <div className="yt__icon">
              <FaYoutube />
            </div>
            
            <div>
              <p className="yt__label">{t("видео")}</p>
              <h2 className="yt__title">{t("канал")}</h2>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@TRTAutoParts"
            target="_blank"
            rel="noreferrer"
            className="yt__channel-btn">
            <FaYoutube />
            <span>{t("Перейти на канал")}</span>
          </a>

        </div>

        <div className="yt__grid">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="yt-card"
              style={{ animationDelay: `${index * 0.12}s` }}
              onMouseEnter={() => setHovered(video.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleOpen(video.videoId)}
            >
              <div className="yt-card__media">
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt="video thumbnail"
                  className="yt-card__img"
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                  }}
                />

                <div className="yt-card__gradient" />

                <div className={`yt-card__play ${hovered === video.id ? "active" : ""}`}>
                  <div className="yt-card__play-ring" />
                  <FaPlay />
                </div>

                <div className="yt-card__badge">
                  <FaYoutube />
                  YouTube
                </div>

                <span className="yt-card__num">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubeCard;