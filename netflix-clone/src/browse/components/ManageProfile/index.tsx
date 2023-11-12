/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, Modal, TextField } from "@/common";
import { useOpen, useForm } from "@/common/hooks";

export default function ManageProfile() {
  const { open, handleOpen } = useOpen();

  const { values, handleInputChange } = useForm({
    name: "",
    user_id: "",
  });

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
        <form className="flex flex-col gap-10 max-w-3xl m-auto h-[100vh] items-center justify-center">
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
        </form>
      </Modal>
    </>
  );
}
