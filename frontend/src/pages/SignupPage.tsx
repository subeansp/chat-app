import AuthForm from "../components/AuthForm/AuthForm";
import type { InitialSignupForm, InputProps } from "../types/types";
import useAuthForm from "../hooks/useAuthForm";

const initialForm: InitialSignupForm = {
  username: "",
  password: "",
  confirmPassword: "",
};

const SignupPage = () => {
  const { form, handleChange, handleSubmit } = useAuthForm<InitialSignupForm>({
    initialForm,
  });

  const inputPropsList: InputProps[] = [
    {
      id: "signup-username",
      name: "username",
      type: "text",
      placeholder: "Username",
      autoComplete: "off",
      value: form.username,
      onChange: handleChange,
    },
    {
      id: "signup-password",
      name: "password",
      type: "password",
      placeholder: "Password",
      autoComplete: "off",
      value: form.password,
      onChange: handleChange,
    },
    {
      id: "signup-confirmPassword",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      autoComplete: "off",
      value: form.confirmPassword,
      onChange: handleChange,
    },
  ];

  return (
    <AuthForm
      title="サインアップ"
      inputPropsList={inputPropsList}
      buttonLabel="登録"
      bottomLink={{ to: "/login", label: "ログイン" }}
      onSubmit={handleSubmit}
    />
  );
};

export default SignupPage;
