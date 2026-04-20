import { useContext } from "react";

import { motion } from "motion/react";
import emoji from "react-easy-emoji";
import manOnTable from "../../assets/images/manOnTable.svg";
import landingPerson from "../../assets/lottie/landingPerson.json";
import StyleContext from "../../contexts/StyleContext";
import { greeting, illustration } from "../../portfolio";
import Button from "../Button";
import DisplayLottie from "../DisplayLottie";
import SocialMedia from "../SocialMedia";
import styles from "./Greeting.module.scss";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <div className={styles.greet_main} id="greeting">
        <div className={styles.greeting_main}>
          <div className={styles.greeting_text_div}>
            <div>
              <h1
                className={isDark ? `${styles.dark_mode} ${styles.greeting_text}` : `${styles.greeting_text}`}
              >
                {" "}
                {greeting.title}{" "}
                <span className={styles.wave_emoji}>{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? `${styles.dark_mode} ${styles.greeting_text_p}`
                    : `${styles.greeting_text_p} ${styles.subTitle}`
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className={styles.empty_div} />
              <SocialMedia />
              <div className={styles.button_greeting_div}>
                <Button text="Contact me" href="#contact" className={styles.download_link_button} newTab={false} />
                <Button text="Download my resume" href={greeting.resumeLink} className={styles.download_link_button} newTab={true} />
              </div>
            </div>
          </div>
          <div className={styles.greeting_image_div}>
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={manOnTable}
              ></img>
            )}
          </div>
        </div>
      </div>
    </motion.div >
  );
}
