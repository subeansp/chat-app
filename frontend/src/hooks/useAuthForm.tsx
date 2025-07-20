import React, { useState } from "react";
import type { UseAuthFormProps } from "../types/types";

const useAuthForm = <T extends Record<string, string>>({
  initialForm,
}: UseAuthFormProps<T>) => {
  const [form, setForm] = useState<T>(initialForm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(JSON.stringify(form, null, 2));
    setForm(initialForm);
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
};

export default useAuthForm;
