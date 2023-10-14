import { useState } from "react";
import { Modal } from "../../components";
import { Listbox } from "@headlessui/react";
import { categories } from "../../core/category";

export default function CreateTask() {
  const [open, setOpen] = useState(false);

  const [selectCategory, setSelectCategory] = useState(categories[0]);

  return (
    <>
      <Modal open={open} onClose={() => setOpen(!open)}>
        <form action="">
          <h2>Crear Tarea</h2>
          <div className="my-5">
            <div>
              <input
                type="text"
                placeholder="Escribe tu tarea"
                className="w-full border px-2 py-3 rounded outline-none"
              />
            </div>
            <div className="mt-5">
              <Listbox value={selectCategory} onChange={setSelectCategory}>
                <div className="relative">
                  <Listbox.Button className="w-full flex gap-2 py-3 px-2 rounded border">
                    <img src={selectCategory.icon} /> {selectCategory.text}
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-10 w-full bg-white mt-1 rounded shadow">
                    {categories.map((category) => (
                      <Listbox.Option
                        key={category.text}
                        value={category}
                        className={`${
                          selectCategory.text === category.text
                            ? "bg-blue-200 text-white"
                            : "bg-white"
                        } py-3 flex gap-2 items-center cursor-pointer px-2 hover:bg-blue-200 hover:text-white first:rounded-t last:rounded-b`}
                      >
                        <img src={category.icon} /> {category.text}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
          </div>
        </form>
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
