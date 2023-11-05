import { AuthContainer } from "@/common";
import { EmailForm } from "./components";

export default function SignUpPage() {
  return (
    <AuthContainer>
      <div className="flex flex-col gap-5 h-[90vh] items-center justify-center m-5 lg:m-0">
        <h1 className="text-5xl font-bold">
          Películas y series ilimitadas y mucho más
        </h1>
        <h3 className="text-3xl font-semibold">
          Disfruta donde quieras. Cancela cuando quieras.
        </h3>
        <p className="text-xl">
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de Netflix.
        </p>
        <EmailForm />
      </div>
    </AuthContainer>
  );
}
