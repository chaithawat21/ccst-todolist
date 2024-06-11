// import React from 'react'

import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoContainer({ jobs, reload }) {
  const [editID, setEditID] = useState(-1);

  return (
    <>
      <div className="todo-container">
        {jobs.map((el) => (
          <TodoItem key={el.id} job={el} reload={reload} editID={editID} setEditID={setEditID}/>
        ))}
      </div>
    </>
  );
}

export default TodoContainer;
