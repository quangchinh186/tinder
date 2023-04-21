import { React, useEffect, useState } from 'react'
import { motion } from "framer-motion";

const ProfileCard = (props) => {
  const numberOfPhotos = props.user.photos.length - 1;
  const [x, setX] = useState(0);
  const [opacity, setShow] = useState(1);
  const [imageId, setImageId] = useState(0);
  const [url, setUrl] = useState('url("' + props.user.photos[imageId] + '")')
  //handle swiping card
  const goLeft = () => {
    setX(-1000);
    setShow(0);
  }
  const goRight = () => {
    setX(1000);
    setShow(0);
  }
  //handle current display image
  useEffect(() => {
    setUrl('url("' + props.user.photos[imageId] + '")');
  },[props.user.photos, imageId])
  
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
      <div className='current-image'>
          <button className='prev' onClick={() => setImageId(Math.max(imageId-1, 0))}>{'<'}</button>
          <button className='next' onClick={() => setImageId(Math.min(imageId+1, numberOfPhotos))}>{'>'}</button>
      </div>
      <div className="card-body-text">
        <h1>{props.user.displayName}</h1>
        <h1>{props.user.age}</h1>
      </div>
    </motion.div>
  )
}

export default ProfileCard
