// import React from 'react'

import Dashboard from "../components/Dashboard"
import FormAddTodo from "../components/FormAddTodo"
import TodoContainer from "../components/TodoContainer"
import useFetch from "../hooks/useFetch";

function TodoApp() {
    const [jobs, loading, error, reload] = useFetch("http://localhost:8000/jobs");
    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>Error: {error.message}</h1>;
    }
    return (
        <>
            <h2 className="job">Jobs</h2>
            <div className="todoapp">
                <Dashboard amount={jobs.length}/>
                <FormAddTodo reload={reload} />
                <TodoContainer jobs={jobs} reload={reload} />
            </div>
        </>
    )
}

export default TodoApp