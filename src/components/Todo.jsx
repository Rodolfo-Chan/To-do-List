// src/components/Todo.jsx
import React from 'react';
import { MdAutoDelete } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";


const Todo = ({ task, onDelete }) => {
  return (
    <div className='card'>
      <span className='activity'>{task.text}</span>
      <span className='date'><FaCalendarCheck/>
        {task.createdAt}</span>
      <button onClick={onDelete}><MdAutoDelete /></button>
    </div>
  );
};

export default Todo;
