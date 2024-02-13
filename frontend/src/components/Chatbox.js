import {chatState} from "../context/chatProvider";
import SingleChat from "./SingleChat";

const Chatbox = ({fetchAgain,setFetchAgain}) =>{

    const {selectedChat} = ChatState();

    return (
        <div style = {{display : selectedChat?"flex" :"none"}}
        className="chatbox"
        >
            
        <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}></SingleChat>
        </div>
    )
}