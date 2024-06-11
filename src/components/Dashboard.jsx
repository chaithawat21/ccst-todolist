// import React from 'react'



function Dashboard({amount}) {
  return (
    <div className="dashboard">
        <h3>{new Date().toDateString()}</h3>
        <p>{amount} tasks</p>
    </div>
  )
}

export default Dashboard