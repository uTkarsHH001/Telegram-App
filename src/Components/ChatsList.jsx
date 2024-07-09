import { useContext, useEffect, useState } from "react";
import Chat from "./Chat"
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { IsChatOpenContext } from "../context";
import UserChat from "./UserChat";
import { ThemeContext } from "../context";
import { MdOutlineEdit } from "react-icons/md";


export default function ChatsList(){

    const [chats, setChats] = useState([]);
    // const [nextPageUrl, setNextPageUrl] = useState("https://devapi.beyondchats.com/api/get_all_chats")
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState({});
    const { isChatOpen } = useContext(IsChatOpenContext)
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        fetchChats("https://devapi.beyondchats.com/api/get_all_chats")
    }, [])

    const fetchChats = async (url) => {
        setLoading(true);
        try {
          const response = await axios.get(url);
          setChats(response.data.data.data)
          
        //   setChats((prevChats) => [...prevChats, ...response.data.data.data]);
        //   setNextPageUrl(response.data.data.next_page_url);
        } catch (err) {
          setError(err);
          console.error(error);
        }
        setLoading(false);
      };

    if(loading){
        return(
            <>  
                <div>
                    <p>Loading....</p>
                </div>
            </>
        )
    }

    return(
        <>
            
            <div className="h-full w-full">
                <UserChat user={user}/>
                <div  className={`h-full w-full ${theme === `dark` ? `bg-dark-secondary` : `bg-light-secondary`} overflow-scroll pt-16`}>
                    {chats.map(chat => (
                        <Chat onClick={() => setUser({ Id: chat.id, name:  chat.creator.name || chat.creator.email || 'Anonymous'})} 
                            key={uuidv4()} 
                            id={chat.created_by} 
                            name={chat.creator.name || chat.creator.email || 'Anonymous'}/>
                    ))}
                    {/* {!isChatOpen && 
                        <div className="fixed left-1/4">
                            <button className={`bg-light-primary text-5xl p-4 rounded-full`}><MdOutlineEdit /></button>
                        </div>
                    } */}
                </div>
                {!isChatOpen && 
                    <button className={`md:hidden bg-light-primary fixed bottom-5 left-[75vw] md:left-[18vw] text-5xl p-4 rounded-full`}><MdOutlineEdit /></button>
                }
            </div>
        </>
    )
}