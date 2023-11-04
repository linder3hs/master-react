import { Variant, TextVariant, ButtonVariant } from "@/common";
import Image from "next/image";

interface Props {
  type?: ButtonVariant;
  onClick?: () => void;
  text?: string;
  variant: Variant;
  textVariant: TextVariant;
  lefIcon?: string;
  rightIcon?: string;
}

interface Color {
  [key: string]: string;
}

export default function Button({
  text,
  type,
  onClick,
  variant,
  textVariant,
  lefIcon,
  rightIcon,
}: Props) {
  const colors: Color = {
    default: "bg-white text-black",
    primary: "bg-netflix text-white",
    secondary: "bg-netflix-gray text-white",
    danger: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    success: "bg-green-500 text-white",
    info: "bg-blue-500 text-white",
    light: "bg-netflix-light text-white",
    dark: "bg-netflix-dark text-white",
    transparent: "bg-netflix-color-gray-light/70 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${colors[variant]} py-3 rounded font-semibold w-full flex items-center justify-center gap-2`}
    >
      {lefIcon && <Image src={lefIcon} alt="icon" width={24} height={24} />}
      <span className={`text-${textVariant}`}>{text}</span>
      {rightIcon && <Image src={rightIcon} alt="icon" width={24} height={24} />}
    </button>
  );
}

Button.defaultProps = {
  variant: "default",
  textVariant: "sm",
};
