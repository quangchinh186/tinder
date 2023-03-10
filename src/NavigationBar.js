import React from 'react'

function NavigationBar() {
    return (
      <React.Fragment>
          <nav>
            <div className='title'>Logo</div>
            <ul>
              <li><a href='/login'>Login</a></li>
              <li><a href='/signup'>Sign up</a></li>
            </ul>
          </nav>      
      </React.Fragment>
    )
}

export default NavigationBar