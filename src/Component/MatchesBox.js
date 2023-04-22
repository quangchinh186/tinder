import { React, useState, useEffect } from 'react'
import {getUsers} from './Back/Fetch'

const MatchesBox = (props) => {
  const mat = (JSON.parse(sessionStorage.user)).Matched;
  const [matched, setMatched] = useState([])

  useEffect(() => {
    const usersFilter = { _id: mat }
    getUsers(usersFilter, (users) => {
      setMatched(users);
    })
  })

  const handleClick = (e) => {
    console.log('choosed user');
    console.log(e.target.name);
    props.setChatW(e.target.name)
    props.setTab('chat')
  }

  return (
    <div className='matched-box'>
      {
        matched.map(m => {
          return(
            <button key={m._id} 
            name={m.displayName} 
            onClick={handleClick}
            style = {{
              backgroundImage : `url("${m.photos[0]}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              
            }}>
              {m.displayName}
            </button>
          )
        })
      }
    </div>
  )
}

export default MatchesBox