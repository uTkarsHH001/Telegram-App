import { useContext } from "react";
import Button from "./Button";
import { FaArrowLeft } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import Avatar from "react-avatar";
import { IsChatOpenContext, ThemeContext } from "../context";
import PropTypes from "prop-types";

export default function UserChatTopBar({name}){
    
    const { theme } = useContext(ThemeContext)
    const { closeChat } = useContext(IsChatOpenContext)

    return(

        <>
            <div className={`w-full bg-${theme}-primary text-dark-text text-2xl md:text-xl flex items-center gap-2 p-2 md:p-0 fixed top-0`}>
                <div className="md:hidden"><Button onClick={closeChat} Icon={FaArrowLeft}/></div>
                <Avatar size="40" className="rounded-full mr-1" name={name} />
                <p className="flex-grow">{name}</p>
                <div>
                    <Button Icon={IoCall} onClick={() => console.log('clicked')}></Button>
                    <Button Icon={CiMenuKebab} onClick={() => console.log('clicked')}></Button>
                </div>
            </div>
        </>
    )
}


UserChatTopBar.propTypes = {
    name: PropTypes.string.isRequired
};