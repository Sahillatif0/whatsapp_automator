import React, {useEffect, useRef} from 'react'

const ImgMessage = (props) => {
  const messageText = useRef(null);
  const updateCaption=()=>{
    let message = props.caption;
    if(message){
    const regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    const match = message.match(regex);
    let messageT = message;
    if (match ) {
      match.forEach((link) => {
        messageT = message.replace(link, `<a href="http://${link}" target="_blank" rel="noopener noreferrer">${link}</a>`);
      });
    }
    messageText.current.innerHTML = messageT;

  }
}
  useEffect(() => {
    updateCaption();
  }, []);
  return (
    
    <div className='message-place'>
        <div className={(props.sent)?('chat-message sent-message d-flex'):('chat-message received-message d-flex')}>
          <div className="d-flex flex-dir-col">
            <div style={{backgroundImage: 'url(../pp.png)'}} className='message-img d-flex'></div>
            <div className="img-caption-box d-flex">
          {props.caption?(<div className="message-caption message-text" ref={messageText}>{props.caption}</div>):''}
          <div className="time_and_status d-flex" style = {props.caption?{}:({width: '100%', justifyContent:'flex-end'})}>
            <p className='message-time'>5:56 PM</p>
            <i className="fa fa-check"></i></div>
            </div>
          </div>
      </div>
      </div>
  )
}

export default ImgMessage