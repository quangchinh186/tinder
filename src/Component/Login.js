import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUsers } from './Back/Fetch.js';

function Login() {
  let navigate = useNavigate();
  const [account, setAccount] = useState({
    username:"",
    password:"",
  })

  const handleChange = (event) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    })
  };

  const handleSubmit = (event) => {
    //request API here...
    const usersFilter = { 'account.username': account.username, 'account.password': account.password }
    getUsers(usersFilter, (users) => {
      if (users.length === 0) {
        window.alert("Wrong username or password!!1!")
      } else {
        sessionStorage.setItem('userId', users[0]._id);
        navigate('/m')
      }
    })
    event.preventDefault();
  };

  return (
    <React.Fragment>
        <div className='center'>
          <a href='/'>
            <button className='closebtn'>✖</button>
          </a>
          <h1>Login</h1>
          <form>
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
            <button type='submit' onClick={handleSubmit}>Login</button>
            <a href='/auth' className='pass'>Forgot Password?</a>
            <div className='signup'>
              Don't have a account?<a href="/signup"> Sign up</a>
            </div>
          </form>
        </div>
    </React.Fragment>
  )
}

export default Login
