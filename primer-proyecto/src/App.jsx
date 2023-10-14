import { useState, useEffect } from "react";
import { CreateTask, TodoList, TodoListCategory } from "./components";
import { categories } from "./core/category";
import { read } from "./services";

export default function App() {
  const [currentCategory, setCurrentCategory] = useState(null);

  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const data = await read(); // {ok: bool, response: []}
    setTasks(data.response);
  };

  useEffect(() => {
    getTasks();
  }, []);

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
      <CreateTask />
    </div>
  );
}
