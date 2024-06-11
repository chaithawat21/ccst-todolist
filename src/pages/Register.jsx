import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        name: '',
        password: '',
        confirmPassword: '',
        email: ''
    })
    const hdlChange = (e) => {
        setInput(prv => ({
            ...prv,
            [e.target.name]: e.target.value
        }))
    }
    const hdlSubmit = async (e) => {
        e.preventDefault()
        // validation
        if (input.name === '' || input.password === '' || input.email === '') {
            return alert('Please fill empty form')
        }
        if (input.password !== input.confirmPassword) {
            return alert("Please check confirm password")
        }
        
        try {
            const check = await axios.get(`http://localhost:8000/users?name=${input.name}`)
            if (check.data.length > 0) {
                return alert(`${input.name} has already register`);

            }
            const data = {
                name: input.name,
                password: input.password,
                email: input.email,
            }
            const res = await axios.post('http://localhost:8000/users', data)
            console.log(res);
            alert('Registration successful');
            navigate('/')
        } catch (error) {
            console.log(error.message);
            alert('An error occurred during registration');
        }
    }
    return (
        <div>
            <h1>Register form</h1>
            <form className='form register' onSubmit={hdlSubmit}>
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
                <label>Confirm Password :
                    <input type="text"
                        name='confirmPassword'
                        value={input.confirmPassword}
                        onChange={hdlChange}
                    />
                </label>
                <label>E-mail :
                    <input type="email"
                        name='email'
                        value={input.email}
                        onChange={hdlChange}
                    />
                </label>
                <input type="submit" value='Register' />

            </form>
        </div>
    )
}

export default Register