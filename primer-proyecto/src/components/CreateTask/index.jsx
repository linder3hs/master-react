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
            <div>
              <Listbox value={selectCategory} onChange={setSelectCategory}>
                <Listbox.Button>{selectCategory.text}</Listbox.Button>
                <Listbox.Options>
                  {categories.map((category) => (
                    <Listbox.Option key={category.text} value={category.text}>
                      <img src={category.icon} /> {category.text}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
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
