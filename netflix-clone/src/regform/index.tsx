import { PasswordForm } from "./components";

export default async function RegFormPage() {
  return (
    <div className="bg-white h-screen text-black pt-10">
      <div className="w-full md:w-1/2 lg:w-1/4 mx-auto flex flex-col gap-2">
        <p className="uppercase">Paso 1 de 3</p>

        <h1 className="text-3xl font-bold">
          Crea una contraseña para que comiences tu membresía
        </h1>
        <p className="text-lg">¡Unos pasos más y listo!</p>
        <p className="text-lg">Tampoco nos gustan los trámites.</p>
        <PasswordForm />
      </div>
    </div>
  );
}
