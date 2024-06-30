import { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  const addTask = () => {
    setTasklist([...tasklist, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const copy = [...tasklist];
    copy.splice(index, 1);
    setTasklist(copy);
  };

  return (
    <>
      <>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" onClick={addTask}>
          Submit
        </button>
      </>
      <ul>
        {tasklist.map((task, i) => (
          <li key={i}>
            {task} <button onClick={() => deleteTask(i)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
