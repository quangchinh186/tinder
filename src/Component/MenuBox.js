import {React, useState} from 'react'
import ChatBox from './ChatBox'
import MatchesBox from './MatchesBox'

function MenuBox() {
  const [tab, setTab] = useState('matches')

    return (
        <div className="menuBox">
          <div className='userInfo'>
            Current Username
          </div>
          <div>
              <button className="option" onClick={() => setTab('matches')}>Matches</button>
              <button className="option" onClick={() => setTab('chat')}>Chat</button>
          </div>
          {tab === 'matches' ? <MatchesBox/> : <ChatBox/>}
        </div>
    )
}

export default MenuBox