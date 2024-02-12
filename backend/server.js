const express = require('express');
const {chats} = require("./data/data.js")
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes.js")
const chatRoutes = require("./routes/chatRoutes.js")
const messageRoutes = require("./routes/messageRoutes.js")

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use('/api/user',userRoutes);
app.use("api/chat",chatRoutes);
app.use("api/message",messageRoutes);
const PORT = process.env.PORT || 5000
app.listen(PORT,console.log("server has started"));