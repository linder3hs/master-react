import { useState } from "react";

export default function useOpen(initialValue: boolean = false) {
  const [open, setOpen] = useState<boolean>(initialValue);

  const handleOpen = () => setOpen(!open);

  return {
    open,
    handleOpen,
  };
}
