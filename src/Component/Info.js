import React from 'react'

const Info = (props) => {
    const user = props.user.profile;
    console.log(user);
  return (
    <div className='info'>
        <h1>{user.displayName}</h1>
        <h2>tuổi {user.age}</h2>
        {user.gender === 'Male'? <h2>Nam</h2> : <h2>Nữ</h2>}
        <h3>Sở thích: 
            {
            user.hobby.map(h =>{
                return <div key={h}>{h.value}</div>
            })
            }
        </h3>
        <h3>About me: {user.description}</h3>
    </div>
  )
}

export default Info