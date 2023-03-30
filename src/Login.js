import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';

const admin = {
  username : "admin",
  password : "admin"
}

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
    if(JSON.stringify(account) === JSON.stringify(admin)){
      navigate('/m')
    }
    event.preventDefault();
  };

  return (
    <React.Fragment>
        <div className='center'>
          <a href='/'>
            <button className='closebtn'>✖</button>
          </a>
          <h1>Login</h1>
          <form method='post'>
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
            
            <div className='pass'>Forgot Password?</div>
            
            <button type='submit' onClick={handleSubmit}>Login</button>
            
            <div className='signup'>
              Don't have a account?<a href="/signup"> Sign up</a>
            </div>
          </form>
        </div>
    </React.Fragment>
  )
}

export default Login
