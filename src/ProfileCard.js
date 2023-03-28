import { React, useState } from 'react'
import { motion } from "framer-motion";
import './App.css';


const ProfileCard = (props) => {
  const [x, setX] = useState(0);
  const [opacity, setShow] = useState(1);
  if(props.person.choice === "yes" && opacity !== 0){
    setX(400);
    setShow(0);
    props.person.seen = true;
  }
  if((props.person.choice === "no" && opacity !== 0)){
    setX(-400);
    setShow(0);
    props.person.seen = true;
  }
  return (
    <motion.div className="Card" drag="x" dragSnapToOrigin={!props.person.seen} animate={{ x: x, opacity: opacity }}
    onDragEnd={
      (event, info) => {
        if(info.offset.x > 70){
          setX(400);
          setShow(0);
          props.person.seen = true;
          props.person.choice = 'yes';
          props.add(props.person);
          props.changeCur(props.person.id - 1);
        }
        else if(info.offset.x < -70){
          setX(-400);
          setShow(0);
          props.person.seen = true;
          props.person.choice = 'no';
          props.changeCur(props.person.id - 1);
        }
      }
    }>
        <div className="img-container">
          <img src={props.person.imageURL} alt='' width={200} height={200}/>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">name: {props.person.displayName}, id: {props.person._id}</h5>
          <h4 className="card-text">age: {props.person.age}</h4>
          <p className="card-text">desc</p>
          
        </div>
        
    </motion.div>
    
  )
}

export default ProfileCard
