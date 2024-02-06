import React from 'react'
import ChatNavbar from './ChatNavbar'
import Messages from './Messages'
import MessageSend from './MessageSend'

const ChatView = () => {
  return (
    <div className='d-flex flex-dir-col chatView'>
     <ChatNavbar/>
     <Messages/>
     <MessageSend/>   
    </div>
  )
}

export default ChatView