import { useState } from "react"

const AddTask = ({onAdd}) => {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {

    // prevent default behaviour
    e.preventDefault();

    // validation
    if(!text) {
      alert('Please add task');
      return
    }

    // sending the task object with current value to app.js
    onAdd({text, day, reminder})

    // clearing form

    setText('')
    setDay('')
    setReminder(false)

  }

  return (
    <div>

        <form  className="add-form" onSubmit={onSubmit}>

          <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" 
            value={text} onChange={ (e) =>  setText(e.target.value) }/>
          </div>

          <div className="form-control">
            <label>Day & Time</label>
            <input type="text" placeholder="Add Day & Time" 
            value={day} onChange={ (e) =>  setDay(e.target.value) }/>
          </div>

          {/* checkbox */}
          <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox"
            checked = {reminder}
            value={reminder} 
            onChange={ (e) =>  setReminder(e.currentTarget.checked) }
            />
          </div>

          <input className="btn btn-block" type="submit" value='Save Task'/>


        </form>
      
    </div>
  )
}

export default AddTask
