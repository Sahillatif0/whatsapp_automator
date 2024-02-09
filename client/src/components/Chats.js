import React from 'react'
import Chat from './Chat'
import Navbar from './Navbar'

const Chats = () => {
  let client = true;
  let co = [1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  return (
    <div className='chats-container d-flex flex-dir-col'>
        <Navbar/>
        <div className='all-chats'>
        {co.map(()=>{
          return (<Chat/>)
        })}
        </div>
    </div>
  )
}

export default Chats