import React, { useEffect, useState } from 'react';
import { fetchToDos } from '../../services/todo';
import ToDoListView from '../../views/ToDoListView/ToDoListView';

export default function ToDoListComp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchToDos();
      setTasks(resp);
    };
    setLoading(false);
    fetchData();
  }, [loading]);

  if (loading) return <div>LOADING</div>;

  return (
    <div>
      <ToDoListView tasks={tasks} setTasks={setTasks} newTask={newTask} setNewTask={setNewTask} />
    </div>
  );
}
