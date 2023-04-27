import { React, useState, useEffect } from 'react'
import { getUsers } from './Back/Fetch'

const MatchesBox = (props) => {
  const [matched, setMatched] = useState([])
  useEffect(() => {
    if(props.mat){
      getUsers({_id: props.mat}, (users) => {
        setMatched(users);
      })
    }
  },[]);

  const handleClick = (m) => {
    //console.log(m);
    props.setChat({
      from: sessionStorage.getItem('userId'),
      to: m._id
    })
    props.setChatPartner(m);
    props.setTab('chat')
  }

  return (
    <div className='matched-box'>
      {
        matched.map(m => {
          return(
            <button key={m._id} 
            name={m._id} 
            onClick={() => {handleClick(m)}}
            style = {{
              backgroundImage : `url("${m.profile.photos[0]}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}>
              {m.profile.displayName}
            </button>
          )
        })
      }
    </div>
  )
}

export default MatchesBox
