import { useState } from "react";
import { Modal } from "../../components";

export default function CreateTask() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} onClose={() => setOpen(!open)}>
        <h1>Es un modal</h1>
      </Modal>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-10 right-10 bg-blue-500 text-white p-2 rounded-full w-12 h-12 text-2xl"
      >
        +
      </button>
    </>
  );
}
