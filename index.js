const express= require("express");
const app= express();
const path= require("path");
const mongoose= require("mongoose");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

main()
.then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// INDEX ROUTE
app.get("/chat", async(req,res)=>{
  let chats= await Chat.find();
  res.render("index.ejs", {chats});
})

// NEW CHAT ROUTE
app.get("/chat/new", (req,res)=>{
  res.render("new.ejs");
})

app.get("/", (req,res)=>{
  res.send("root is working");
})


app.listen(8080, ()=>{
    console.log(`server started at port is 8080`);
})