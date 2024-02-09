import React from 'react'
import TextMessage from './TextMessage'
import ImgMessage from './ImgMessage'

const Messages = () => {
  return (
    <div className='messages-container d-flex flex-dir-col'>
      <TextMessage sent={true}  message="Hey bro! How are you" />
      <TextMessage sent={true}  message="https://www.w3schools.com/html/html_links.asp" />
      <TextMessage sent={false} message="Yes bro! I am fine.link.com Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas maiores sint dolorem, et iusto rem earum odio illum mollitia amet odit aut veritatis? Cupiditate impedit quibusdam praesentium repellat voluptas harum, fuga animi saepe quaerat iusto, facilis, nemo suscipit similique aliquam neque ad commodi mollitia quam illum! Deleniti, ratione enim." />
      <TextMessage sent={true} message="Yes bro! I am fine Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas maiores sint dolorem, et iusto rem earum odio illum mollitia amet odit aut veritatis? Cupiditate impedit quibusdam praesentium repellat voluptas harum, fuga animi saepe quaerat iusto, facilis, nemo suscipit similique aliquam neque ad commodi mollitia quam illum! Deleniti, ratione enim." />
      <TextMessage sent={true} message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit praesentium nostrum quod velit expedita porro maiores cupiditate enim veniam inventore nemo sed earum reiciendis nisi ratione, dolorem animi molestiae harum unde quia iste. Mollitia cumque earum consequatur! Magnam libero quo quaerat itaque fugiat. Laudantium sit maxime beatae iure obcaecati esse ut, eligendi sunt, soluta magnam necessitatibus id aliquid minima, alias harum distinctio qui repellendus enim porro incidunt et magni cupiditate non. Aliquam perferendis eum sapiente soluta doloribus, et aliquid atque sunt dolorum repellat ex illo vero corrupti! Quasi officiis vitae magnam id tempore facilis ex illum magni ratione ipsum." />
      <ImgMessage sent={true} caption="It is my.content.link my.link"/>
      <ImgMessage sent={true} caption="https: // www . w3schools . com/html/html_links . asp"/>
      <ImgMessage sent={true} caption={null}/>
      <ImgMessage sent={false} caption={null}/>
      <div className="message-box-icons-box arrow-down disp-non">
        <i className="fal fa-arrow-down"></i>
      </div>
    </div>
  )
}

export default Messages