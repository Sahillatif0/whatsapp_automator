import React, { useEffect, useRef } from 'react';

const QuotedMessage = (props) => {
    const regex = /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi;
    const quotMessageText = useRef(null);
    const updateQuotMessage = ()=>{
        let message = props.qMessage;
        const match = message.match(regex);
        let messageT = message;
        if (match) {
          match.forEach((link) => {
            messageT = message.replace(link, `<span class='is-link'>${link}</span>`);
          });
        }
        quotMessageText.current.innerHTML = messageT;
        }
    useEffect(() => {
        if(!props.isOnlyImage)
            updateQuotMessage();
      // eslint-disable-next-line
    }, [])
    
  return (
    <div className={props.sent?("quoted-message-box d-flex flex-dir-col quote-message-mine"):("quoted-message-box d-flex flex-dir-col quote-message-other")} >
            <a href="#m1">
            <div className="quoted-message-sender">
              You
            </div>
            {props.isImage? (
                <div className='quoted-image-box d-flex'>
            <i className="fal fa-image quoted-message"></i>
            <div className="quoted-message" ref={quotMessageText}></div>
            <div className="quoted-image" style={{backgroundImage: `url(${props.qImageUrl})`}}></div>
            </div>
            ):(<div className="quoted-message" ref={quotMessageText}></div>
            )}</a>
          </div>
  )
}

export default QuotedMessage