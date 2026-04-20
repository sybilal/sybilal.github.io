import EducationCard from "../../components/EducationCard";
import { educationInfo } from "../../portfolio";
import styles from "./Education.module.scss";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className={styles.education_section} id="education">
        <h1 className={styles.education_heading}>Education</h1>
        <div className={styles.education_card_container}>
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
