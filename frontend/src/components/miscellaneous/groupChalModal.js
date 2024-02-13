const GroupChatModal =({children}) =>{
    const [groupChatName,setGroupChatName] = useState();
    const [selectedUsers,setSelectedChat] = useState([]);
    const [search,setSearch] = useState("");
    const [searchResult,setSearchResult] = useState([]);
    const [loading,setLoading] = useState(false);

    const {user,chats,setChats} = ChatState();

    const handleGroup = (userToAdd) =>{
        if(selectedUsers.includes(userToAdd)){
            console.log("User already added")
            return;
        }
        setSelectedChat([...selectedUsers,userToAdd]);
    }

    const handleSearch = async(query) =>{
        setSearch(query);
        if(!query){
            return;
        }
        try{
            const config = {
                headers:{
                    Authorization: `Bearer ${user.token}`,
                },
            };
            const {data} = await axios.get(`api/user?search=${search}`,config);
            console.log(data);
            setSearchResult(data);
        }catch(error){
            console.log(error);
        }
    };

    const handleDelete = (delUser) =>{
        selectedUsers(selectedUsers.filter((sel)=> sel._id !== delUser._id));
    };

    const handleSubmit = async() =>{
        if(!groupChatName || !selectedUsers){
            return;
        }

        try{
            const config = {
                headers:{
                    Authorization: `Bearer ${user.token}`,
                },
            };
            const {data} = await axios.post(
                "/api/chat/group",
                {
                    name:groupChatName,
                    users:JSON.stringify(selectedUsers.map((u)=>u._id)),   
                },
                config
            );
            setChats([data, ...chats]);
            onclose();
        }catch(error){
            console.log(error);
        }
    };

    return (
        <>
        </>
    )
}

export default GroupChatModal;