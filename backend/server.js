const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.get("/",(req,res) => {
    res.send("Api is running")
})

app.get("api/chat",(req,res)=>{
    res.send(chats);
})

app.get("/api/chat",(req,res)=>{
    res.send(chats);
});

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log("server has started"));