import React, { useState } from 'react';

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")
  const handleSubmit = e => {
    e.preventDefault();
    
    addTodo(value);


    setValue("")
  }

    return (
      <form className='ToDoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Type your Task here...'
        onChange={(e)=> setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>+</button>
      </form>
    );
  
}

