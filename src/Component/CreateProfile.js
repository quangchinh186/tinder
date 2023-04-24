import { React, useState, useEffect } from 'react'
import Select from 'react-select';
import {addUser, getUsers} from './Back/Fetch';
import { useNavigate } from 'react-router-dom';

const blankAva = 'https://i.postimg.cc/Ssgg8MYS/download.jpg';

const hobbies = [
  { value: 'Anime', label: 'Anime' },
  { value: 'Manga', label: 'Manga' },
  { value: 'Music', label: 'Music' },
  { value: 'Movies', label: 'Movies'},
  { value: 'Board Game', label: 'Board Game'},
  { value: 'Books', label: 'Books'},
  { value: 'Chess', label: 'Chess'},
  { value: 'Cooking', label: 'Cooking'},
  { value: 'Sports', label: 'Sports'},
  { value: 'Dance', label: 'Dance'},
  { value: 'Coding', label: 'Coding'},
  { value: 'Travel', label: 'Travel'}
]

const CreateProfile = () => {
  let navigate = useNavigate();
  var account;
  const [info, setInfo] = useState({
    displayName : '',
    age : '',
    gender : '',
    genderInterest : '',
    photos: [],
  })
  const [hobby, setHobby] = useState(null);
  const [sample, setSample] = useState('');

  useEffect(() => {
    if(sessionStorage.user){
      account = JSON.parse(sessionStorage.user)
      setInfo(account)
    } else {
      account = JSON.parse(sessionStorage.newUser);
      setInfo({
        account: account,
        ...info
      })
    }
  },[])


  const handleAvatar = (event) => {
    const file = event.target.files[0];
    setSample(URL.createObjectURL(file));
  }

  const handleChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    })
    console.log(info);
  }

  const handleSubmit = (event) => {
    setInfo({
      ...info,
      hobby: hobby,
      photos: sample
    })

    console.log(info);
    editProfile(localStorage.getItem('userId'), info, (result) => console.log(result))
    event.preventDefault();
  }
  console.log(info);

  return (
  <div className='create-page'>
    <div className='profile'>
      <h1>YOUR PROFILE</h1>
      <form className='user-profile'>
        <div className='txt_field'>
          <input 
          type='text' 
          name='displayName'
          value={info.displayName}
          onChange={handleChange}
          required/>
          <label>Your Name</label>
        </div>

        <div className='txt_field'>
          <input 
            type='text'
            name='age'
            value={info.age === null ? '' : info.age}
            onChange={handleChange}
            required/>
            <label>Age</label>
        </div>

        <div className='gender'>
          <h3>Gender : </h3>
          <input
            type='radio'
            value='Male'
            name='gender'
            onChange={handleChange}
          />
          <label>Male</label>
          <input
            type='radio'
            value='Female'
            name='gender'
            onChange={handleChange}
          />
          <label>Female</label>
        </div>

        <div className='interest'>
          <h3>Interest in : </h3>
          <input
            type='radio'
            value='Male'
            name='genderInterest'
            onChange={handleChange}
          />
          <label>Male</label>
          
          <input
            type='radio'
            value='Female'
            name='genderInterest'
            onChange={handleChange}
          />
          <label>Female</label>
          
        </div>

        <div className='hobby'>
          <Select
          placeholder='Hobby'
          defaultValue={hobby}
          onChange={setHobby}
          isMulti
          name="hobby"
          options={hobbies}
          className="basic-multi-select"
          
          />
        </div>

        <div className='image-holder'>
          <label htmlFor="file-upload" className="image-upload">Add photo+</label>
          <input id="file-upload" type="file" onChange={handleAvatar}/>
        </div>

        <button className='regist' type='submit' onClick={handleSubmit}>Get Start</button>
      </form>
    </div>

    <div className='card-preview' 
      style = {{
        backgroundImage : `url("${sample}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
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
