// For class base components
// import React from "react";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
import TaskDetails from "./components/TaskDetails";
// Adding Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Component
function App() {
  // State
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  
  //API requests

  // read request to server
  const getAllTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data
  }

  // read single task
  const getTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data
  }

  // create request
  const addTaskToServer = async(task) => {

    // Add request to server
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    return data;

  }

  // Delete request
  const deleteRequestToServer = async(id) => {
    // Deleting from server
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'Delete'
    })

    const data = await res.json()

    return data
  }

  // update request
  const updateRequestToServer = async(id, updTask) => {
    
    // Updating request to server
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    return data
  }

  // Controllers

  // read task function
  useEffect( () => {
    const getTasks = async () => {
      // Requesting task from server
      const tasksFromServer = await getAllTasks()
      // settings the global tasks value
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Add Task function
  const addTask = async(task) => {

    // Add request to server
    const taskFromServer = await addTaskToServer(task);
    
    // adding task to the main tasks object
    setTasks([...tasks, taskFromServer]);
  }

  // Delete Tasks function
  const deleteTask = async(id) => {

    // Deleting from server
    await deleteRequestToServer(id);

    // setTasks is used to change state
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Update task function - Toggle
  const toggleReminder = async(id) => {

    // Getting single task
    const taskToToggle = await getTask(id);
    // Creating the new tasks variable
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    // Updating task on server
    const data = await updateRequestToServer(id,updTask)

    // setTasks is used to change state
    setTasks(tasks.map(task => task.id===id? {...task, reminder:data.reminder} : task))
  }

  // Toggle
  const toggleAddButton = () => {
    // setShowAddTask is used to change state
    setShowAddTask( showAddTask => showAddTask = !showAddTask )
  }


  // global return app
  return (
    // adding router
    <Router>
      <div className="container">
        {/* Header Component */}
        <Header title={'Task Tracker'} onAdd ={toggleAddButton} showAdd={showAddTask}/>
        {/* Adding routes */}
        
        <Routes>
          {/* route = / */}
          <Route 
            path='/'
            element={
              <>
                {/* Add Task */}
                {showAddTask && <AddTask onAdd = {addTask} />}
                
                {/* Task Component */}{/* Delete Tasks passed to Tasks */}
                {
                  tasks.length?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />:'No tasks to show'
                }
              
              </>
            }
          />
          {/* route = /task/:id */}
          <Route 
            path='/task/:id'
            element={
              <TaskDetails />
            }
          />

          {/* route = /about */}
          <Route
            path='/about'
            element={
              <>
                <About />
              </>
            }
          />
            
        </Routes>

        <Footer />
      
      </div>
    </Router>
  );
}

// Using class
// class App extends React.Component{
  
//   render(){
//     return (
//       <div className="container">
//         <Header />
//       </div>
      
//     );
//   }
    
// }

export default App;
