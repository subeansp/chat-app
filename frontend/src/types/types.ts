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
};
