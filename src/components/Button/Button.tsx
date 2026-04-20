
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  className: string;
  href: string;
  newTab: boolean;
}

const Button = ({ text, className, href, newTab }: ButtonProps) => {
  return (
    <div className={className}>
      <a
        className={styles.main_button}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer" : undefined}
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
