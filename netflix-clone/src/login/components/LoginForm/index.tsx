"use client";

import { Form, TextField, Button } from "@/common";
import useForm from "@/common/hooks/useForm";

export default function LoginForm() {
  const { values, handleInputChange } = useForm({
    email: "",
    password: "",
  });

  return (
    <Form className="flex flex-col mt-5 gap-5">
      <TextField
        type="email"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleInputChange}
        isError
        error="Ingresa un email o un número de teléfono válido."
      />
      <TextField
        type="password"
        placeholder="Password"
        name="password"
        value={values.password}
        onChange={handleInputChange}
        isError
        error="La contraseña debe tener entre 4 y 60 caracteres."
      />
      <Button text="Iniciar sesión" type="submit" variant="primary" />
    </Form>
  );
}
