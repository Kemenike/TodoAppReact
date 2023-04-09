import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [taskValue, setTask] = useState("");

  useEffect(() => {
    console.log(taskValue);
  }, [taskValue]);

  function handleSubmit (event) {
    event.preventDefault();
    console.log("Submitted");
  }


  return (
    <div className="app">
      <div className="main__container">
        <div className="title__layout">
          <h1 className="todo__title">
            Todo App
          </h1>
        </div>
        <form className="todo__form" onSubmit={handleSubmit}>
          <input className="todo__input" type="text" placeholder='What are we doing today?'
          />
          <input type="submit" value="Add Task" className='todo__submit btn'/>
        </form>
        <div className="todo__container">
        </div>
      </div>
    </div>
  );
}

export default App;
