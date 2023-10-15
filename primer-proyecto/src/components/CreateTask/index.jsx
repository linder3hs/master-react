import { useState } from "react";
import { Modal, Select } from "../../components";
import { categories } from "../../core/category";
import { create } from "../../services";
import PropTypes from "prop-types";

export default function CreateTask({ getTasks }) {
  const [open, setOpen] = useState(false);

  const [listCategories, setListCategories] = useState(categories);

  const [values, setValues] = useState({
    text: "",
    select: listCategories[0],
    current: null,
    status: "created",
    doneAt: null,
  });

  const handleChangeList = (e) => {
    if (e.target) {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });

      return;
    }

    setValues({
      ...values,
      select: e,
      current: e,
    });

    const items = listCategories.filter((category) => category.text !== e.text);

    setListCategories([{ ...e }, ...items]);
  };

  const handleMouse = (category) => {
    setValues({
      ...values,
      current: category,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = structuredClone(values);
    const category = data.select.text;

    delete data.select;
    delete data.current;

    await create({
      ...data,
      category,
    });

    setValues({
      text: "",
      select: listCategories[0],
      current: null,
      status: "created",
      doneAt: null,
    });
    setOpen(false);
    await getTasks();
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(!open)}>
        <form onSubmit={handleSubmit}>
          <h2>Crear Tarea</h2>
          <div className="my-5">
            <div>
              <input
                type="text"
                placeholder="Escribe tu tarea"
                className="w-full border px-2 py-3 rounded outline-none"
                name="text"
                value={values.text}
                onChange={handleChangeList}
              />
            </div>
            <div className="mt-5">
              <Select
                value={values}
                onChange={handleChangeList}
                onMouseEnter={handleMouse}
                listItems={listCategories}
              />
            </div>
            <div className="mt-5">
              <button className="bg-blue-500 w-full py-3 rounded text-white shadow text-lg uppercase tracking-wide font-semibold">
                Crear tarea
              </button>
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

CreateTask.propTypes = {
  getTasks: PropTypes.func,
};
