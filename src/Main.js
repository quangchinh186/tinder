import { React, useState } from 'react'
import ProfileCard from './ProfileCard'
import ChatBox from './ChatBox';
import './App.css';

/*var per = [
  {id : 0, fullName : 'A', choice : 'empty', seen: false}, 
  {id : 1, fullName : 'B', choice : 'empty', seen: false},
  {id : 2, fullName : 'C', choice : 'empty', seen: false},
  {id : 3, fullName : 'D', choice : 'empty', seen: false},
  {id : 4, fullName : 'E', choice : 'empty', seen: false},
  {id : 5, fullName : 'F', choice : 'empty', seen: false},
  {id : 6, fullName : 'G', choice : 'empty', seen: false},
  {id : 7, fullName : 'H', choice : 'empty', seen: false},
  {id : 8, fullName : 'I', choice : 'empty', seen: false},
  {id : 9, fullName : 'J', choice : 'empty', seen: false},]*/


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

