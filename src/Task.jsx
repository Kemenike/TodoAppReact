import React, { useState }from 'react'
import "./Task.css";

function Task({ name, btn__function, id}) {

    const [isDone, setDoneState] = useState(false);

    
    function toggleState () {
        setDoneState(done => !done);
    }

    return (
        <div className={`task__container ${isDone ? 'done' : ""}`}>
            <h1 className="task__title">{name}</h1>
            <div className="task__btn__container">
                <button className='task__button_done task__btn' onClick={toggleState}>Done</button>
                <button className='task__button_del task__btn' onClick={() => btn__function(id)}>Delete Task</button>
            </div>
        </div>
    )
}

export default Task