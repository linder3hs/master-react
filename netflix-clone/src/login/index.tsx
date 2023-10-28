import Image from "next/image";
import { Button, TextField } from "@/common";

export default function LoginPage() {
  return (
    <>
      <div className="bg-[url(/images/bg-login.jpg)] h-screen">
        <div className="fixed inset-0 bg-black/60" />
        <div className="relative">
          <Image
            src="/images/logo.png"
            alt="Logo de Netflix"
            width={200}
            height={200}
          />
          <div className="text-white w-1/4 mx-auto bg-black/60 mt-5 rounded px-10 py-5">
            <h2 className="text-2xl">Iniciar Sesión</h2>
            <form action="" className="flex flex-col mt-5 gap-5">
              <TextField type="email" placeholder="Email" />
              <TextField type="password" placeholder="Password" />
              <Button text="Iniciar sesión" type="submit" variant="primary" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
