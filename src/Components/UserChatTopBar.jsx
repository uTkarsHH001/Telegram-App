import { useContext } from "react";
import Button from "./Button";
import { FaArrowLeft } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import Avatar from "react-avatar";
import { IsChatOpenContext, ThemeContext } from "../context";


export default function UserChatTopBar({name}){
    
    const { theme } = useContext(ThemeContext)
    const { toggleChat } = useContext(IsChatOpenContext)

    return(

        <>
            <div className={`w-full bg-${theme}-primary text-dark-text text-2xl flex items-center gap-2 p-4 fixed top-0`}>
                <Button onClick={toggleChat} Icon={FaArrowLeft}/>
                <Avatar size="50" className="rounded-full mr-1" name={name} />
                <p className="flex-grow">{name}</p>
                <div>
                    <Button Icon={IoCall} onClick={() => console.log('clicked')}></Button>
                    <Button Icon={CiMenuKebab} onClick={() => console.log('clicked')}></Button>
                </div>
            </div>
        </>
    )
}