import { React, useState } from 'react'
import ProfileCard from './ProfileCard'
import ChatBox from './ChatBox';

//import { per } from './testData';

var match = [];

function addNew(p) {
  match.push(p);
}

function Main() {
  const [user, setUser] = useState([])
  const [curr, setCurr] = useState(user.length - 1)
  const handleYes = () => {
    user[curr].choice = 'yes';
    addNew(user[curr]);
    setCurr(curr-1);
  }
  const handleNo = () => {
    user[curr].choice = 'no';
    setCurr(curr-1);
  }
  function change(input) {
    setCurr(input);
  }
  console.log(match);

  var fetchPromise = fetch("http://localhost:3001/", { method: "GET" })
  fetchPromise
    .then(res => res.json())
    .then(data => {
      setUser(data)
      console.log(data)
    })

  return (
    <div className='main'>
      <ChatBox/>
      <div className='cardBox'>
        {curr.num <= 0 ? alert("hết") /*get more*/ : user.map(person => <ProfileCard key={person._id} person = {person} changeCur = {change} add = {addNew}/>)}
        <button className='no' onClick={handleNo}>✖</button>
        <button className='yes' onClick={handleYes}>❤</button>
      </div>
    </div>
  )
}

export default Main

