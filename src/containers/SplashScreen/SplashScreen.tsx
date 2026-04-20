import { useContext } from "react";
import DisplayLottie from "../../components/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import { greeting, splashScreen } from "../../portfolio";
import styles from "./SplashScreen.module.scss";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? `${styles.dark_mode} ${styles.splash_container}` : styles.splash_container}>
      <div className={styles.splash_animation_container}>
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className={styles.splash_title_container}>
        <span className="grey-color"> &lt;</span>
        <span className={styles.splash_title}>{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
}
