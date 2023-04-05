import { React, useState } from 'react'
import ProfileCard from './ProfileCard'
<<<<<<< Updated upstream:src/Main.js
import ChatBox from './ChatBox';
import { per } from './testData';
=======
import MenuBox from './MenuBox';
>>>>>>> Stashed changes:src/Component/Main.js

var match = [];

function addNew(p) {
  match.push(p);
}

function Main() {
  const [curr, setCurr] = useState(per.length - 1)
  const handleYes = () => {
    per[curr].choice = 'yes';
    addNew(per[curr]);
    setCurr(curr-1);
  }
  const handleNo = () => {
    per[curr].choice = 'no';
    setCurr(curr-1);
  }
  function change(input) {
    setCurr(input);
  }
  console.log(match);
  
  return (
    <div className='main'>
      <MenuBox props={user}/>
      <div className='cardBox'>
        {curr.num <= 0 ? alert("hết") /*get more*/ : per.map(person => <ProfileCard key={person.id} person = {person} changeCur = {change} add = {addNew}/>)}
        <button className='no' onClick={handleNo}>✖</button>
        <button className='yes' onClick={handleYes}>❤</button>
      </div>
    </div>
  )
}

export default Main

