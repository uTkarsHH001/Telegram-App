
import { useContext } from "react"
import { ThemeContext } from "../context";
import { IsChatOpenContext } from "../context";
import Avatar from "react-avatar";
import PropTypes from "prop-types";

export default function Chat({id, name, onClick}){
    
    const { theme } = useContext(ThemeContext)
    const { toggleChat } = useContext(IsChatOpenContext)
    
    return(
        <>
            <div onClick={ () => {toggleChat(); onClick();}} className={`flex p-2 text-${theme}-text active:bg-slate-500`}> 
               <Avatar name={name} size="60" className="rounded-full" alt=""/>
                <div className="flex-grow ml-2 p-1 border-b-2 border-black">
                    <h1>{name}</h1>
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
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};