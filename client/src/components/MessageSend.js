import React from 'react'

const MessageSend = () => {
  return (
    <div className='sendMessage-box d-flex'>
      <div className="message-box-icons-box">
        <i className="fal fa-smile"></i>
      </div>
      <div className="message-box-icons-box">
        <i className="fal fa-link"></i>
      </div>
      <div className="message-input d-flex">
        <input type="text" name='message' placeholder='Type a message'/>
      </div>
      <div className="message-box-icons-box">
        <i className="fal fa-microphone"></i>
      </div>
      <div className="message-box-icons-box disp-non">
      {/* <div className="message-box-icons-box"> */}
        <i className="fal fa-send"></i>
      </div>
    </div>
  )
}

export default MessageSend