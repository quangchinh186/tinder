import React from 'react'
import ChatBox from './ChatBox'

function MenuBox(props) {
  return (
    <div>
        <div>Hello, {props.displayName}</div>
        <ChatBox/>
    </div>
  )
}

export default MenuBox