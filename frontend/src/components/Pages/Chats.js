import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';

const Chats = () => {
    const[chats,setChats] = useState([]); 
    const fetchChats = async () =>{
        const data = await axios.get("/api/chat");
        setChats(data);
    }
    useEffect(()=>{
        fetchChats();
    },[])
  return (
    <div>
        {
            //console.log(chats)
            chats.data?.map((chat)=><div key={chat._id}>{chat.chatName}</div>)
        }
    </div>
  )
}

export default Chats;