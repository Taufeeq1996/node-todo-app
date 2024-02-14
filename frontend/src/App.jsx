import { useEffect, useState } from 'react';
import React from 'react'; 
import axios from 'axios';
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);  

const handleClick = () => {
    axios.post('http://localhost:3000/api/task',{title:todo})
    .then(res => {
      alert('data sent successfully')
      setTodo("")
      setTodoList([...todoList, res.data])
    })
    .catch(err => alert('Unfortunately, data could not be sent'))
  }
  
const fetchTask = () => {
  axios.get('http://localhost:3000/api/task')
  .then((res) => {
    setTodoList(res.data)
    // console.log(res.data)
  })
  .catch(err => {
    console.log(err);
  })
}
useEffect(()=>{
  fetchTask()
},[])
  // const showTask = () => {
  //   axios.get('http://localhost:3000/api/task') 
  //   .then(res => {
  //     setTodoList(...todoList, res.data.title);
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }


  return (
    <>
      <div className="task-div">
        <input type="text" name="todo" id="todo" onChange={(event) => setTodo(event.target.value)} value={todo}/>
        <button type="button" onClick={handleClick}>Add Task</button>
        <button type="submit" onClick={fetchTask}>Display Task</button>
      </div>
      {
        todoList.map((task, index) =>{
          return <div className="tasks" key={index}>
        <h2 id="task-heading">{task.title}</h2>
      </div>
        }
        )
      }
    </>
  )
}

export default App