import { useState } from "react";

export const Manager = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    const newTask = { name: taskName, description: taskDescription };
    setTasks([...tasks, newTask]);
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <>
      <div>
        <h1 className="m-2 text-5xl font-bold text-center text-teal-500">
          Lista tareas
        </h1>
        <div className="flex flex-col items-center justify-center p-10 m-8 w-100 h-280 bg-gradient-to-b from-teal-600 via-emerald-500 to-teal-600 rounded-xl">
          <input
            type="text"
            placeholder="Nombre de la tarea"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="p-2 m-2 font-bold rounded-xl"
          />
          <input
            type="text"
            placeholder="Descripción de la tarea"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="p-2 m-2 font-bold rounded-xl"
          />
          <button
            onClick={handleAddTask}
            className="p-4 font-semibold text-white bg-blue-500 rounded-xl hover:bg-lime-600"
          >
            Agregar Tarea
          </button>
          <div className="mt-4">
            {tasks.map((task, index) => (
              <div key={index} className="p-2 m-2 bg-white rounded shadow">
                <h3 className="font-bold">{task.name}</h3>
                <p>{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};