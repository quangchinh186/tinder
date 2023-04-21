import React, {useState} from 'react'
import data from '../Test/users.json'
import {addUser} from './Back/Fetch';
import { useNavigate } from 'react-router-dom';

function Signup() {
  let navigate = useNavigate()
  const [account, setAccount] = useState({
    username:"",
    password:"",
    email:""
  })

  const [passwdRepeat, setPasswdRepeat] = useState("")

  const handleChange = (event) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    })
  };

  const handleSubmit = (event) => {
    if (account.password !== passwdRepeat) {
      window.alert("Different passwords!!1!")
    } else {
      console.log(account)
      addUser(account, (result) => {
        if (result === 'Username taken!!1!') {
          window.alert(result)
        } else {
          localStorage.setItem('userId', result);
          navigate("/signup/newProfile")
        }
      })
      event.preventDefault();
    }
  };

    return (
        <React.Fragment>
            <div className='center'>
                <a href='/'>
                    <button className='closebtn'>✖</button>
                </a>
                <h1>Sign up</h1>
                <form className='signup'>

                <div className='txt_field'>
                  <input 
                    type='text' 
                    name='username'
                    value={account.username}
                    onChange={handleChange}
                    required/>
                  <label>Username</label>
                </div>

                <div className='txt_field'>
                  <input 
                    type='password'
                    name='password'
                    value={account.password}
                    onChange={handleChange}
                    required/>
                  <label>Password</label>
                </div>

                <div className='txt_field'>
                  <input
                    type='password'
                    name='passwdRepeat'
                    value={passwdRepeat}
                    onChange={(event) => {
                      setPasswdRepeat(event.target.value)
                    }}
                    required
                  />
                  <label>Retype password</label>
                </div>

                <div className='txt_field'>
                  <input 
                    type='text'
                    name='email'
                    value={account.email}
                    onChange={handleChange}
                    required/>
                  <label>Email</label>
                </div>

                <button className='regist' type='submit' onClick={handleSubmit}>Sign Up</button>
                <div className='signup'>
                  Already have an account?<a href="/login"> Login</a>
                </div>
              </form>
            </div>
        </React.Fragment>
    )
}

export default Signup
