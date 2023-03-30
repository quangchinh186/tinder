import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export function Authorize() {
  let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const handleChange = (event) => {
        setEmail(event.value)
    }
    const handleSubmit = () => {
        navigate('/resPass');
    }
    return (
        <div className='center'>
          <a href='/'>
            <button className='closebtn'>✖</button>
          </a>
          <h1>Get Password</h1>
          <form method='post'>
            <div className='txt_field'>
              <input 
              type='text' 
              name='email'
              value={email}
              onChange={handleChange}
              required/>
              <label>Your Email</label>
            </div>
            
            <button type='submit' onClick={handleSubmit}>Get OTP code</button>
          </form>
        </div>
    )
}

export function GetPass() {
    let navigate = useNavigate();
    const [otp, setOtp] = useState('')
    const handleChange = (event) => {
        setOtp(event.target.value);
    }
    const handleSubmit = () => {
        navigate('/login')
    }
    return (
        <div className='center'>
          <a href='/'>
            <button className='closebtn'>✖</button>
          </a>
          <h1>OTP</h1>
          <form method='post'>
            <div className='txt_field'>
              <input 
              type='text' 
              name='otp'
              value={otp}
              onChange={handleChange}
              required/>
              <label>OTP Code</label>
            </div>
            
            <button type='submit' onClick={handleSubmit}>Get Password</button>
          </form>
        </div>
    )
}

