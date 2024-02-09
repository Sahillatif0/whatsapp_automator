import React from 'react'

const Chat = () => {
  return (
    <div className='singleChat d-flex'>
      <div className="chat-dp"></div>
      <div className="single-chat-box d-flex flex-dir-col">
          <p className='chat-name'>Sahil Latif</p>
          <p className='chat-last-message'>Sahil: Hey! How are you</p>
      </div>
      <div className="single-chat-icons">
        <p className="last-message-time">11:30 AM</p>
        <div className="d-flex">
        <i className="far fa-volume-mute"></i>
        <div className="unread-messages-badge d-flex"><span>2</span></div></div>
      </div>
    </div>
  )
}

export default Chat