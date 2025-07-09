import AuthForm from "../components/AuthForm/AuthForm";
import type { InputProps } from "../types/types";

const SignupPage = () => {
  const inputPropsList: InputProps[] = [
    {
      id: "signup-username",
      name: "username",
      type: "text",
      placeholder: "Username",
      autoComplete: "off",
    },
    {
      id: "signup-password",
      name: "password",
      type: "password",
      placeholder: "Password",
      autoComplete: "off",
    },
    {
      id: "signup-confirmPassword",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      autoComplete: "off",
    },
  ];

  return (
    <AuthForm
      title="サインアップ"
      inputPropsList={inputPropsList}
      buttonLabel="登録"
      bottomLink={{ to: "/login", label: "ログイン" }}
    />
  );
};

export default SignupPage;
