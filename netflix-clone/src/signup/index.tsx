import { AuthContainer, Button, TextField } from "@/common";

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
        <div className="flex flex-col md:flex-row gap-3 w-full lg:w-[40%] items-center">
          <div className="lg:grow-[10] w-full">
            <TextField placeholder="Email" theme="transparent" size="large" />
          </div>
          <div className="grow">
            <Button
              text="Comenzar"
              textVariant="2xl"
              variant="primary"
              rightIcon="/icons/arrow-right.svg"
              size="large"
            />
          </div>
        </div>
      </div>
    </AuthContainer>
  );
}
