import './App.css';
import Task from './Task';
import React, { useEffect, useState, useRef } from 'react';

function App() {

  const [taskValue, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const inputField = useRef();

  useEffect(() => {
  }, [taskList])

  function handleSubmit(event) {
    event.preventDefault();
    if (taskValue !== "") {
      setTaskList(originalArr => [...originalArr, taskValue])
    }
    setTask("");
    inputField.current.value = "";
  }

  function testFunction(indx) {
    const tempArr = taskList;
    tempArr.splice(indx, 1);
    console.log(tempArr);
    setTaskList([...tempArr]);
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
          <input
            className="todo__input"
            type="text"
            ref={inputField}
            placeholder='What are we doing today?'
            onChange={e => setTask(e.target.value)}
          />
          <input
            type="submit"
            value="Add Task"
            className='todo__submit btn' />
        </form>
        <div className="todo__container">
          {
            taskList.map((element, indx) => <Task key={indx} name={element} id={indx} btn__function={testFunction} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;

