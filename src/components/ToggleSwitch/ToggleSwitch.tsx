import { useContext, useState } from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import styles from "./ToggleSwitch.module.scss";

const ToggleSwitch = () => {
  const { isDark } = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className={`${styles.slider} ${styles.round}`}>
        <span className={styles.emoji}>{isChecked ? emoji("🌜") : emoji("☀️")}</span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
