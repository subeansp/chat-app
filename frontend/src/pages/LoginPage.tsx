import AuthForm from "../components/AuthForm/AuthForm";
import type { InputProps } from "../types/types";

const LoginPage = () => {
  const inputPropsList: InputProps[] = [
    {
      id: "login-username",
      name: "username",
      type: "text",
      placeholder: "Username",
      autoComplete: "off",
    },
    {
      id: "login-password",
      name: "password",
      type: "password",
      placeholder: "Password",
      autoComplete: "off",
    },
  ];

  return (
    <AuthForm
      title="ログイン"
      inputPropsList={inputPropsList}
      buttonLabel="ログイン"
      bottomLink={{ to: "/signup", label: "サインアップ" }}
    />
  );
};

export default LoginPage;
