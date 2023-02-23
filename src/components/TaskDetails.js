// to create dynamic links that does nor relod the whole page - replaces a tag
// To access parameters from url
// Naviagate to redirect
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from "react";


const TaskDetails = () => {
  
    // requesting parmeter
    const params = useParams();
    // Navigation
    const navigate = useNavigate()
    // location
    const {pathname} = useLocation()

    const [task, setTask] = useState([])
  
    // read task function
    useEffect( () => {
        
        // read single task
        const getTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
        
        // Navigate if data not found
        if(res.status === 404) {
            navigate('/')
        }

        const data = await res.json();

        setTask(data)
        }
        getTask()
    })
    

    return (
    <div>
        <h4>{task.text}</h4>
        <p>{task.day}</p>
        <p>Task id: {task.id}</p>
        <p>Path Name: {pathname}</p>
        <Link to='/'>Go Back</Link>
    </div>
  )
}

export default TaskDetails
