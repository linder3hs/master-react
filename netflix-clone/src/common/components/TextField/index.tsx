import { ChangeEvent } from "react";
import { Theme } from "@/common";

interface Props {
  name?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  theme: Theme;
}

export default function TextField(props: Props) {
  const color = {
    dark: "bg-netflix-gray placeholder-white text-white",
    light: "bg-white text-netflix-gray placeholder-netflix-gray",
  };

  return (
    <>
      <input
        {...props}
        className={`w-full py-4 px-3 text-sm rounded border-none outline-none ${
          color[props.theme]
        }`}
      />
    </>
  );
}

TextField.defaultProps = {
  type: "text",
  theme: "dark",
};
