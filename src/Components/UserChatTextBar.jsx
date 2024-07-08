import Button from "./Button";
import { FaRegSmile } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { FaMicrophone } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context";


export default function UserChatTextBar(){

    const { theme } = useContext(ThemeContext)
    return(
        <>
            <div className={`w-full bg-${theme}-secondary text-${theme}-text fixed bottom-0`}>
                <div className="flex">
                    <Button Icon={FaRegSmile}/>
                    <input className=" w-3/4 p-2 bg-transparent" placeholder="Message" type="text" />
                    <Button Icon={GrAttachment} />
                    <Button Icon={FaMicrophone} />
                </div>
            </div>
        </>
    )
}