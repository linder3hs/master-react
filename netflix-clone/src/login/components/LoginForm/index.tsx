"use client";

import { Form, TextField, Button } from "@/common";
import useForm from "@/common/hooks/useForm";
import { FormEvent } from "react";

export default function LoginForm() {
  const { values, handleInputChange, errors, handleValidate } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleValidate();
  };

  return (
    <Form className="flex flex-col mt-5 gap-5" onSubmit={handleSubmit}>
      <TextField
        type="email"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleInputChange}
        error={errors.email}
        onBlur={() => handleValidate("email")}
      />
      <TextField
        type="password"
        placeholder="Password"
        name="password"
        value={values.password}
        onChange={handleInputChange}
        error={errors.password}
        onBlur={() => handleValidate("password")}
      />
      <Button text="Iniciar sesión" type="submit" variant="primary" />
    </Form>
  );
}
