/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, Modal, Form, TextField, UserSupabase } from "@/common";
import { useOpen, useForm } from "@/common/hooks";
import { supabase } from "@/lib/supabase/client";
import { FormEvent } from "react";
import { showToast } from "@/common/utils/toast";
import { useRouter } from "next/navigation";

interface Props {
  user: UserSupabase;
}

export default function ManageProfile({ user }: Props) {
  const { open, handleOpen } = useOpen();

  const router = useRouter();

  const { values, handleInputChange } = useForm({
    name: "",
    user_id: user.id,
    avatar: "",
    language: "es",
    is_child: false,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    values.avatar = `https://api.dicebear.com/7.x/adventurer/svg?seed=${values.name}`;

    const { error } = await supabase.from("profiles").insert(values).select();

    if (error) {
      showToast({
        title: error.message,
        icon: "error",
      });
      return;
    }

    handleOpen();
    showToast({
      title: "Perfil creado",
      icon: "success",
    });

    router.refresh()
  };

  return (
    <>
      <div className="mt-10">
        <Button
          text="Administrar perfiles"
          textVariant="lg"
          variant="transparent"
          onClick={handleOpen}
        />
      </div>
      <Modal open={open} onClose={handleOpen} isFullWidth>
        <Form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 max-w-3xl m-auto h-[100vh] items-center justify-center"
        >
          <div className="flex flex-col gap-10 w-full">
            <h2 className="text-7xl font-semibold">Agregar perfil</h2>
            <p className="text-2xl text-gray-400">
              Agrega un perfil para persona que ve Netflix
            </p>
            <hr />
          </div>
          <div className="flex items-center gap-5 w-full">
            <img
              src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${values.name}`}
              alt=""
              width={120}
              height={120}
              className="border rounded bg-white"
            />
            <TextField
              placeholder="Nombre"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex w-1/4 gap-5">
            <Button text="Continuar" type="submit" variant="primary" />
            <Button
              text="Cancelar"
              type="button"
              variant="transparent"
              onClick={handleOpen}
            />
          </div>
        </Form>
      </Modal>
    </>
  );
}
