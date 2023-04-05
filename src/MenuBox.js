import React from 'react'
import ChatBox from './ChatBox'

function MenuBox(props) {
  return (
    <div>
        <div>hello, {props.name}</div>
        <ChatBox/>
    </div>
  )
}

export default MenuBox