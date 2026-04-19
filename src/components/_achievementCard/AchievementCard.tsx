import React from "react";
import styles from "./AchievementCard.module.scss";

export default function AchievementCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className={`${styles.certificate_card} ${isDark ? styles.dark_mode : ""}`.trim()}
    >
      <div className={styles.certificate_image_div}>
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className={styles.card_image}
        ></img>
      </div>
      <div className={styles.certificate_detail_div}>
        <h5
          className={`${styles.card_title} ${isDark ? styles.dark_mode : ""}`.trim()}
        >
          {cardInfo.title}
        </h5>
        <p
          className={`${styles.card_subtitle} ${isDark ? styles.dark_mode : ""}`.trim()}
        >
          {cardInfo.description}
        </p>
      </div>
      <div className={styles.certificate_card_footer}>
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={`${styles.certificate_tag} ${isDark ? styles.dark_mode : ""}`.trim()}
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
