import axios from "axios";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import UserChatTopBar from "./UserChatTopBar";
import UserChatTextBar from "./UserChatTextBar";
import UserChatMessages from "./UserChatMessages";
import { IsChatOpenContext, ThemeContext } from "../context";

export default function UserChat({toUser}){

    const { theme } = useContext(ThemeContext)
    const[ messages, setMessages] = useState([])
    const { isChatOpen } = useContext(IsChatOpenContext)
    // console.log("Userchat===",toUser);
     useEffect(() => {
        fetchChat(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${toUser.id}`)
        console.log(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${toUser.id}`)
    },[toUser.id])


    const fetchChat = async (url) => {
        const response = await axios.get(url);
        const newMessages = await response.data.data
        setMessages(newMessages)
    }

    console.log(messages)

    return(
        <>
            <div className={`h-full w-full md:w-9/12 pb-6 absolute md:right-0 ${!isChatOpen ? `right-[100vw]` : `right-0`}`} style={{backgroundImage: `url("/${theme}.jpg")`, backgroundSize: 'cover'}}>
                <UserChatTopBar name={toUser.creator.name || 'Anonymous'}/>
                <UserChatMessages toUserId={toUser.created_by} messages={messages}/>
                <UserChatTextBar />
            </div>
        </>
    )
}

UserChat.propTypes = {
    toUser: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        creator: PropTypes.shape({
            name: PropTypes.string,
        }).isRequired,
        created_by: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
};