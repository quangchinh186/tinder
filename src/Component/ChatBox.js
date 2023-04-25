import { React, useState, useEffect } from 'react'
import { sendMessage } from './Back/Fetch';

const ChatBox = (props) => {
  const [chatHistoty, setChatHistory] = useState([]);
  const [message, setMessage] = useState({
    address: props.chat,
    message: '',
  })
  useEffect(() => {
    //get old message
  },[])

  const handleChange = (event) => {
    setMessage({
      ...message,
      message: event.target.value
    })
  }

  const handleSend = () => {
    sendMessage(message, (mess) => {
      setChatHistory([...chatHistoty, message]);
      setMessage({
        ...message,
        message: ''
      })
      console.log('send success');
    })
  }

  return (
    <div className='chatBox'>
      <div className='message-container'>
        {
          chatHistoty.map(mess => {
            return (
              <div id={chatHistoty.indexOf(mess)}>
                {mess.message}
              </div>
            )
          })
        }
      </div>
      <div className='new-message-container'>
        <input type='text' value={message.message} onChange={handleChange}>
        </input>
        <button onClick={handleSend}>
          send
        </button>
      </div>
    </div>
  )
}

export default ChatBox