import React from 'react'

const Navbar = () => {
  return (
    <div className='d-flex flex-dir-col navbar'>
      <div className='d-flex navbar-div1'>
      <h2>Chats</h2>
      <div className="Nav-icons d-flex">
      <div className="active-sidebar"></div><i className="fal boxEffect fa-edit"></i>
      <div className="active-sidebar"></div><i className="fal boxEffect fa-bars-filter"></i>
      </div>
    </div>
    <div className='d-flex searchChat'>
      <i className='fal fa-magnifying-glass fa-flip-horizontal'></i>
      <input type="search" name="searchbox" onBlur={()=>{document.getElementsByClassName('searchChat')[0].classList.remove('focusSearch')}} onFocus={()=>{document.getElementsByClassName('searchChat')[0].classList.add('focusSearch')}} id="chat-search-in" placeholder='Search or start a new chat'/>
    </div>
    </div>
  )
}

export default Navbar