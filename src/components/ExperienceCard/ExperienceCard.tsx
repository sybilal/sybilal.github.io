import * as ColorThief from "colorthief";
import { createRef, useState } from "react";
import styles from "./ExperienceCard.module.scss";

const ExperienceCard = ({ cardInfo, isDark }: { cardInfo: any; isDark: boolean }) => {
  const [colorArrays, setColorArrays] = useState<number[] | null>(null);
  const imgRef = createRef<HTMLImageElement>();

  const getColorArrays = async () => {
    if (imgRef.current) {
      const color = await ColorThief.getColor(imgRef.current);
      setColorArrays(color as unknown as number[]);
    }
  };

  const rgb = (values: number[] | null) =>
    typeof values === "undefined"
      ? ""
      : `rgb(${values?.join(", ") || ""})`;

  const GetDescBullets = ({ descBullets, isDark }: { descBullets: string[]; isDark: boolean }) => {
    return descBullets
      ? descBullets.map((item, i: number) => (
        <li
          key={i}
          className={
            isDark
              ? `${styles.subTitle} ${styles.dark_mode_text}`
              : styles.subTitle
          }
        >
          {item}
        </li>
      ))
      : null;
  };

  return (
    <div className={isDark ? styles.experience_card_dark : styles.experience_card}>
      <div style={{ background: rgb(colorArrays) }} className={styles.experience_banner}>
        <div className={styles.experience_blurred_div}></div>
        <div className={styles.experience_div_company}>
          <h5 className={styles.experience_text_company}>{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className={styles.experience_roundedimg}
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className={styles.experience_text_details}>
        <h5
          className={
            isDark
              ? `${styles.experience_text_role} ${styles.dark_mode_text}`
              : styles.experience_text_role
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? `${styles.experience_text_date} ${styles.dark_mode_text}`
              : styles.experience_text_date
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? `${styles.subTitle} ${styles.experience_text_desc} ${styles.dark_mode_text}`
              : `${styles.subTitle} ${styles.experience_text_desc}`
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
