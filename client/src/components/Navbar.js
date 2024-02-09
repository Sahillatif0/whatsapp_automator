import React from 'react'

const Navbar = () => {
  return (
    <div className='d-flex flex-dir-col navbar'>
      <div className='d-flex navbar-div1'>
      <h2>Chats</h2>
      <div className="Nav-icons d-flex">
      <i className="fal boxEffect fa-edit"></i>
      <i className="fal boxEffect fa-bars-filter"></i>
      </div>
    </div>
    <div className='d-flex search-chats'>
      <i className='fal fa-magnifying-glass fa-flip-horizontal'></i>
      <input type="search" name="searchbox" onBlur={()=>{document.getElementsByClassName('search-chats')[0].classList.remove('focusSearch')}} onFocus={()=>{document.getElementsByClassName('search-chats')[0].classList.add('focusSearch')}} id="chat-search-in" placeholder='Search or start a new chat'/>
    </div>
    </div>
  )
}

export default Navbar