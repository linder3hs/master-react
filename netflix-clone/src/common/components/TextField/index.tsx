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
  isError?: boolean;
  error?: string;
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
      {props.isError && (
        <span className="text-netflix-color-error text-xs -mt-4">
          {props.error}
        </span>
      )}
    </>
  );
}

TextField.defaultProps = {
  type: "text",
  theme: "dark",
};
