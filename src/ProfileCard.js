import { React, useState } from 'react'
import { motion } from "framer-motion";
import './App.css';


function ProfileCard(props) {

  return (
    <motion.div className="Card" drag="x" onDragEnd={
      (event, info) => {
        console.log(info.point.x);
        if(info.point.x > 300){
          props.id + 1;
        }
      }
    }>
        <div className="img-container">
          image
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">name, id {props.id}</h5>
          <h4 className="card-text">age</h4>
          <p className="card-text">desc</p>
            
        </div>
        
    </motion.div>
    
  )
}

export default ProfileCard