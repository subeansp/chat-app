import type React from "react";

// InputProps
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

// ButtonProps
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

// AuthFormProps
export type AuthFormProps = {
  title: string;
  inputPropsList: InputProps[];
  buttonLabel: string;
  bottomLink: {
    to: string;
    label: string;
  };
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

// InitialSignupForm
export type InitialSignupForm = {
  username: string;
  password: string;
  confirmPassword: string;
};

// InitialLoginForm
export type InitialLoginForm = {
  username: string;
  password: string;
};

// UseAuthFormProps
export type UseAuthFormProps<T> = {
  initialForm: T;
};
