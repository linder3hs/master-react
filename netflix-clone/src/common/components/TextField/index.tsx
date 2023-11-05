import { ChangeEvent } from "react";
import { Size, Theme } from "@/common";
import classNames from "classnames";

interface Props {
  name?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  value?: string;
  theme: Theme;
  error?: string;
  size: Size;
  onBlur?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

TextField.defaultProps = {
  type: "text",
  theme: "dark",
  size: "medium",
};

export default function TextField({
  name,
  type,
  placeholder,
  id,
  value,
  theme,
  error,
  size,
  onBlur,
  onChange,
}: Props) {
  const inputStyles = classNames(
    "w-full py-4 px-3 text-sm rounded outline-none",
    {
      "border-b-netflix-color-error border-b border-b-2": error,
      "border-b-none": !error,
    }
  );

  const color = {
    dark: "bg-netflix-gray placeholder-netflix-placeholder text-white",
    light:
      "bg-white text-netflix-gray placeholder-netflix-gray border border-netflix-gray",
    transparent:
      "bg-gray-800/70 text-white placeholder-white border border-white",
  };

  const sizes = {
    small: "py-2",
    medium: "py-4",
    large: "py-6",
  };

  return (
    <>
      <input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        id={id}
        placeholder={placeholder}
        className={`${inputStyles} ${color[theme]} ${sizes[size]}`}
      />
      {error && (
        <span className="text-netflix-color-error text-xs -mt-4">{error}</span>
      )}
    </>
  );
}
