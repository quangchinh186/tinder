import { React, useState } from 'react'

function CreateProfile() {
  const [info, setInfo] = useState({
    displayName : '',
    age : '',
    gender : '',
    lookingFor : '',
    hobby : [],
    image : []
  })

  const [sample, setSample] = useState('');

  const handleAvatar = (event) => {
    const file = event.target.files[0];
    setSample(URL.createObjectURL(file));
  }

  const handleChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = () => {

  }

  return (
  <div className='create-page'>
    <div className='profile'>
      <h1>YOUR PROFILE</h1>
      <form className='user-profile'>
        <div className=''>
          <label>Your Name</label>
          <input 
          type='text' 
          name='displayName'
          value={info.displayName}
          onChange={handleChange}
          required/>
        </div>

        <div className=''>
          <label>Age</label>
          <input 
            type='text'
            name='age'
            value={info.age}
            onChange={handleChange}
            required/>
        </div>

        <div className='gender'>
          <h3>gender : </h3>
          <input
            type='radio'
            id='male'
            name='radio'
          />
          <label htmlFor='male'>Male</label>
          <input
            type='radio'
            id='female'
            name='radio'
          />
          <label htmlFor='female'>Female</label>
        </div>

        <div className='favor'>
          <h3>Interest in : </h3>
          <input
            type='radio'
            id='male'
            name='radio-1'
          />
          <label htmlFor='male'>Male</label>
          <input
            type='radio'
            id='female'
            name='radio-1'
          />
          <label htmlFor='female'>Female</label>
        </div>

        <div className='image-holder'>
          <label htmlFor="file-upload" className="image-upload">+</label>
          <input id="file-upload" type="file" onChange={handleAvatar}/>

          <label htmlFor="file-upload" className="image-upload">+</label>
          <input id="file-upload" type="file"/>

          <label htmlFor="file-upload" className="image-upload">+</label>
          <input id="file-upload" type="file"/>

          <label htmlFor="file-upload" className="image-upload">+</label>
          <input id="file-upload" type="file"/>

          <label htmlFor="file-upload" className="image-upload">+</label>
          <input id="file-upload" type="file"/>

          <label htmlFor="file-upload" className="image-upload">+</label>
          <input id="file-upload" type="file"/>

          <label htmlFor="file-upload" className="image-upload">+</label>
          <input id="file-upload" type="file"/>

          <label htmlFor="file-upload" className="image-upload">+</label>
          <input id="file-upload" type="file"/>

          <label htmlFor="file-upload" className="image-upload">+</label>
          <input id="file-upload" type="file"/>          
        </div>

        <button className='regist' type='submit' onClick={handleSubmit}>Get Start</button>
      </form>
    </div>

    <div className='card-preview' 
      style = {{
        backgroundImage : `url("${sample}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
      <div className='current-image'>
          <button className='prev' >{'<'}</button>
          <button className='next' >{'>'}</button>
      </div>
      <div className="card-body-text">
        <h1>{info.displayName}</h1>
        <h1>{info.age}</h1>
      </div>
    </div>
  </div>
  )
}

export default CreateProfile