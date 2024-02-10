import React, { useEffect } from 'react'
import TextMessage from './TextMessage'
import ImgMessage from './ImgMessage'

const Messages = () => {
  const randomImage = async() =>{
    let imgData = await fetch('https://source.unsplash.com/random');
    // console.log(imgData.url)
    return imgData.url;
  }
  useEffect(() => {
    // randomImage();

  }, [])
  
  return (
    <div className='messages-container d-flex flex-dir-col'>
      <TextMessage sent={true} key='m1' uniqId='m1' first={true} message="Hey bro! How are you" />
      <TextMessage sent={false} key='m3' uniqId='m2' message="Yes bro! I am fine.link.com Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas maiores sint dolorem, et iusto rem earum odio illum mollitia amet odit aut veritatis? Cupiditate impedit quibusdam praesentium repellat voluptas harum, fuga animi saepe quaerat iusto, facilis, nemo suscipit similique aliquam neque ad commodi mollitia quam illum! Deleniti, ratione enim." />
      <TextMessage sent={true} key='m4' uniqId='m3' message="Yes bro! I am fine Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas maiores sint dolorem, et iusto rem earum odio illum mollitia amet odit aut veritatis? Cupiditate impedit quibusdam praesentium repellat voluptas harum, fuga animi saepe quaerat iusto, facilis, nemo suscipit similique aliquam neque ad commodi mollitia quam illum! Deleniti, ratione enim." />
      <TextMessage sent={true} key='m5' uniqId='m4' message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit praesentium nostrum quod velit expedita porro maiores cupiditate enim veniam inventore nemo sed earum reiciendis nisi ratione, dolorem animi molestiae harum unde quia iste. Mollitia cumque earum consequatur! Magnam libero quo quaerat itaque fugiat. Laudantium sit maxime beatae iure obcaecati esse ut, eligendi sunt, soluta magnam necessitatibus id aliquid minima, alias harum distinctio qui repellendus enim porro incidunt et magni cupiditate non. Aliquam perferendis eum sapiente soluta doloribus, et aliquid atque sunt dolorum repellat ex illo vero corrupti! Quasi officiis vitae magnam id tempore facilis ex illum magni ratione ipsum." />
      <ImgMessage sent={true} imageUrl='https://source.unsplash.com/random' key='m6' uniqId='m5' caption="It is my.content.link my.link"/>
      <ImgMessage sent={true} imageUrl='https://source.unsplash.com/random' key='m7' uniqId='m6' caption="https: // www hjdh dhjd jdhjshdjd sjdhsjd sjhd"/>
      <ImgMessage sent={true} imageUrl='https://source.unsplash.com/random' uniqId='m7' caption={null}/>
      <ImgMessage sent={false} imageUrl='https://source.unsplash.com/random' uniqId='m8' caption={null}/>
      <TextMessage sent={true} key='m9' uniqId='m9' isQuoted={true} isImage={true} isOnlyImage={true} qImageUrl='https://source.unsplash.com/random' qMessage='I am quoted message i have link my.link.com I will work till i get the right styling. My name is Sahil latif khatti I am making this whatsapp clone project it has all styling that whatsapp web app has in its styling I hope I will get this solution' status='read' message="https://www.w3schools.com/html/html_links.asp" />
      <TextMessage sent={true} key='m9' uniqId='m9' isQuoted={true} isImage={false} isOnlyImage={false} qMessage='I am quoted message i have link my.link.com I will work till i get the right styling. My name is Sahil latif khatti I am making this whatsapp clone project it has all styling that whatsapp web app has in its styling I hope I will get this solution' status='read' message="https://www.w3schools.com/html/html_links.asp" />
      <TextMessage sent={false} key='m10' uniqId='m10' isQuoted={true} isImage={true} isOnlyImage={false} qImageUrl='https://source.unsplash.com/random' qMessage='I am quoted message i have link my.link.com I will work till i get the right styling. My name is Sahil latif khatti I am making this whatsapp clone project it has all styling that whatsapp web app has in its styling I hope I will get this solution' status='read' message="https://www.w3schools.com/html/html_links.asp" />
      <div className="message-box-icons-box arrow-down disp-non">
        <i className="fal fa-arrow-down"></i>
      </div>
    </div>
  )
}

export default Messages