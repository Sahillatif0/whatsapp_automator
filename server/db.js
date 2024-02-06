const mongoose = require('mongoose');
const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1"
const connectDatabase = ()=>{ mongoose.connect(uri,{directConnection: true}).then(() => {
    console.log("connection success")
}).catch((error) => {
console.log("no connection " + error);
})}

module.exports = connectDatabase;  

