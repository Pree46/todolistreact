import React from 'react';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Todo = ({task}) => {

    return (
      <div className='Todo'>
        <p>{task.task}</p>
        <div>
          <FontAwesomeIcon icon={faPenToSquare}/>
          <FontAwesomeIcon icon={faTrash}/>
        </div>
      </div>
    );
  
}