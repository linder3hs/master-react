"use client";

import { Button, Form, TextField } from "@/common";
import type { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import useForm from "@/common/hooks/useForm";

export default function PasswordForm() {
  const { user } = useSelector((state: RootState) => state);

  const { values, handleInputChange } = useForm({
    email: user.email,
    password: "",
  });

  return (
    <Form className="flex flex-col gap-3">
      <TextField
        theme="light"
        placeholder="Email"
        value={values.email}
        onChange={handleInputChange}
      />
      <TextField
        theme="light"
        placeholder="Password"
        value={values.password}
        onChange={handleInputChange}
      />
      <Button text="Siguiente" variant="primary" textVariant="xl" />
    </Form>
  );
}
