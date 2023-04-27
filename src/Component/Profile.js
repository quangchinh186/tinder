import { React, useState, useEffect } from 'react'
import Select from 'react-select';
import { editProfile, getUsers } from './Back/Fetch';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
  const [hobby, setHobby] = useState();
  const [file, setFile] = useState("")
  const [currentPhoto, setCurrentPhoto] = useState(0)

  //get current user profile
  useEffect(() => {
    const filter = {_id: userId}
    getUsers(filter, (users) => {
      console.log(users[0]);
      const pf = users[0].profile;
      setProfile(pf);
      setHobby(pf.hobby);
      console.log(pf);
    })
  },[])


  //uploading photos (later)
  const handleAddPhotos = (e) =>{
    const file = e.target.files[0];
    setFile(file);
  }

  const upload = (e) => {
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "pxtanlz6");
    const config = {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    };
    axios.post("https://api.cloudinary.com/v1_1/dgxxwn6p1/image/upload", formData, config)
      .then((res) => {
        setFile("")
        setProfile({
          ...profile,
          photos: [...profile.photos, res.data.secure_url]
        })
        console.log(res.data.secure_url);
        alert('upload success')
      })
    e.preventDefault();
  }

  const handleChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    })
  }

  useEffect(() => {
    setProfile({
      ...profile,
      hobby: hobby
    })
  }, [hobby])

  const handleSubmit = (event) => {
    console.log(profile);
    editProfile(userId, profile, (result) => {
      console.log(result);
      navigate('/m')
    })
    event.preventDefault();
  }
  const temp = profile.hobby;
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
            checked = {'Male' === profile.gender}
          />
          <label>Male</label>
          <input
            type='radio'
            value='Female'
            name='gender'
            checked = {'Female' === profile.gender}
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
            checked = {'Male' === profile.genderInterest}
            onChange={handleChange}
          />
          <label>Male</label>
          
          <input
            type='radio'
            value='Female'
            name='genderInterest'
            checked = {'Female' === profile.genderInterest}
            onChange={handleChange}
          />
          <label>Female</label>
          
        </div>

        <div className='desc'>
          <label>Description:  </label>
          <input 
          type='text' 
          name='description'
          value={profile.description}
          onChange={handleChange}
          required/>
        </div>

        <div className='hobby'>
          {console.log(temp)}
          <Select
          defaultValue={temp}
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
          {file? <button onClick={upload}>upload</button> : <div></div>}
        </div>

        <button className='regist' type='submit' onClick={handleSubmit}>Get Start</button>
      </form>
    </div>
    
    <div className='card-preview' 
      style = {{
        backgroundImage : `url("${profile.photos.length ? profile.photos[currentPhoto] : blankAva }")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div className='current-image'>
          <button className='prev' onClick={() => setCurrentPhoto(Math.max(currentPhoto-1, 0))} >{'<'}</button>
          <button className='next' onClick={() => setCurrentPhoto(Math.min(currentPhoto+1, profile.photos.length-1))} >{'>'}</button>
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
