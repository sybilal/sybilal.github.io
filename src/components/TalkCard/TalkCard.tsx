
import styles from "./TalkCard.module.scss";

const TalkCard = ({ talkDetails }: { talkDetails: any }) => {
  return (
    <div>
      <div className={styles.container}>
        <div
          className={
            talkDetails.isDark
              ? `${styles.dark_rectangle} ${styles.rectangle}`
              : styles.rectangle
          }
        >
          <div className={styles.diagonal_fill}></div>
          <div className={styles.talk_card_title}>{talkDetails.title}</div>
          <p className={styles.talk_card_subtitle}>{talkDetails.subtitle}</p>

          <div className={styles.card_footer_button_div}>
            <a href={talkDetails.slides_url} target="_blank" rel="noreferrer" className={styles.talk_button}>
              Slides
            </a>
            <a href={talkDetails.event_url} target="_blank" rel="noreferrer" className={styles.talk_button}>
              Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkCard;
