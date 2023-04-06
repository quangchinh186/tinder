import { React, useState } from 'react'
import { motion } from "framer-motion";

const ProfileCard = (props) => {
  const [x, setX] = useState(0);
  const [opacity, setShow] = useState(1);

  const goLeft = () => {
    setX(-400);
    setShow(0);
  }
  const goRight = () => {
    setX(400);
    setShow(0);
    props.add(props.person);
  }
  let ur = 'url("' + props.person.imageURL + '")'
  return (
    <motion.div className='card'
                drag="x" 
                dragSnapToOrigin={!props.person.seen} 
                animate={{ x: x, opacity: opacity }}
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
                  backgroundImage : ur,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
      >
      <div className="card-body text-center">
        <h5 className="card-title">name: {props.person.displayName}, id: {props.person._id}</h5>
        <h4 className="card-text">age: {props.person.age}</h4>
        <p className="card-text">desc</p>
      </div>
    </motion.div>
  )
}

export default ProfileCard
