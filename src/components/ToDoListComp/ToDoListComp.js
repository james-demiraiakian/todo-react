import React, { useEffect, useState } from 'react';
import { createToDo, fetchToDos } from '../../services/todo';
import ToDoListView from '../../views/ToDoListView/ToDoListView';

export default function ToDoListComp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchToDos();
      setTasks(resp);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        <ToDoListView tasks={tasks} setTasks={setTasks} newTask={newTask} setNewTask={setNewTask} />
      </ul>
    </div>
  );
}
