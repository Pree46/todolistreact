import React, { useState } from 'react';

export const EditTodoForm = ({EditTodo, task}) => {
  const [value, setValue] = useState("")
  const handleSubmit = e => {
    e.preventDefault();
    
    EditTodo(value, task.id);


    setValue("")
  }

    return (
      <form className='ToDoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Edit your Task...'
        onChange={(e)=> setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Done</button>
      </form>
    );
  
}