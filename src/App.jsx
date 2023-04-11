import './App.css';
import Task from './Task';
import React, { useEffect, useState, useRef } from 'react';

function App() {

  const [taskValue, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const inputField = useRef();

  useEffect(() => {
    console.log(taskList);
  }, [taskList])

  function handleSubmit(event) {
    event.preventDefault();
    if (taskValue !== "") {
      setTaskList(originalArr => [...originalArr,
      {
        key: `${crypto.randomUUID()}`,
        name: `${taskValue}`,
      }
      ])
      setTask("");
      inputField.current.value = "";
    }
  }

  function deleteComponenet(key) {
    setTaskList(tasks =>
      tasks.filter(task => {
        return task.key !== key
      })
    )
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
            maxlength="50"
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
            taskList.map((element) => <Task key={element.key} id={element.key}name={element.name} btn__function={deleteComponenet} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;

