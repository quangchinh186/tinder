import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProfileCard from './ProfileCard'
import MenuBox from './MenuBox';

function addNew(like) {
  //them minh vao array candidates cua "like"
  //neu minh nam trong potentialMatchesId thi them vao [] matches cua ca 2
}

function Main() {
  let navigate = useNavigate();
  if(!sessionStorage.user){
    navigate('/login');
  }
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    //viet api lay users o day
    var fetchPromise = fetch("http://localhost:3001/", { method: "GET" })
    fetchPromise
    .then(res => res.json())
    .then(data => {
      setCandidates(data);
    })
  },[])

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

