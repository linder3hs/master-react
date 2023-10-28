import { ChangeEvent } from "react";


interface Props {
  name?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export default function TextField(props: Props) {
  return (
    <>
      <input
        {...props}
        className="w-full py-4 px-3 text-sm rounded bg-netflix-gray border-none outline-none placeholder-white"
      />
    </>
  );
}

TextField.defaultProps = {
  type: "text",
};
