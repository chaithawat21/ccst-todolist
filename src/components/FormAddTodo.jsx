// import React from 'react'

import { useEffect, useState } from "react"
import axios from "axios"
import useAuth from "../hooks/useAuth"

function FormAddTodo({reload}) {
    const [title, setTitle] = useState('')
    const { user } = useAuth()

    const hdlSubmit = async e => {
        e.preventDefault()
        if(title.trim().length < 3) {
            return alert('todo must have at least 3 characters')
          }
        try {
            const data = {
                todo: title,
                complete: false,
                userId: user.id
            }
            await axios.post('http://localhost:8000/jobs', data)
           reload()
            // location.reload('/')
            setTitle('') 
        } catch (error) {
            console.log(error.message);
        }

    }

   

  return (
    <form className="form-addtodo" onSubmit={hdlSubmit}>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button className="add">Add</button>

    </form>
  )
}

export default FormAddTodo