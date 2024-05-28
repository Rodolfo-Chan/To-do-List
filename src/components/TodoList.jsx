import React, { useState, useEffect } from 'react';
import { MdLibraryAdd } from "react-icons/md";
import img from '../assets/img/mecanico2.png';

import Todo from '../components/Todo';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  // Cargar tareas desde localStorage al iniciar el componente
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (task) {
      const newTask = {
        text: task,
        createdAt: new Date().toLocaleString()
      };
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = e.target.elements.task.value;
    addTask(newTask);
    e.target.elements.task.value = '';
  };

  return (
    <div>
      <div className='img'> <img src={img} alt="Mi imagen" /></div>
      <h1>To-do List</h1>
      <form onSubmit={handleAddTask}>
        <input type="text" name="task" placeholder="Nueva tarea" />
        <button type="submit"><MdLibraryAdd /></button>
      </form>
      <div className='card'>
        <h2>Tus tareas</h2>
        <p>Total: {tasks.length}</p>
        {tasks.map((task, index) => (
          <Todo key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
