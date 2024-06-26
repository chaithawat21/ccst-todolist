// import React from 'react'
import axios from "axios"
import { useState} from "react"
import useAuth from "../hooks/useAuth"

function Login() {
  
    const { setUser } = useAuth()
    // const navigate = useNavigate()
    const [input, setInput] = useState({
        name: '',
        password: '',
    })

    const hdlChange = (e) => {
        setInput(prv => ({
            ...prv,
            [e.target.name]: e.target.value
        }))
    }

    const hdlSubmit = async (e) => {
        e.preventDefault()
        if (!input.name.trim() || !input.password.trim())
            return alert('Please fill all input')
       try {
        // login in
        // check username that input in database
        const res = await axios.get(`http://localhost:8000/users?name=${input.name}`)
        if(!res.data.length) {
            return alert('Invalid Login')
        }
        const foundUser = res.data[0]
        // check password is correct 
        if (foundUser.password !== input.password) {
            return alert('Invalid password')
        }
        // keep user login in AuthContext:user / localStorage
        localStorage.setItem('user', JSON.stringify(foundUser))
        setUser(foundUser)
        alert('Login Successful')
        console.log(res.data.length);

       }catch(error) {
        console.log(error.message)
       }
    
    }


  return (
     <div>
    <h1>Login form</h1>
    <form className='form login' onSubmit={hdlSubmit}>
        <label>Username :
            <input type="text"
                name='name'
                value={input.name}
                onChange={hdlChange}
            />
        </label>
        <label>Password :
            <input type="text"
                name='password'
                value={input.password}
                onChange={hdlChange}
            />
        </label>
        <input type="submit" value='Login' />


    </form>
    
</div>

  )
}

export default Login