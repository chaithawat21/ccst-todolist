// import React from 'react'

import Dashboard from "../components/Dashboard"
import FormAddTodo from "../components/FormAddTodo"
import TodoContainer from "../components/TodoContainer"
import useFetch from "../hooks/useFetch";
import useAuth from "../hooks/useAuth";

function TodoApp() {
    const [jobs, loading, error, reload] = useFetch("http://localhost:8000/jobs");
    const { user,setUser } = useAuth();
    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>Error: {error.message}</h1>;
    }
    const userJobs = jobs.filter(jobs => jobs.userId === user.id);
    console.log(userJobs)
    return (
        
        <>
            <h2 className="job">Jobs</h2>
            <div className="todoapp">
                <Dashboard amount={userJobs.length}/>
                <FormAddTodo reload={reload} />
                <TodoContainer jobs={userJobs} reload={reload} />
            </div>
        </>
    )
}

export default TodoApp