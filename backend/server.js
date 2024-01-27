const express = require('express');
const {chats} = require("./data/data.js")
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.get("/",(req,res) => {
   res.send("chat is working");
    
})

app.get("/api/chat",(req,res)=>{
    res.send(chats);
})

// app.get("/api/chat",(req,res)=>{
//     res.send(data);
// });

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log("server has started"));