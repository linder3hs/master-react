import { useState } from "react";
import { Modal, TodoList, TodoListCategory } from "./components";
import { categories } from "./core/category";
import { tasks } from "./mock/tasks";

export default function App() {
  const [currentCategory, setCurrentCategory] = useState(null);

  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl">Manage your time well</h1>
      <div className="my-6">
        <h2 className="font-semibold">Categories {currentCategory}</h2>
        <div className="flex mt-3 justify-between">
          {categories.map((category) => (
            <TodoListCategory
              key={category.text}
              icon={category.icon}
              text={category.text}
              setCurrentCategory={setCurrentCategory}
              currentCategory={currentCategory}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <h2 className="font-semibold">You have 10 task for today</h2>
        <button
          onClick={() => setCurrentCategory(null)}
          className="text-sm text-blue-500"
        >
          Clear filter
        </button>
      </div>
      <TodoList tasks={tasks} category={currentCategory} />
      <Modal open={open} onClose={() => setOpen(!open)}>
        <h1>Es un modal</h1>
      </Modal>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-10 right-10 bg-blue-500 text-white p-2 rounded-full w-12 h-12 text-2xl"
      >
        +
      </button>
    </div>
  );
}
