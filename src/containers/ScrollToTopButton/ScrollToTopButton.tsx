import { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.scss";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={styles.top_button}
      title="Go to top"
      type="button"
    >
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
};

export default ScrollToTopButton;
