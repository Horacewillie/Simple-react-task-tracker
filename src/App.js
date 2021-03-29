import React from "react"
import {useState} from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

const App = (props) => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
       {
           id: 1,
           text: "Doctors Appointment",
           day: "Feb 5th at 2:30pm",
           reminder: true,
       },
       {
           id: 2,
           text: "Meeting at School",
           day: "Feb 6th at 1:30pm",
           reminder: true
       },
       {
           id:3,
           text: "Food Shopping",
           day: "Feb 5th at 2:30pm",
           reminder: false
       },
   ])
   //AddTask
   const addTask = (task) =>{
     const id = Math.floor(Math.random() * 1000)
     const newTask = {id, ...task} 
     setTasks([...tasks,newTask])
   }

   // Delete Task
    const deleteTask = (id) =>{
      setTasks(tasks.filter((task) => task.id !== id ))
    }
    
    
    //Toggle Reminder
    //spread the ppties of task, and set the reminder ppty
    //to its opposite
    // const toggleReminder = (id) =>{
    //   setTasks(tasks.map((task) => task.id === id
    //   ?{...task, reminder: !reminder} : task))
    // }
    const toggleReminder = (id) =>{
      const changeReminder = tasks.map((task)=>
      {
        if(task.id === id)
        {
          task.reminder = !task.reminder
          return task
        }
        return task
      })
      setTasks(changeReminder)
    }

  return (
    <div className = "container">
      <Header onToggleAdd = {() => 
        setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask ? <AddTask onAdd = {addTask}/> : null}
      {tasks.length > 0 ?
      <Tasks tasks = {tasks} 
      onDelete = {deleteTask} onToggle={toggleReminder}/> 
      : ("No Task To Show")}
    </div>
  )
}

export default App

