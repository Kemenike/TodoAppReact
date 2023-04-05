import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [taskValue, setTask] = useState("");

  useEffect(() => {
    console.log(taskValue);
  }, [taskValue]);



  return (
    <div className="app">
      <div className="main__container">
        <div className="title__layout">
          <h1 className="todo__title">
            Todo App
          </h1>
        </div>
        <form action="todo__input form">
          <input className="todo__input" type="text" placeholder='What are we doing today?'
            onSubmit={setTask} />
          <input type="submit" value="Add Task" className='btn'/>
        </form>
        <div className="todo__container">
        </div>
      </div>
    </div>
  );
}

export default App;
