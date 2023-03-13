import { React, useState } from 'react'
import ProfileCard from './ProfileCard'

function Main() {
  const [personID, setPersonID] = useState(0);
  const handleChange = () => {
    setPersonID(personID + 1)
  }
  return (
    <div>
    <ProfileCard id ={personID}/>
    <button className='no' onClick={handleChange}>〤</button>
    <button className='yes' onClick={handleChange}>✓</button>
    </div>
  )
}

export default Main