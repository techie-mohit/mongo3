const express= require("express");
const app= express();
const path= require("path");
const mongoose= require("mongoose");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");


main()
.then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


const chat1= new Chat({
  from: "abhishek",
  to: "saquib",
  msg: "what are you doing",
  created_at: new Date()
});

chat1.save()
.then((res)=>{
  console.log(res);
})
.catch((err)=> console.log(err));




app.listen(8080, ()=>{
    console.log(`server started at port is 8080`);
})