import UserChatTopBar from "./UserChatTopBar";
import UserChatTextBar from "./UserChatTextBar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { IsChatOpenContext } from "../context";
import UserChatMessages from "./UserChatMessages";
import PropTypes from "prop-types";

export default function UserChat({user}){

    const[ messages, setMessages] = useState([])
    const { isChatOpen } = useContext(IsChatOpenContext)

     useEffect(() => {
        fetchChat(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${user.Id}`)
        console.log(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${user.Id}`)
    },[user.Id])


    const fetchChat = async (url) => {
        const response = await axios.get(url);
        const newMessages = await response.data.data
        setMessages(newMessages)
    }

    console.log("userId - ", user.Id)

    return(
        <>
            <div className={`h-full w-full md:w-9/12 pb-6 absolute md:right-0 ${!isChatOpen ? `right-[100vw]` : `right-0`}`} style={{backgroundImage: 'url("/bg.jpg")', backgroundSize: 'cover'}}>
                <UserChatTopBar name={user.name}/>
                <UserChatMessages userId={user.Id} messages={messages}/>
                <UserChatTextBar />
            </div>
        </>
    )
}

UserChat.propTypes = {
    user: PropTypes.shape({
        Id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
};