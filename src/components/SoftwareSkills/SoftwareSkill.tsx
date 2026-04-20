
import styles from "./SoftwareSkill.module.scss";
import { skillsSection } from "../../portfolio";

const SoftwareSkill = () => {
  return (
    <div>
      <div className={styles.software_skills_main_div}>
        <ul className={styles.dev_icons}>
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className={styles.software_skill_inline}
                data-name={skills?.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkill;
