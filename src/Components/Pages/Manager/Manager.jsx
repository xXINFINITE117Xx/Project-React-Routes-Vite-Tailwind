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
        <h1 className="m-2 text-5xl font-bold text-center text-blue-700">
          Task List
        </h1>
        <div className="flex flex-col items-center justify-center p-10 m-8 w-100 h-280 bg-gradient-to-b from-violet-700 via-sky-600 to-red-700 rounded-xl">
          <input
            type="text"
            placeholder="Name of the task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="p-2 m-2 font-bold rounded-xl"
          />
          <input
            type="text"
            placeholder="Description of the task"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="p-2 m-2 font-bold rounded-xl"
          />
          <button
            onClick={handleAddTask}
            className="p-4 mt-5 font-semibold text-white bg-blue-500 rounded-xl hover:bg-red-700"
          >
            Add Task
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
