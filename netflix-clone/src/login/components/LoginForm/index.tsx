"use client";
import { Form, TextField, Button } from "@/common";
import useForm from "@/common/hooks/useForm";
import { FormEvent } from "react";
import { supabase } from "@/lib/supabase/client";
import { create } from "@/lib/services";

export default function LoginForm() {
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
    console.log("user", data);

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
