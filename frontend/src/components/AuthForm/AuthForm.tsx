import { Link } from "react-router-dom";
import type { AuthFormProps } from "../../types/types";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./AuthForm.module.css";

const AuthForm = ({
  title,
  inputPropsList,
  buttonLabel,
  bottomLink,
  onSubmit,
}: AuthFormProps) => {
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>

        <div className={styles.inputs}>
          {inputPropsList.map((props) => (
            <Input key={props.id} {...props} />
          ))}
        </div>

        <div className={styles.button}>
          <Button type="submit">{buttonLabel}</Button>
        </div>

        <div className={styles.bottomLink}>
          <Link to={bottomLink.to}>{bottomLink.label}</Link>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
