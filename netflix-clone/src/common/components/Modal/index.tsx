import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export default function Modal({ children, open, onClose }: Props) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-400"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded bg-white p-4">
            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
