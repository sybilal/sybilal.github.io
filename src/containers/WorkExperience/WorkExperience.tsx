import { motion } from "motion/react";
import { workExperiences } from "../../portfolio";
import styles from "./WorkExperience.module.scss";
import { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import ExperienceCard from "../../components/ExperienceCard";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <motion.div
        id="experience"
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 1 }}
      >
        <div className={styles.container} id="workExperience">
          <div>
            <h1 className={styles.heading}>Experiences</h1>
            <div className={styles.cards}>
              {workExperiences.experience.map((card, i) => {
                return (
                  <ExperienceCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      backgroundColor: card.backgroundColor,
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

      </motion.div>
    );
  }
  return null;
}
