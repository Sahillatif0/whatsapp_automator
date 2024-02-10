import React, {useEffect, useRef} from 'react'
import MessageIcon from './MessageIcon';
import QuotedMessage from './QuotedMessage';

const ImgMessage = (props) => {
  const messageText = useRef(null);
  const regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g;
  const updateCaption=()=>{
    let message = props.caption;
    if(message){
    const match = message.match(regex);
    let messageT = message;
    if (match ) {
      match.forEach((link) => {
        messageT = message.replace(link, `<a href="${(('http://').localeCompare(link.substring(0,7)))?'http://' + link:''+ link}" target="_blank" rel="noopener noreferrer">${link}</a>`);
      });
    }
    messageText.current.innerHTML = messageT;

  }
}
  useEffect(() => {
    updateCaption();
    console.log(props.imageUrl);
    // console.log(fetch('https://source.unsplash.com/random'));
    // eslint-disable-next-line
  }, []);
  return (
    
    <div className='message-place'>
        <div className={(props.sent)?('chat-message sent-message d-flex'):('chat-message received-message d-flex')}>
        {props.isQuoted && (<QuotedMessage sent={props.sent} qMessage={props.qMessage} isOnlyImage={props.isOnlyImage} isImage={props.isImage} qImageUrl={props.qImageUrl}/>)}
          <div className="d-flex flex-dir-col">
            <div style={{backgroundImage: `url(${props.imageUrl})`}} className='message-img d-flex'></div>
            <div className="img-caption-box d-flex">
          {props.caption?(<div className="message-caption message-text" ref={messageText}></div>):''}
          <div className="time_and_status d-flex" style = {props.caption?{}:({width: '100%', justifyContent:'flex-end'})}>
            <p className='message-time'>5:56 PM</p>
            <MessageIcon  status={props.status} /></div>
            </div>
          </div>
      </div>
      </div>
  )
}

export default ImgMessage