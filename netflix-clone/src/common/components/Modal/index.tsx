"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  isFullWidth?: boolean;
}

export default function Modal({ children, open, onClose, isFullWidth }: Props) {
  const dialogPanel = classNames(
    "w-full max-w-sm rounded bg-netflix-color-dark p-4",
    {
      "min-w-full min-h-[100vh]": isFullWidth,
    }
  );

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
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <Dialog.Panel className={dialogPanel}>{children}</Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
