import React from 'react';
import ToDoListTile from '../../components/ToDoListTile/ToDoListTile';
import { createToDo, toggleComplete } from '../../services/todo';

export default function ToDoListView(tasks, setTasks, newTask, setNewTask) {
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

  return (
    <div>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={handleSubmit}>Add Task</button>
      {tasks.map((task) => (
        <li key={task.id}>
          <input type="checkbox" checked={task.is_complete} onChange={() => handleClick(task)} />
          {task.task}
        </li>
      ))}
    </div>
  );
}
