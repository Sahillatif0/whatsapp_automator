const express = require('express');
var bodyParser = require("body-parser");
const connectDatabase = require("./db");
const fs = require("fs");
const app = express();
const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
const { errorMonitor } = require('events');
const client = new Client({
    puppeteer: {
        headless: true,
    },
    authStrategy: new LocalAuth({clientId: 'client-one'}),
});
connectDatabase();


client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
});
let chats;
client.on("ready", async () => {
    console.log("Client is ready!");
    chats = await client.getChats();
    
    // let inter = setInterval(() => {
    //         client.sendMessage(chats[0].id._serialized,`You have not seen my ${chats[0].unreadCount} messages`);
    // }, 3000);
    // setTimeout(() => {
    //     clearInterval(inter);
    // }, 9000);
    console.log(chats[0].name);
    // let contacts = await chats[19].getContact();
    // console.log(contacts);
    // let msgs = await chats[0].fetchMessages({limit: 50, fromMe: undefined});
    // let data = JSON.stringify(msgs);
    // fs.writeFile("msgs.json",data,(error)=>{
    //     if(error){
    //         console.error(error);
    //         throw error;
    //     }
    // })
    // for(i=0;i<30;i++){
        // console.log(msgs[49]);
    // }
});
client.on("message", async (message) => {
    console.log(message);
    if(message.body==='close'){
        client.logout();
        console.log('connection closed');
    }
    // automessage.forEach(automsg => {
    //     if (message.body === automsg.message) {
    //         message.reply(automsg.reply);
    //     }
        
    // });
});
client.initialize();


app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});