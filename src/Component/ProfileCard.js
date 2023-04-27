import { React, useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Info from './Info';

const ProfileCard = (props) => {
  const numberOfPhotos = props.user.profile.photos.length - 1;
  const [x, setX] = useState(0);
  const [opacity, setShow] = useState(1);
  const [imageId, setImageId] = useState(0);
  const [showInfo, setShowInfo] = useState(false)
  const [url, setUrl] = useState('url("' + props.user.profile.photos[imageId] + '")')
  //handle swiping card
  const goLeft = () => {
    props.dislike(props.user._id)
    setX(-1000);
    setShow(0);
  }
  const goRight = () => {
    props.liked(props.user._id);
    setX(1000);
    setShow(0);
  }

  //handle current display image
  useEffect(() => {
    setUrl('url("' + props.user.profile.photos[imageId] + '")');
  },[props.user.profile.photos, imageId])
  
  return (
    <motion.div className='card'
                drag="x"  
                animate={{ x: x, opacity: opacity }}
                dragSnapToOrigin={opacity}
                onDragEnd={
                  (event, info) => {
                  if(info.offset.x > 70){
                    goRight();
                  }
                  else if(info.offset.x < -70){
                    goLeft();
                  }
                }}
                style = {{
                  backgroundImage : url,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
      >
      {showInfo? <div className='info-container'>
          <Info user={props.user}/>
          <button className='closeInfo' onClick={() => setShowInfo(false)}>✖</button>
        </div> : <div></div>}

      <div className='current-image'>
          <button className='prev' onClick={() => setImageId(Math.max(imageId-1, 0))}>{'<'}</button>
          <button className='next' onClick={() => setImageId(Math.min(imageId+1, numberOfPhotos))}>{'>'}</button>
      </div>
      <div className="card-body-text">
        <h1>{props.user.profile.displayName}</h1>
        <h1>{props.user.profile.age}</h1>
        <button onClick={() => setShowInfo(!showInfo)}>show details</button>
      </div>
    </motion.div>
  )
}

export default ProfileCard
