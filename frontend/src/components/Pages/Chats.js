import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import {ChatState} from '../../context/chatProvider'
const Chats = () => {
    // const[chats,setChats] = useState([]); 
    // const fetchChats = async () =>{
    //     const data = await axios.get("/api/chat");
    //     setChats(data);
    // }
    // useEffect(()=>{
    //     fetchChats();
    // },[])

    const { user } = ChatState();
    return (
        <div>
            {
                //console.log(chats)
            }
        </div>
  )
}

export default Chats;