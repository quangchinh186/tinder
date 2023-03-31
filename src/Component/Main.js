import { React, useState } from 'react'
import ProfileCard from './ProfileCard'
import ChatBox from './ChatBox';

var match = [];

function addNew(p) {
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

  const [curr, setCurr] = useState(user[user.length - 1]._id)
  const handleYes = () => {
    
  }
  const handleNo = () => {
    
  }

  return (
    <div className='main'>
      <ChatBox/>
      <div className='cardBox'>
        {user.map(person => <ProfileCard key={person._id} person = {person} add = {addNew}/>)}
        <button className='no' onClick={handleNo}>✖</button>
        <button className='yes' onClick={handleYes}>❤</button>
      </div>
    </div>
  )
}

export default Main

