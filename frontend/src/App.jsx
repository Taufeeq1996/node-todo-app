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
    })
    .catch(err => alert('Unfortunately, data could not be sent'))

  }
  
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
        <input type="text" name="todo" id="todo" onChange={(event) => setTodo(event.target.value)}/>
        <button type="button" onClick={handleClick}>Add Task</button>
      </div>
      {
        todoList.map(task => {
          <div className="tasks">
            <h2>{task}</h2>
          </div>
        })
      }
    </>
  )
}

export default App
