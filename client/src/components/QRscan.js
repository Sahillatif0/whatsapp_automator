import React from 'react'
import QRCode from 'react-qr-code'

export const QRscan = () => {
  return (
    <>
    <h1>Scan From Your Mobile Device To Authorize</h1>
    <div className='qrContainer'>
        <QRCode value='this is secret key'/>
    </div>
    </>
  )
}
