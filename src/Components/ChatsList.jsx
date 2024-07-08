import { useContext, useEffect, useState } from "react";
import Chat from "./Chat"
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { IsChatOpenContext } from "../context";
import UserChat from "./UserChat";

export default function ChatsList(){

    const [chats, setChats] = useState([]);
    // const [nextPageUrl, setNextPageUrl] = useState("https://devapi.beyondchats.com/api/get_all_chats")
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState({});
    const { isChatOpen } = useContext(IsChatOpenContext)
    
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
            
            <UserChat user={user}/>
            <div  className="h-full w-full overflow-scroll pt-20">
                {chats.map(chat => (
                    <Chat onClick={() => setUser({ Id: chat.id, name:  chat.creator.name || chat.creator.email || 'Anonymous'})} 
                          key={uuidv4()} 
                          id={chat.created_by} 
                          name={chat.creator.name || chat.creator.email || 'Anonymous'}/>
                ))}
            </div>
            {/* } */}
        </>
    )
}