import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
        {
            tasks.map( (task) => {
                // {/* Delete Tasks && onToggle passed to Tasks */}
                return  <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            })       
        }
    </>
  )
    
}

export default Tasks
