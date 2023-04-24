import {React, useState} from 'react'
import ChatBox from './ChatBox'
import MatchesBox from './MatchesBox'
import { useNavigate } from 'react-router-dom';

function MenuBox() {
  let navigate = useNavigate();
  const user = JSON.parse(sessionStorage.user);
  const [tab, setTab] = useState('matches')
  const [chatW, setChatW] = useState('');
  const showProfile = () => {
    navigate('/signup/newProfile');
  }
    return (
        <div className="menuBox">
          <div className='userInfo'>
            <button className='userIcon' onClick={showProfile}>
              <img src={user.profile.photos[0]} className='avatar' alt='icon'/>
              {user.profile.displayName}
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
          {tab === 'matches' ? <MatchesBox setTab={setTab} setChatW={setChatW}/> : <ChatBox chatW={chatW}/>}
        </div>
    )
}

export default MenuBox
