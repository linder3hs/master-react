import { ChangeEvent } from "react";
import { Theme } from "@/common";
import classNames from "classnames";

interface Props {
  name?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  value?: string;
  theme: Theme;
  error?: string;
  onBlur?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField(props: Props) {
  const color = {
    dark: "bg-netflix-gray placeholder-netflix-placeholder text-white",
    light: "bg-white text-netflix-gray placeholder-netflix-gray",
  };

  const inputStyles = classNames(
    "w-full py-4 px-3 text-sm rounded outline-none",
    {
      "border-b-netflix-color-error border-b border-b-2": props.error,
      "border-none": !props.error,
    }
  );

  return (
    <>
      <input {...props} className={`${inputStyles} ${color[props.theme]}`} />
      {props.error && (
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
