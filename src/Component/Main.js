import { React, useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'
import MenuBox from './MenuBox';

function addNew(like) {
  //them minh vao array candidates cua "like"
  //neu minh nam trong potentialMatchesId thi them vao [] matches cua ca 2
}

function Main() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    //viet api lay users o day
    var fetchPromise = fetch("http://localhost:3001/", { method: "GET" })
    fetchPromise
    .then(res => res.json())
    .then(data => {
      setUser(data);
    })
  },[])
  console.log(user)

  return (
    <div className='main'>
      <MenuBox/>
      <div className='swipe-container'>
        <div className='card-container'>
          {user.map(person => <ProfileCard key={person._id} person = {person} add = {addNew}/>)}
          <button className='no' >✖</button>
          <button className='yes'>❤</button>
        </div>
      </div>
    </div>
  )
}

export default Main

