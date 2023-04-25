import { React, useState, useEffect } from 'react'
import Select from 'react-select';
import { editProfile, getUsers} from './Back/Fetch';
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

const Profile = () => {
  let navigate = useNavigate();
  const userId = sessionStorage.getItem('userId');
  const [profile, setProfile] = useState({
    displayName : '',
    age : 1,
    gender : '',
    genderInterest : '',
    description: '',
    photos: [],
    hobby: []
  })
  const [hobby, setHobby] = useState(null);
  const [photos, setPhotos] = useState([blankAva]);
  
  //get current user profile
  useEffect(() => {
    const filter = {_id: userId}
    getUsers(filter, (users) => {
      setProfile(users[0].profile)
      console.log(users[0]);
    })
  },[])


  //uploading photos (later)
  const handleAddPhotos = (event) => {
    const file = event.target.files[0];
    setPhotos([...photos, URL.createObjectURL(file)]);
  }

  const handleChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    setProfile({
      ...profile,
      hobby: hobby,
      photos: photos
    })
    editProfile(userId, profile, (result) => {
      console.log(result);
    })
    navigate('/m')
    event.preventDefault();
  }

  return (
  <div className='create-page'>
    <div className='profile'>
      <h1>YOUR PROFILE</h1>
      <form className='user-profile'>
        <div className='txt_field'>
          <input 
          type='text' 
          name='displayName'
          value={profile.displayName}
          onChange={handleChange}
          required/>
          <label>Your Name</label>
        </div>

        <div className='txt_field'>
          <input 
            type='text'
            name='age'
            value={profile.age}
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

        <div className='desc'>
          <input 
          type='text' 
          name='description'
          value={profile.description}
          onChange={handleChange}
          required/>
          <label>Description</label>
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
          <input id="file-upload" type="file" onChange={handleAddPhotos}/>
        </div>

        <button className='regist' type='submit' onClick={handleSubmit}>Get Start</button>
      </form>
    </div>

    <div className='card-preview' 
      style = {{
        backgroundImage : `url("${photos[0]}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
      }}>
      <div className='current-image'>
          <button className='prev' >{'<'}</button>
          <button className='next' >{'>'}</button>
      </div>
      <div className="card-body-text">
        <h1>{profile.displayName}</h1>
        <h1>{profile.age}</h1>
      </div>
    </div>
  </div>
  )
}

export default Profile