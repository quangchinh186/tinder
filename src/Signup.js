import React, {useState} from 'react' 
import { motion } from 'framer-motion';

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
    console.log(account);
    event.preventDefault();
  };

    return (
        <React.Fragment>
            <motion.div className='center' drag>
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
            </motion.div>
        </React.Fragment>
    )
}

export default Signup