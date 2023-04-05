import { React, useRef, useState } from 'react'
import ProfileCard from './ProfileCard'
import MenuBox from './MenuBox';

var match = [];

function addNew(p) {
  //adding this person id to p. candidates;
  match.push(p);
}

function Main() {
  const [user, setUser] = useState([])
  var fetchPromise = fetch("http://localhost:3001/", { method: "GET" })
  fetchPromise
    .then(res => res.json())
    .then(data => {
      setUser(data)
      console.log(data)
  })

  const cardRef = useRef()

  return (
    <div className='main'>
      <MenuBox/>
      <div className='cardBox'>
        {user.map(person => <ProfileCard key={person._id} person = {person} add = {addNew} ref={cardRef}/>)}
        <button className='no' onClick={() => cardRef.current.goLeft()}>✖</button>
        <button className='yes' onClick={() => cardRef.current.goRight()}>❤</button>
      </div>
    </div>
  )
}

export default Main

