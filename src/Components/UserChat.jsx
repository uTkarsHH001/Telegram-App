import UserChatTopBar from "./UserChatTopBar";
import UserChatTextBar from "./UserChatTextBar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { IsChatOpenContext } from "../context";
import UserChatMessages from "./UserChatMessages";

export default function UserChat({user}){

    const[ messages, setMessages] = useState([])
    const { isChatOpen } = useContext(IsChatOpenContext)
    useEffect(() => {
        fetchChat(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${user.Id}`)
        console.log(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${user.Id}`)
    },[])

    const fetchChat = async (url) => {
        const response = await axios.get(url);
        setMessages(response.data.data)
    }

    return(
        <>
            <div className={`h-full w-full absolute ${isChatOpen ? `right-[100vh]` : `right-0`}`} style={{backgroundImage: 'url("/bg.jpg")', backgroundSize: 'cover'}}>
                <UserChatTopBar name={user.name}/>
                <UserChatMessages Messages={messages}/>
                <UserChatTextBar />
            </div>
        </>
    )
}