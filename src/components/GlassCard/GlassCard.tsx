import type { ReactNode, HTMLAttributes } from 'react';
import styles from './GlassCard.module.scss';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  interactive?: boolean;
  noPad?: boolean;
}

export default function GlassCard({
  children,
  interactive = false,
  noPad = false,
  className = '',
  ...rest
}: GlassCardProps) {
  const cls = [
    styles.card,
    interactive ? styles.interactive : '',
    noPad ? styles.noPad : '',
    className,
  ].filter(Boolean).join(' ');

  return <div className={cls} {...rest}>{children}</div>;
}
