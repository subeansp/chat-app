import AuthForm from "../components/AuthForm/AuthForm";
import type { InitialLoginForm, InputProps } from "../types/types";
import useAuthForm from "../hooks/useAuthForm";

const initialForm: InitialLoginForm = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const { form, handleChange, handleSubmit } = useAuthForm<InitialLoginForm>({
    initialForm,
  });

  const inputPropsList: InputProps[] = [
    {
      id: "login-username",
      name: "username",
      type: "text",
      placeholder: "Username",
      autoComplete: "off",
      value: form.username,
      onChange: handleChange,
    },
    {
      id: "login-password",
      name: "password",
      type: "password",
      placeholder: "Password",
      autoComplete: "off",
      value: form.password,
      onChange: handleChange,
    },
  ];

  return (
    <AuthForm
      title="ログイン"
      inputPropsList={inputPropsList}
      buttonLabel="ログイン"
      bottomLink={{ to: "/signup", label: "サインアップ" }}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginPage;
