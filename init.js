const mongoose= require("mongoose");
const Chat = require("./models/chat.js");


main()
.then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
        from: "abhishek",
        to: "saquib",
        msg: "hello programmer",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "sunny",
        msg: "hello brother",
        created_at: new Date(),
    },
    {
        from: "anshul",
        to: "anurag",
        msg: "where are you live ?",
        created_at: new Date(),
    },
    {
        from: "vivek",
        to: "sumit",
        msg: "what are you doing ?",
        created_at: new Date(),
    },
    {
        from: "vishwas",
        to: "yash",
        msg: "how are you ?",
        created_at: new Date(),
    }
];

Chat.insertMany(allchats);
