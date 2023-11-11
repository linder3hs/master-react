"use client";

import { FormEvent } from "react";
import { Button, Form, TextField } from "@/common";
import type { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import useForm from "@/common/hooks/useForm";
import { supabase } from "@/lib/supabase/client";
import { create } from "@/lib/services";

export default function PasswordForm() {
  const { user } = useSelector((state: RootState) => state);

  const { values, handleInputChange } = useForm({
    email: user.email,
    password: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      ...values,
    });

    if (error) {
      alert(error.message);
      return;
    }

    const reponse = await create({
      url: "auth",
      body: {
        access_token: data.session?.access_token,
        refresh_token: data.session?.refresh_token,
      },
    });

    console.log(reponse);
  };

  return (
    <Form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <TextField
        theme="light"
        placeholder="Email"
        value={values.email}
        name="email"
        onChange={handleInputChange}
      />
      <TextField
        theme="light"
        placeholder="Password"
        value={values.password}
        name="password"
        onChange={handleInputChange}
        type="password"
      />
      <Button text="Siguiente" variant="primary" textVariant="xl" />
    </Form>
  );
}
