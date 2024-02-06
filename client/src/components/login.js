import React from 'react'
import qr from 'qrcode-terminal'

const login = (props) => {
    let qrcode = qr.generate("Hello",{small:true});
    console.log(qrcode);
  return (
    <div>login {qrcode}</div>
  )
}

export default login