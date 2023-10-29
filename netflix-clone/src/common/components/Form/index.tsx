import { FormEvent, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  className?: string;
}

export default function Form({ children, onSubmit, className }: Props) {
  return (
    <>
      <form onSubmit={onSubmit} className={className}>
        {children}
      </form>
    </>
  );
}
