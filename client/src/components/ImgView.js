import React from 'react'

const ImgView = () => {
  return (
    <div className='image-view-page d-flex flex-dir-col'>
        <div className="img-view-navbar d-flex">
            <div className="message-box-icons-box">
            <i className="fal fa-arrow-right fa-flip-horizontal"></i></div>
            <div className="img-numbers d-flex">1 of 5</div>
            <div className="zoom-dropdown-menu message-box-icons-box">

            </div>
            <div className="div message-box-icons-box">
                <i className="fal fa-screencast"></i>
            </div>
            <div className="div message-box-icons-box">
                <i className="fal fa-magnifying-glass-plus"></i>
            </div>
            <div className="div message-box-icons-box">
                <i className="fal fa-magnifying-glass-minus"></i>
            </div>
            <div className="splitter-div d-flex">
            <span className='splitter'>|</span></div>
            <div className="div message-box-icons-box">
                <i className="fal fa-star"></i>
            </div>
            <div className="div message-box-icons-box">
                <i className="fal fa-smile"></i>
            </div>
            <div className="div message-box-icons-box">
                <i className="fal fa-list-dots"></i>
            </div>
        </div>
        <div className="img-box d-flex">
        <div className="img-view" style={{backgroundImage:'url(../pp.png)'}}></div>
        <div className="message-box-icons-box img-arrow img-arrow-left">
            <i className="fal fa-arrow-right fa-flip-horizontal"></i></div>
        <div className="message-box-icons-box img-arrow img-arrow-right">
            <i className="fal fa-arrow-right"></i></div>
        </div>

    </div>
  )
}

export default ImgView