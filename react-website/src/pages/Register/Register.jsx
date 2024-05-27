import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Register.css'

const Register = () => {
  return (
    <div className='register-section'>
      <h2 className='title'><FontAwesomeIcon icon="fa-solid fa-user-plus" /> Register</h2>
      <input type="text" name='name' placeholder='Full name...' />
      <input type="text" name='email' placeholder='Email...' />
      <input type="password" name='password' placeholder='Password...' />
      <input type="password" name='password_confirmation' placeholder='Confirm password...' />
      <button><FontAwesomeIcon icon="fa-solid fa-user-plus" /> Register</button>
    </div>
  )
}

export default Register