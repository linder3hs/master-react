"use client";
import { Form, TextField, Button } from "@/common";
import useForm from "@/common/hooks/useForm";
import { FormEvent } from "react";
import { supabase } from "@/lib/supabase/client";
import { create } from "@/lib/services";
import { showToast } from "@/common/utils/toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const { values, handleInputChange, errors, handleValidate } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleValidate();
    const { data, error } = await supabase.auth.signInWithPassword({
      ...values,
    });
    if (error) {
      showToast({
        title: error.message,
        icon: "error",
      });
      return;
    }

    const { ok, body } = await create({
      url: "auth",
      body: {
        access_token: data.session?.access_token,
        refresh_token: data.session?.refresh_token,
      },
    });

    if (!ok) {
      showToast({
        title: body,
        icon: "error",
      });
      return;
    }

    router.push("/browse");
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
