import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todList, setTodoList] = useState([]); 

  useEffect(() => {
    axios.get()
  })


  return (
    <>
      <div className="task-div">
        <input type="text" name="todo" id="todo" />
        <button type="button">Add Task</button>
      </div>
    </>
  )
}

export default App
