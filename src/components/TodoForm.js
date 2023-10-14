import React from 'react';

export const TodoForm = () => {

    return (
      <form className='ToDoForm'>
        <input type='text' className='todo-input' placeholder='Type your Task here...'/>
        <button type='submit' className='todo-btn'>+</button>
      </form>
    );
  
}

