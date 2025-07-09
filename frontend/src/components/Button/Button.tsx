import type { ButtonProps } from "../../types/types";
import styles from "./Button.module.css";

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
