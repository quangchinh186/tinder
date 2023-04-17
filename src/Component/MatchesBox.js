import React from 'react'

const testData = [
  {
    userId: '1',
    displayName: 'Matched-1',
    avatar: '',
  },
  {
    userId: '2',
    displayName: 'Matched-2',
    avatar: '',
  },
  {
    userId: '3',
    displayName: 'Matched-3',
    avatar: '',
  }
]

const MatchesBox = () => {
  const handleClick = () => {
    console.log('choosed user');
  }

  return (
    <div className='matched-box'>
      {
        testData.map(user => {
          return (
           <button className='user' 
            onClick={handleClick}
            key={user.userId}
          >
            {user.displayName}
          </button>
            )
        })
      }
    </div>
  )
}

export default MatchesBox