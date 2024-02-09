import React from 'react'
const Sidebar = () => {
  return (
    <div className='sidebar d-flex flex-dir-col'>
        <div className='sidebar-box1 d-flex flex-dir-col'>
        <div className="active-sidebar" style={{display: 'flex'}}></div><i title="Chats" className="fal boxEffect fa-comment-dots active-element"></i>
        <div className="active-sidebar"></div><i title="Calls" className="fal boxEffect fa-phone"></i>
        <div className="active-sidebar"></div><i title="Status" className="fal boxEffect fa-spinner"></i>
        </div>
        <div className='sidebar-box2 d-flex flex-dir-col'>
        <div className="active-sidebar"></div><i title="Starred messages" className="fal boxEffect fa-star"></i>
        <div className="active-sidebar"></div><i title="Archived chats" className="fal boxEffect fa-box-archive"></i>
        <div className="active-sidebar"></div><i title="Settings" className="fal boxEffect fa-gear"></i>
        <div className="profile_box boxEffect"><div title="Profile" className='profile_pic'></div></div>
        </div>
    </div>
  )
}

export default Sidebar