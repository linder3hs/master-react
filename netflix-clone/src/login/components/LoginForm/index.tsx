"use client";
import { useEffect } from "react";
import { Form, TextField, Button } from "@/common";
import useForm from "@/common/hooks/useForm";
import { FormEvent } from "react";
import { createBrowserClient } from "@supabase/ssr";

export default function LoginForm() {
  const { values, handleInputChange, errors, handleValidate } = useForm({
    email: "",
    password: "",
  });

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleValidate();
    const user = await supabase.auth.getSession();
    console.log("user", user);
    // const { error } = await supabase.auth.signUp({
    //   ...values,
    //   options: {
    //     data: {
    //       name: "Linder",
    //       lastname: "Hassinger",
    //     },
    //   },
    // });
    // console.log("error", error);
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
