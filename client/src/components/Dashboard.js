import React from 'react'
import Sidebar from './Sidebar'
import Chats from './Chats'
import ChatView from './ChatView'
import '../style/dashboard.css'

export const Dashboard = () => {
  return (
    <div className='dashboard-container d-flex'>
    <Sidebar/>
    <Chats/>
    <ChatView/>
    </div>
  )
}
