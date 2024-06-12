// import React from 'react'

import { useState } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";


function TodoContainer({ jobs, reload }) {
  
  const [editID, setEditID] = useState(-1);
  // const [inputTitle, setInputTitle] = useState(jobs.map((el) => (job.todo))
  // const [checked, setChecked] = useState(job.complete) 
  
  const hdlDelete = async (jobId) => {
    if (!confirm('Confirm delete?')) {
        return
    }

    try {
        await axios.delete(`http://localhost:8000/jobs/${jobId}`);
        reload()
    } catch (error) {
        console.log(error.message);
    }

}
const hdlUpdate = async (jobId, body) => {


  try {
      await axios.put(`http://localhost:8000/jobs/${jobId}`, body);
      reload()
  } catch (error) {
      console.log(error.message);
  }
}
  
  return (
    <>
      <div className="todo-container">
        {jobs.map((el) => (
          <TodoItem 
          key={el.id} 
          job={el} 
          editID={editID} 
          setEditID={setEditID}
          hdlDelete={hdlDelete}
          hdlUpdate={hdlUpdate}
          // inputTitle={inputTitle}
          // setInputTitle={setInputTitle}
          // checked={checked}
          // setChecked={setChecked}
          />
        ))}
      </div>
    </>
  );
}

export default TodoContainer;
