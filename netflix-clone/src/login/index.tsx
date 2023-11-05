import Image from "next/image";
import { LoginForm } from "./components";
import { AuthContainer } from "@/common";
import Link from "next/link";

export default function LoginPage() {
  return (
    <AuthContainer>
      <div className="text-white w-full md:w-1/2 lg:w-1/4 mx-auto bg-black/70 mt-5 rounded px-5 md:px-10 py-5 lg:py-20">
        <h2 className="text-2xl">Iniciar Sesión</h2>
        <LoginForm />
        <div className="mt-16 text-sm">
          <span className="text-netflix-color-gray">
            ¿Primera vez en Netflix?{" "}
          </span>
          <span>
            <Link href={"/signup"}>Suscribete ahora.</Link>
          </span>
        </div>
        <p className="text-netflix-placeholder text-xs mt-3">
          Esta página está protegida por Google reCAPTCHA para comprobar que no
          eres un robot.
        </p>
      </div>
    </AuthContainer>
  );
}
