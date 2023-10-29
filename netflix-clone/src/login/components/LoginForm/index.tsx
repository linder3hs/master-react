"use client";

import { useState } from "react";
import { Form, TextField, Button } from "@/common";

export default function LoginForm() {
  const [values, setValues] = useState({
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
      />
      <TextField
        type="password"
        placeholder="Password"
        name="password"
        value={values.password}
      />
      <Button text="Iniciar sesión" type="submit" variant="primary" />
    </Form>
  );
}
