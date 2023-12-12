import React, { useState } from 'react'
import './Login.css'
const Login = (props) => {

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log('handle submit');
        props.login(true)
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

  return (
    <div className='login'>
        <div className='container'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className='form'>
            <div>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username"/><br/>
            </div>
            <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password"/><br/>
            </div>
            <input type="submit" value="Submit"className='submit'/>
        </form>
        </div>
    </div>
  )
}

export default Login