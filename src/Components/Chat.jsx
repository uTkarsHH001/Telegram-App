
import { useContext } from "react"
import { ThemeContext } from "../context";
import { IsChatOpenContext } from "../context";
import Avatar from "react-avatar";
import PropTypes from "prop-types";

export default function Chat({chat, onClick}){
    
    const { theme } = useContext(ThemeContext)
    const { showChat } = useContext(IsChatOpenContext)
    // console.log(chat);
    
    return(
        <>
            <div onClick={ () => {showChat(); onClick();}} className={`flex p-2 text-${theme}-text active:bg-slate-500`}> 
               <Avatar name={chat.creator.name || 'Anonymous'} size="60" className="rounded-full" alt=""/>
                <div className="flex-grow ml-2 p-1 border-b-2 border-black">
                    <h1>{chat.creator.name || 'Anonymous'}</h1>
                    <p className="text-2xl md:text-sm text-slate-400">Messages</p>
                </div>
                <div className="text-lg md:text-sm border-b-2 pr-2 border-black">
                    <h2>Jun 12</h2>
                    <h2 className={`float-right text-dark-text p-1 bg-slate-600 rounded-full`}>20</h2>
                </div>
            </div>
        </>
    )
}

Chat.propTypes = {
    chat: PropTypes.shape({
        creator: PropTypes.shape({
            name: PropTypes.string,
        }).isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};
