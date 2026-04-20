import { motion } from "motion/react";
import { createRef, useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import styles from "./EducationCard.module.scss";
import type { EducationCardType } from "../../portfolioTypes";

const EducationCard = ({ school }: { school: EducationCardType }) => {
  const imgRef = createRef<HTMLImageElement>();

  const GetDescBullets = ({ descBullets }: { descBullets: string[] }) => {
    return descBullets
      ? descBullets.map((item, i: number) => (
        <li key={i} className="subTitle">
          {item}
        </li>
      ))
      : null;
  };

  const { isDark } = useContext(StyleContext);

  if (!school.logo) {
    console.error(`Image of ${school.schoolName} is missing in education section`);
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={styles.education_card}
      >
        {school.logo && (
          <div className={styles.education_card_left}>
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className={styles.education_roundedimg}
              src={school.logo}
              alt={school.schoolName}
            />
          </div>
        )}
        <div className={styles.education_card_right}>
          <h5 className={styles.education_text_school}>{school.schoolName}</h5>

          <div className={styles.education_text_details}>
            <h5
              className={`${styles.education_text_subHeader
                } ${isDark ? styles.dark_mode : ""}`.trim()}
            >
              {school.subHeader}
            </h5>
            <p
              className={`${styles.education_text_duration
                } ${isDark ? styles.dark_mode : ""}`.trim()}
            >
              {school.duration}
            </p>
            <p className={styles.education_text_desc}>{school.desc}</p>
            <div className={styles.education_text_bullets}>
              <ul>
                <GetDescBullets descBullets={school.descBullets} />
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className={styles.education_card_border}
      ></motion.div>
    </div>
  );
};

export default EducationCard;
