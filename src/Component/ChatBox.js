import { React, useState, useEffect, useRef } from 'react'
import { sendMessage, getConversation } from './Back/Fetch';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3002')
socket.on('connect', () => {
  console.log('you connected with socket io');
});

const ChatBox = (props) => {
  const messagesEndRef = useRef();
  const [chatHistoty, setChatHistory] = useState([]);
  const [message, setMessage] = useState({
    address: props.address,
    message: '',
  })
  const [receiveMessage, setReceiveMessage] = useState({});

  //get old message
  useEffect(() => {
    const party = {
      id1: props.address.from,
      id2: props.address.to
    }
    getConversation(party, (mess) => {
      setChatHistory(mess) 
    })
  },[receiveMessage])

  useEffect(() => {
    socket.on('message', (message) => {
      if(message.address.to === props.address.from){
        setReceiveMessage(message)
      }
    })
  },[])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [chatHistoty])

  const handleChange = (event) => {
    setMessage({
      ...message,
      message: event.target.value
    })
  }

  const handleSend = () => {
    if(message.message !== ''){
      sendMessage(message, (mess) => {
        setChatHistory([...chatHistoty, message]);
        setMessage({
          ...message,
          message: ''
        })
      })
    }
  }

  if(JSON.stringify(props.chatPartner) === "{}"){
    return;
  }else{

  return (
    <div className='chatBox'>
      <div className='header'>
        <button
          style = {{
            backgroundImage : `url("${props.chatPartner.profile.photos[0]}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "30px", width: "30px",
            borderRadius: "50%", border: "white", marginLeft: "10px"
          }}>
        </button>
        {props.chatPartner.profile.displayName}
      </div>
      <div className='message-container'>
        {
          chatHistoty.map(mess => {
            return (
              <div key={chatHistoty.indexOf(mess)} 
                className={mess.address.from === sessionStorage.getItem('userId') ? 'my' : 'res'}>
                {mess.message}
              </div>
            )
          })
        }
        <div ref={messagesEndRef}></div>
      </div>
      <div className='new-message-container'>
        <input type='text' 
        value={message.message} 
        onChange={handleChange} 
        />
        <button onClick={handleSend}>
          send
        </button>
      </div>
    </div>
  )
}}

export default ChatBox