import { motion } from "motion/react";

const Footer = () => {
  // const { isDark } = useContext(StyleContext);

  return (
    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      {/* <div className={styles.footer_div}>
        <p className={`${styles.footer_text} ${isDark ? styles.dark_mode : ""}`.trim()}>
          {emoji("Made with ❤️ by DeveloperFolio Team")}
        </p>
        <p className={`${styles.footer_text} ${isDark ? styles.dark_mode : ""}`.trim()}>
          Theme by{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            developerFolio
          </a>
        </p>
      </div> */}
    </motion.div>
  );
};

export default Footer;
