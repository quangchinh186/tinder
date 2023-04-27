import { React, useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'
import MenuBox from './MenuBox';
import Login from './Login'
import { getUsers, addPotential, matching, dislike } from './Back/Fetch';


function Main() {
  const userId = sessionStorage.getItem('userId');
  const [user, setUser] = useState();
  //get profile card
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    const usersFilter = {}
    getUsers(usersFilter, (users) => {
      setCandidates(users);
    })
  },[])
  //get current user
  useEffect(()=> {
    getUsers({_id: userId}, (users) => {
      setUser(users[0]);
    })
  }, [])

  //handle logic
  const like = (id) => {
    const poten = user.potentialUser;
    if(poten.indexOf(id) !== -1){
      //match our side
      matching(userId, id, (res) => {
        console.log('added to our matched');
        console.log(res);
      })
      //match their side
      getUsers({_id: id}, (users) => {
        matching(id, userId, (res) => {
          console.log('add to their matched');
          console.log(res);
          alert(`you matched with ${users[0].profile.displayName}!!`)
        })
      })
    } else {
      addPotential(id, userId, (res) => {
        console.log(res);
        console.log('add to other PU');
      })
    }
  }
  
  const hate = (id) => {
    dislike(userId, id, (res) => {
      console.log('added to dislike');
      console.log(res);
    })
  }

  //if not login
  if(userId === undefined){
    return <Login/>
  }
  
  return (
    <div className='main'>
      <MenuBox user={user}/>
      <div className='swipe-container'>
        <div className='card-container'>
          {candidates.map(person => <ProfileCard key={person._id} user={person} liked={like} dislike={hate}/>)}
        </div>
      </div>
    </div>
  )
}

export default Main

