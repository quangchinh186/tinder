import { React, useState} from 'react'
import ChatBox from './ChatBox'
import MatchesBox from './MatchesBox'
import { useNavigate } from 'react-router-dom';

function MenuBox(props) {
  let navigate = useNavigate();
  const [tab, setTab] = useState('matches')
  const [chat, setChat] = useState({
    from: '',
    to: ''
  });
  const [chatPartner, setChatPartner] = useState({})
  const showProfile = () => {
    navigate('/profile');
  }

  if(props.user === undefined){
    return;
  } else {
    return (
      <div className="menuBox">
        <div className='userInfo'>
          <button className='userIcon' onClick={showProfile}>
            <img src={props.user.profile.photos[0]} className='avatar' alt='icon'/>
            {props.user.profile.displayName}
          </button>
        </div>
        <div>
            <button className={tab === 'matches' ? "option-selected" : "option"} onClick={() => setTab('matches')}>
              Matches
            </button>
            <button className={tab === 'chat' ? "option-selected" : "option"} onClick={() => setTab('chat')}>
              Chat
            </button>
        </div>
        {tab === 'matches' ? <MatchesBox setChatPartner={setChatPartner} setTab={setTab} setChat={setChat} mat={props.user.matched}/> : <ChatBox address={chat} chatPartner={chatPartner}/>}
      </div>
    )
  }
}

export default MenuBox
