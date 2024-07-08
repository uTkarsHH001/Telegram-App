import Button from "./Button";
import MenuItem from "./MenuItem";  
import { IoSunnyOutline, IoCallSharp } from "react-icons/io5";
import { FaMoon, FaPlus, FaBookmark } from "react-icons/fa";
import { IoIosArrowDown, IoMdContact, IoMdPersonAdd, IoIosSettings, IoIosHelpCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdGroups2 } from "react-icons/md";
import { RiUserLocationLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { ThemeContext } from "../context";

export default function SidebarLists(){
    const[isArrowClick, setIsArrowClick] = useState(false)
    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        <>
            <div className={`${theme === `dark` ? `bg-dark-secondary` : `bg-light-secondary`} text-dark-text w-3/4 h-full absolute`}>
                <div className={`${theme === `dark` ? `bg-dark-primary` : `bg-light-primary`} p-4`}>
                    <div className="flex justify-between">
                        <img src="/telegram.png" className="w-16" alt="" />
                        <Button onClick={toggleTheme} Icon={theme == 'dark' ? IoSunnyOutline : FaMoon} />
                    </div>
                    <div className="mt-5 flex justify-between">
                        <div>
                            <p className="text-lg">Utkarsh</p>
                            <p className="text-lg text-slate-200">+91 63975532165</p>
                        </div>
                        <div className={`${isArrowClick ? `rotate-180` : ``} transition-all duration-400`}>
                            <Button onClick={() => setIsArrowClick(!isArrowClick)} Icon={IoIosArrowDown}/>
                        </div>
                    </div>
                </div>
                <div className={`p-2 ${theme === `dark` ? `bg-dark-secondary` : `bg-light-secondary`} ${theme === `dark` ? `text-dark-text` : `text-light-text`}`}>
                    {isArrowClick &&
                        <>
                            <div className="text-2xl flex gap-5 transition-all duration-300">
                                <img src="/telegram.png" className="w-10 p-1" alt="" />
                                <p>Utkarsh</p>
                            </div>
                            <MenuItem Icon={FaPlus} name={"Add Account"} />
                        </>
                    }
                    
                    <div className={`border ${theme === `dark` ? `border-dark-secondary` : `border-light-secondary`} border-y-2`}><MenuItem Icon={CgProfile} name={"My Profile"}/></div>
                        <MenuItem Icon={MdGroups2} name={"New Group"} />
                        <MenuItem Icon={IoMdContact} name={"Contacts"} />
                        <MenuItem Icon={IoCallSharp} name={"Calls"} />
                        <MenuItem Icon={RiUserLocationLine} name={"People Nearby"} />
                        <MenuItem Icon={FaBookmark} name={"Saved Messages"} />
                        <div className={`border ${theme === `dark` ? `border-dark-secondary` : `border-light-secondary`} border-b-2`}><MenuItem Icon={IoIosSettings} name={"Settings"} /></div>
                        <MenuItem Icon={IoMdPersonAdd} name={"Invite Friends"} />
                        <MenuItem Icon={IoIosHelpCircleOutline} name={"Telegram Features"} />
                    </div>
            </div>
        </>
    )
}