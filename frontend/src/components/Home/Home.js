import React from 'react'
import groupChat from '../../images/group_chat.png'
const Home = () => {
  return (
    <div>
        <div className='home-group-message'>
            <div className='home-group-message-headers'>
             <h1 >Keep in touch with your groups</h1>
                <h5>From a group call to classmates to a quick call with mom, 
                    feel like you’re in the same room with voice and video calls.
                </h5>
            </div>
            <div>
                <img src={groupChat} className='home-group-message-img'/>
            </div>
        </div>
    </div>
  )
}

export default Home;
