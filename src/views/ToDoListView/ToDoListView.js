import React from 'react';
import { createToDo, deleteToDo, toggleComplete } from '../../services/todo';

export default function ToDoListView({ tasks, setTasks, newTask, setNewTask }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await createToDo(newTask);
    setNewTask('');
    setTasks((prev) => [...prev, resp[0]]);
  };

  const handleClick = async (task) => {
    await toggleComplete(task.id, !task.isComplete);
    setTasks((prevState) =>
      prevState.map((todo) =>
        todo.id === task.id ? { ...task, is_complete: !task.is_complete } : todo
      )
    );
  };

  const handleDelete = async (id) => {
    await deleteToDo(id);
    console.log(id);
    const newTasks = tasks.filter((task) => id !== task.id);
    setTasks(newTasks);
  };

  return (
    <div>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={handleSubmit}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.is_complete} onChange={() => handleClick(task)} />
            {task.task}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
