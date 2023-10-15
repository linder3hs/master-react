import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { read } from "../../services";

export default function Detail() {
  const { id } = useParams();

  const [task, setTask] = useState(null);

  const getTask = async () => {
    const { response } = await read(id);
    setTask(response);
  };

  useEffect(() => {
    getTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <>
        {task ? (
          <>
            <h1>Tarea: {task.text}</h1>
          </>
        ) : (
          <>
            <p>La tarea no fue encontrada</p>
          </>
        )}
      </>
    </>
  );
}
