import Image from "next/image";
import { LoginForm } from "./components";

export default function LoginPage() {
  return (
    <>
      <div className="bg-black md:bg-[url(/images/bg-login.jpg)] h-screen">
        <div className="fixed inset-0 bg-black/60" />
        <div className="relative">
          <Image
            src="/images/logo.png"
            alt="Logo de Netflix"
            width={200}
            height={200}
          />
          <div className="text-white w-full md:w-1/2 lg:w-1/4 mx-auto bg-black/60 mt-5 rounded px-5 md:px-10 py-5">
            <h2 className="text-2xl">Iniciar Sesión</h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
