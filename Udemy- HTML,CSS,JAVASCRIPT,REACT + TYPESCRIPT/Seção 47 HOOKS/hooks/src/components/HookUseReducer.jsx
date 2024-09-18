import { useReducer, useState } from "react";

const HookUseReducer = () => {
  // 1 - começando com o useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // 2 - avançando no useReducer

  const inititalTask = [
    { id: 1, text: "Tarefa 1" },
    { id: 2, text: "Tarefa 2" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");

        return [...state, newTask];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTask] = useReducer(taskReducer, inititalTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTask({ type: "ADD" });
  };
  const removeTask = (id) => {
    dispatchTask({ type: "DELETE", id });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número:{number}</p>
      <button onClick={dispatch}>Alterar número</button>
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onDoubleClick={()=> removeTask(task.id)}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookUseReducer;
