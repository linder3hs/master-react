import { useState } from "react";
import { Modal, Select } from "../../components";
import { categories } from "../../core/category";

export default function CreateTask() {
  const [open, setOpen] = useState(false);

  const [listCategories, setListCategories] = useState(categories);

  const [selectCategory, setSelectCategory] = useState({
    select: listCategories[0],
    current: null,
  });

  const handleChangeList = (e) => {
    setSelectCategory({
      select: e,
      current: e,
    });

    const items = listCategories.filter((category) => category.text !== e.text);

    setListCategories([{ ...e }, ...items]);
  };

  const handleMouse = (category) => {
    setSelectCategory({
      ...selectCategory,
      current: category,
    });
  };

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
              <Select
                value={selectCategory}
                onChange={handleChangeList}
                onMouseEnter={handleMouse}
                listItems={listCategories}
              />
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
