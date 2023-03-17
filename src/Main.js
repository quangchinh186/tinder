import { React, useState } from 'react'
import ProfileCard from './ProfileCard'
import './App.css';

var per = [
  {id : -1},
  {id : 0, fullName : 'A', choice : 'empty', seen: false}, 
  {id : 1, fullName : 'B', choice : 'empty', seen: false},
  {id : 2, fullName : 'C', choice : 'empty', seen: false},
  {id : 3, fullName : 'D', choice : 'empty', seen: false},
  {id : 4, fullName : 'E', choice : 'empty', seen: false},
  {id : 5, fullName : 'F', choice : 'empty', seen: false},
  {id : 6, fullName : 'G', choice : 'empty', seen: false},
  {id : 7, fullName : 'H', choice : 'empty', seen: false},
  {id : 8, fullName : 'I', choice : 'empty', seen: false},
  {id : 9, fullName : 'J', choice : 'empty', seen: false},]

var match = [];
function Main() {
  const [curr, setCurr] = useState(per.length-1);
  const handleYes = () => {
    per[curr].choice = 'yes'
    match.push(per[curr].id);
    setCurr(Math.max(curr-1, 0));
  }
  const handleNo = () => {
    per[curr].choice = 'no'
    setCurr(Math.max(curr-1, 0));
  }
  return (
    <div className='main'>
      {console.log(match)}
      {curr === 0 ? null : per.map(person => <ProfileCard key = {person.id} person = {person}/>)}
      <button className='no' onClick={handleNo}>✖</button>
      <button className='yes' onClick={handleYes}>❤</button>
    </div>
  )
}

export default Main

