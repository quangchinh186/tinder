import React from 'react'
import logo from './media/logoUET.png'

function NavigationBar() {
    return (
      <React.Fragment>
          <nav className='nav'>
            <a href='/'>
              <img src={logo} alt='logo' className='logo'></img>
            </a>
            <ul>
              <li><a href='/login'>Login</a></li>
              <li><a href='/signup'>Sign up</a></li>
            </ul>
          </nav>      
      </React.Fragment>
    )
}

export default NavigationBar