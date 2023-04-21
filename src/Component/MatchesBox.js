import React from 'react'

const MatchesBox = () => {
  const user = JSON.parse(sessionStorage.user);
  const handleClick = () => {
    console.log('choosed user');
  }
  console.log(user.Matched);

  return (
    <div className='matched-box'>
      {
        user.Matched.map(user => {
          return (
           <button className='user' 
            onClick={handleClick}
            key={user}>

          </button>
            )
        })
      }
    </div>
  )
}

export default MatchesBox