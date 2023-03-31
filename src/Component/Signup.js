import React, {useState} from 'react' 
import data from '../Test/users.json'

function Signup() {
  const [account, setAccount] = useState({
    username:"",
    password:"",
    email:""
  })

  const handleChange = (event) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    })
  };

  const handleSubmit = (event) => {
    //request API here...
    data.push(account);
    console.log(data)
    event.preventDefault();
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
                  <input type='password' required/>
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