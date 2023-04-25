import { React, useState, useEffect} from 'react'
import ChatBox from './ChatBox'
import MatchesBox from './MatchesBox'
import { useNavigate } from 'react-router-dom';
import { getUsers } from './Back/Fetch';

function MenuBox() {
  let navigate = useNavigate();
  const userId = sessionStorage.getItem('userId');
  const [user, setUser] = useState();
  const [tab, setTab] = useState('matches')
  const [chat, setChat] = useState({
    from: '',
    to: ''
  });
  const showProfile = () => {
    navigate('/profile');
  }

  useEffect(()=> {
    getUsers({_id: userId}, (users) => {
      setUser(users[0]);
      console.log('in callback');
    })
  }, [])

  if(user === undefined){
    return;
  } else {
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
        {tab === 'matches' ? <MatchesBox setTab={setTab} setChat={setChat} mat={user.matched}/> : <ChatBox chat={chat}/>}
      </div>
    )
  }
}

export default MenuBox
