import { React, useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'
import MenuBox from './MenuBox';
import Login from './Login'
import { getUsers } from './Back/Fetch';

function addNew(like) {
  //them minh vao array candidates cua "like"
  //neu minh nam trong potentialMatchesId thi them vao [] matches cua ca 2
}

function Main() {
  //get profile card
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    const usersFilter = {}
    getUsers(usersFilter, (users) => {
      setCandidates(users);
    })
  },[])
  //if not login
  if(!sessionStorage.userId){
    return <Login/>
  }
  
  return (
    <div className='main'>
      <MenuBox/>
      <div className='swipe-container'>
        <div className='card-container'>
          {candidates.map(person => <ProfileCard key={person._id} user = {person} add = {addNew}/>)}
        </div>
      </div>
    </div>
  )
}

export default Main

