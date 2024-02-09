import React from 'react'

const ChatNavbar = () => {
  return (
    <div className='d-flex chat-navbar'>
      <div className="chat-dp"></div>
      <div className="single-chat-box d-flex flex-dir-col">
        <p className="chat-name">
            Sahil Latif
        </p>
        <p className="chat-last-message">
            Sahil latif, Arslan Ahmed, Ayyan....
        </p>
      </div>
      <div className="chat-navbar-options d-flex">
          <div className="chat-call-options d-flex">
            <div className="navbar-video-call navbar-call-icon-box d-flex">
                <i className="fal fa-video"></i>
            </div>
            <div className="navbar-phone-call navbar-call-icon-box d-flex">
                <i className="fal fa-phone"></i>
            </div>
          </div>
          <div className="chat-navbar-search-box navbar-call-icon-box d-flex">
            <i className="fal fa-magnifying-glass fa-flip-horizontal"></i>
          </div>
      </div>
    </div>
  )
}

export default ChatNavbar