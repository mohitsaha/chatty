const express = require('express');
const {chats} = require("./data/data.js")
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes.js")

dotenv.config();
connectDB();
const app = express();


app.use('api/user',userRoutes);

// app.get("/api/chat",(req,res)=>{
//     res.send(data);
// });

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log("server has started"));