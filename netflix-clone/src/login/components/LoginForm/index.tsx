"use client";
import { Form, TextField, Button } from "@/common";
import useForm from "@/common/hooks/useForm";
import { FormEvent } from "react";
import { post } from "@/lib/services";
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

    if (!handleValidate()) return;

    const { ok, body } = await post({ url: "auth", body: { ...values } });

    if (!ok) {
      showToast({ title: body, icon: "error" });
      return;
    }

    showToast({ title: "Ingresando...", icon: "success" });
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
