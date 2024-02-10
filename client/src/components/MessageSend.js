import React, { useRef, useState } from 'react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'


const MessageSend = () => {
  const micIconRef = useRef(null);
  const sendIconRef = useRef(null);
  const [message, setmessage] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [showMedia, setShowMedia] = useState(false)
  const onHandleChange = async (e)=>{
    setmessage(e.target.value)
    onStartType();
  }
  const onStartType = () => {
    setmessage((prevMessage) => {
      if (prevMessage.length > 0) {
        micIconRef.current.classList.add('disp-non');
        sendIconRef.current.classList.remove('disp-non');
      } else {
        micIconRef.current.classList.remove('disp-non');
        sendIconRef.current.classList.add('disp-non');
      }
      return prevMessage;
    });
  };
  const toggleEmojiPicker = (e) => {
    setShowPicker(!showPicker);
  };
  const toggleMediaOptions = (e) => {
    setShowMedia(!showMedia);
  };
  const onEmojiClick = (emoji) => {
    setmessage((prevMessage) => prevMessage + emoji.native);
  };
  const outsideClicked = (e) =>{
     if(!(e.target.id === 'smile-emoji' || e.target.id === 'smile-emoji-box') && showPicker)
      setShowPicker(false);
  }
  window.addEventListener('click',(e)=>{
    if(!(e.target.closest('.media-options-box')) && !(e.target.closest('.message-box-icons-box') || e.target.closest('.fal')))
      setShowMedia(false);
  })
  return (
    <div className='sendMessage-box d-flex'>
      <div className="message-box-icons-box" id='smile-emoji-box' onClick={toggleEmojiPicker}>
        <i className="fal fa-smile" id='smile-emoji'></i>
      </div>
      {showPicker && (
        <div className="emoji-picker">
          <Picker onEmojiSelect={onEmojiClick} onClickOutside={outsideClicked} data={data}/>
        </div>
      )}
      <div className="message-box-icons-box" id="paperlink-icon-box" onClick={toggleMediaOptions}>
        <i className="fal fa-paperclip fa-flip-vertical fa-flip-horizontal" id='paperlink-icon'></i>
      </div>
      {showMedia && (
      <div className="media-options-box d-flex flex-dir-col">
        <div className="media-options d-flex">
          <div className="media-icons">
          <i className="fal fa-image"></i></div>
          <p>Photos & videos</p>
        </div>
        <div className="media-options d-flex">
          <div className="media-icons">
          <i className="fal fa-camera"></i></div>
          <p>Camera</p>
        </div>
        <div className="media-options d-flex">
          <div className="media-icons">
          <i className="fal fa-file"></i></div>
          <p>Document</p>
        </div>
        <div className="media-options d-flex">
          <div className="media-icons">
          <i className="fal fa-user"></i></div>
          <p>Contacts</p>
        </div>
        <div className="media-options d-flex">
          <div className="media-icons">
          <i className="fal fa-poll"/></div>
          <p>Poll</p>
        </div>
        <div className="media-options d-flex">
          <div className="media-icons">
          <i className="fal fa-pen-swirl"></i></div>
          <p>Drawing</p>
        </div>
      </div>)}
      <div className="message-input d-flex">
        <input type="text" name='message' value={message} onChange={onHandleChange} placeholder='Type a message'/>
      </div>
      <div className="message-box-icons-box" ref={micIconRef}>
        <i className="fal fa-microphone"></i>
      </div>
      <div className="message-box-icons-box disp-non" ref={sendIconRef}>
        <i className="fal fa-send"></i>
      </div>
    </div>
  )
}

export default MessageSend