import { type ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

export default function AuthContainer({ children }: Props) {
  return (
    <div className="bg-black md:bg-[url(/images/bg-login.jpg)] h-screen">
      <div className="fixed inset-0 bg-black/60" />
      <div className="relative">
        <Image
          src="/images/logo.png"
          alt="Logo de Netflix"
          width={200}
          height={200}
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
