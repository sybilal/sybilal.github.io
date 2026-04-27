import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  overline?: string;
  title: string;
  subtitle?: string;
}


export default function SectionHeader({
  overline,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      {overline && <span className={styles.overline}>{overline}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
