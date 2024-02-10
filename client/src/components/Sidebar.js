import React from 'react'
const Sidebar = () => {
  return (
    <div className='sidebar d-flex flex-dir-col'>
        <div className='sidebar-box1 d-flex flex-dir-col'>
        <div className="active-sidebar" style={{display: 'flex'}}></div><div className="boxEffect active-element"><i title="Chats" className="fal fa-comment-dots"></i><span className='notify-num'>5</span></div>
        <div className="active-sidebar"></div><div className="boxEffect"><i title="Calls" className="fal fa-phone"></i></div>
        <div className="active-sidebar"></div><div className="boxEffect"><i title="Status" className="fal fa-spinner"></i></div>
        </div>
        <div className='sidebar-box2 d-flex flex-dir-col'>
        <div className="active-sidebar"></div><div className="boxEffect"><i title="Starred messages" className="fal fa-star"></i></div>
        <div className="active-sidebar"></div><div className="boxEffect"><i title="Archived chats" className="fal fa-box-archive"></i></div>
        <div className="active-sidebar"></div><div className="boxEffect"><i title="Settings" className="fal fa-gear"></i></div>
        <div className="profile_box boxEffect"><div title="Profile" className='profile_pic'></div></div>
        </div>
    </div>
  )
}

export default Sidebar