import React from 'react'
import vid from './media/Background.mp4'
import NavigationBar from './NavigationBar'

function Preview() {
  return (
    <div className='preview'>
      <video autoPlay loop muted>
        <source src={vid} type='video/mp4'/>
      </video>
      <NavigationBar/>
      <div className='title'>
        UETinder
      </div>
    </div>
  )
}

export default Preview