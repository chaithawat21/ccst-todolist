// import React from 'react'

function Dashboard() {
  return (
    <div className="dashboard">
        <h3>{new Date().toDateString()}</h3>
        <p>24 tasks</p>
    </div>
  )
}

export default Dashboard