import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  
  const [title, setTitle] = useState("");
  const [desctiption, setDescription] = useState("");
  const {createTask} =  useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      desctiption,
    });
    setTitle('')
    setDescription('')
  };

  return (
<div className="max-w-md mx-auto">
<form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
  <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        className="bg-slate-300 p-3 w-full mb-2"
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        className="bg-slate-300 p-3 w-full mb-2"
        value={desctiption}
      ></textarea>
      <button
      className="bg-indigo-500 px-3 py-1 text-white"
      >Guardar</button>
    </form>
</div>
  );
}

export default TaskForm;

//https://www.youtube.com/watch?v=rLoWMU4L_qE&t=12621s   3:42
