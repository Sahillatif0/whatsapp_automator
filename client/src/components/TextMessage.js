import React, { useEffect, useRef } from 'react';
import MessageIcon from './MessageIcon';
import QuotedMessage from './QuotedMessage';

const TextMessage = (props) => {
  const chatMessageRef = useRef(null);
  const messageStatusRef = useRef(null);
  const messageText = useRef(null);
  const regex = /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi;
  const updateMessage = ()=>{
  let message = props.message;
  const match = message.match(regex);
  let messageT = message;
  if (match) {
    match.forEach((link) => {
      messageT = message.replace(link, `<a href="${(('http://').localeCompare(link.substring(0,7)))?'http://' + link:''+ link}" target="_blank" rel="noopener noreferrer">${link}</a>`);
    });
  }
  messageText.current.innerHTML = messageT;
  }
  useEffect(() => {
    if(props.first){chatMessageRef.current.classList.add('chat-message-tail')}
    if (chatMessageRef.current && messageStatusRef.current) {
      messageStatusRef.current.style.height = `${chatMessageRef.current.offsetHeight - 5}px`;
    }
    updateMessage();
    // eslint-disable-next-line
  }, []);
  
  return (
    <div className='message-place'>
        <div id={props.uniqId} className={(props.sent)?('chat-message sent-message d-flex flex-dir-col'):('chat-message received-message d-flex flex-dir-col')} ref={chatMessageRef}>
          {props.isQuoted && (<QuotedMessage sent={props.sent} qMessage={props.qMessage} isOnlyImage={props.isOnlyImage} isImage={props.isImage} qImageUrl={props.qImageUrl}/>)}
          <div className="message-text d-flex" ref={messageText}></div>
          <div className="time_and_status d-flex" ref={messageStatusRef}>
            <p className='message-time'>5:56 PM</p>
            <MessageIcon  status={props.status} />
          </div>
      </div>
    </div>
  );
}

export default TextMessage