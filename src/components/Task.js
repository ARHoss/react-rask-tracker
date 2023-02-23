import {FaTimes} from 'react-icons/fa'
// to create dynamic links that does nor relod the whole page - replaces a tag
import { Link } from 'react-router-dom'

const Task = ({task, onDelete, onToggle}) => {
  return (
    // Double click toggle
    <div className={`task ${task.reminder?'reminder':''}`}   onDoubleClick = {() =>  onToggle(task.id)} > 
      <h3>
        {task.text} 
        <FaTimes 
            style={{color:'red', cursor:'pointer'}}
            // Delete Tasks is called on click
            onClick = { () => onDelete(task.id) }
        />
      </h3>
      <p>{task.day}</p>
      <Link to={`/task/${task.id}`}>View Details</Link>
    </div>
  )
}

export default Task
