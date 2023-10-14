import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import {v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodo';
uuidv4();
export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([])
    const addTodo = todo =>{
        setTodos([...todos, {id: uuidv4(), task: todo,
        completed: false, isEditing: false}])
        console.log(todos)
    }
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ?{...todo, completed: !todo.completed}: todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const EditTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
    }
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
    }
    return (
        <section>
            <div className='TodoWrapper'>
            
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm EditTodo={editTask} task={todo}/>
                ) : (
                    <Todo task={todo} key={index} toggleComplete={toggleComplete} 
                deleteTodo = {deleteTodo} EditTodo={EditTodo}/>)
            ))}
            
            </div>
            <div className='TodoWrapper'>
            <TodoForm addTodo={addTodo} />
            </div>
        </section>
      );
      
}