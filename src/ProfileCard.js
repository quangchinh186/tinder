import { React, useState } from 'react'
import { motion } from "framer-motion";
import './App.css';


function ProfileCard({person}) {
  const [x, setX] = useState(0);
  const [opacity, setShow] = useState(1);
  if(person.choice === "yes" && opacity !== 0){
    setX(400);
    setShow(0);
    person.seen = true;
  }
  if((person.choice === "no" && opacity !== 0)){
    setX(-400);
    setShow(0);
    person.seen = true;
  }
  //console.log(choice);
  return (
    <motion.div className="Card" drag="x" dragSnapToOrigin={!person.seen} animate={{ x: x, opacity: opacity }}
    onDragEnd={
      (event, info) => {
        console.log(info.offset.x)
        if(info.offset.x > 70){
          setX(400);
          setShow(0);
          person.seen = true;
          person.choice = 'yes';
        }
        else if(info.offset.x < -70){
          setX(-400);
          setShow(0);
          person.seen = true;
          person.choice = 'no';
        }
      }
    }>
        <div className="img-container">
          image
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">name: {person.fullName}, id: {person.id}</h5>
          <h4 className="card-text">age</h4>
          <p className="card-text">desc</p>
          
        </div>
        
    </motion.div>
    
  )
}

export default ProfileCard