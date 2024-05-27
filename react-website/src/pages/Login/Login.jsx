import React from 'react'
import './Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  return (
    <div className='login-section'>
      <h2 className='title'><FontAwesomeIcon icon="fa-solid fa-right-to-bracket" /> Login</h2>
      <input type="text" name='email' placeholder='Email...' />
      <input type="password" name='password' placeholder='Password...' />
      <button><FontAwesomeIcon icon="fa-solid fa-right-to-bracket" /> Login</button>
    </div>
  )
}

export default Login