import React, { useEffect, useRef } from 'react';

const TextMessage = (props) => {
  const chatMessageRef = useRef(null);
  const messageStatusRef = useRef(null);
  const messageText = useRef(null);
  let message = props.message;
  const regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const match = message.match(regex);
  let messageT = message;

  useEffect(() => {
    if (chatMessageRef.current && messageStatusRef.current) {
      messageStatusRef.current.style.height = `${chatMessageRef.current.offsetHeight - 5}px`;
    }
    if (match) {
      match.forEach((link) => {
        messageT = message.replace(link, `<a href="${link}" target="_blank" rel="noopener noreferrer">${link}</a>`);
      });
    }
    messageText.current.innerHTML = messageT;
  }, []);
  
  return (
    <div className='message-place'>
      {console.log(message)}
        <div className={(props.sent)?('chat-message sent-message d-flex'):('chat-message received-message d-flex')} ref={chatMessageRef}>
          <div className="message-text d-flex" ref={messageText}>{message}</div>
          <div className="time_and_status d-flex" ref={messageStatusRef}>
            <p className='message-time'>5:56 PM</p>
            <i className="fa fa-check"></i>
          </div>
      </div>
    </div>
  );
}

export default TextMessage