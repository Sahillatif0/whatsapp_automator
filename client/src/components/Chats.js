import React from 'react'
import Chat from './Chat'
import Navbar from './Navbar'

const Chats = () => {
  return (
    <div className='chats-container d-flex flex-dir-col'>
        <Navbar/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
    </div>
  )
}

export default Chats