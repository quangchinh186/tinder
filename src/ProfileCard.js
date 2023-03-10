import React from 'react';
import { motion } from "framer-motion";
import './App.css';


function ProfileCard() {
  return (
    <motion.div className="Card" drag
                >
      
        <div className="img-container">
          image
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">name</h5>
          <h4 className="card-text">age</h4>
          <p className="card-text">desc</p>
            <button className='no' >〤</button>
            <button className='yes'>✓</button>
        </div>
        
    </motion.div>
    
  )
}

export default ProfileCard