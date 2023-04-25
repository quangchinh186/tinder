import { React, useState, useEffect } from 'react'
import { sendMessage, getConversation } from './Back/Fetch';

const ChatBox = (props) => {
  const [chatHistoty, setChatHistory] = useState([]);
  const [message, setMessage] = useState({
    address: props.address,
    message: '',
  })
  //get old message
  useEffect(() => {
    const party = {
      id1: props.address.from,
      id2: props.address.to
    }
    getConversation(party, (mess) => {
      setChatHistory([...chatHistoty, ...mess])
    })
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
      console.log(mess);
    })
  }

  console.log(chatHistoty);
  console.log('outside useEffect');
  return (
    <div className='chatBox'>
      <div className='message-container'>
        {
          chatHistoty.map(mess => {
            return (
              <div key={chatHistoty.indexOf(mess)}>
                {mess.address.from}:
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