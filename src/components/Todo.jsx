import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task,toggleComplete,deleteTodo}) => {
  return (
    <div className={`Todo ${task.completed ? 'completed' : ''}`}>
      <p className={` ${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faCircleCheck} className='done-icon'  onClick={()=> toggleComplete(task.id)}  />
        <FontAwesomeIcon icon={faTrash} className='delete-icon' onClick={()=> deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

