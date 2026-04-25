import styles from './TechChip.module.scss';

interface TechChipProps {
  label: string;
  variant?: 'default' | 'indigo' | 'cyan' | 'filled';
}

export default function TechChip({ label, variant = 'default' }: TechChipProps) {
  return (
    <span className={`${styles.chip} ${variant !== 'default' ? styles[variant] : ''}`}>
      {label}
    </span>
  );
}
