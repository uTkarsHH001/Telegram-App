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
import MenuOptionContent from "./MenuOptionContent";

export default function SidebarLists(){
    const[isArrowClick, setIsArrowClick] = useState(false)
    const {theme, toggleTheme} = useContext(ThemeContext)
    const [menuOptions, setMenuOptions] = useState({
        addAccount: false,
        myProfile: false,
        newGroup: false,
        contacts: false,
        calls: false,
        peopleNearby: false,
        savedMessages: false,
        settings: false,
        inviteFriends: false,
        telegramFeatures: false,
    });

    const handleMenuClick = (option) => {
        setMenuOptions((prevOptions) => {
          
            const updatedOptions = Object.fromEntries(
            Object.keys(prevOptions).map((key) => [key, false])
            );
            
            updatedOptions[option] = true;
            return updatedOptions;
        });
      };

    return(
        <>
            <div className={`${theme === `dark` ? `bg-dark-secondary` : `bg-light-secondary`} text-dark-text w-3/4 h-full absolute md:text-sm md:w-2/12 md:h-2/4`}>
                <div className={`${theme === `dark` ? `bg-dark-primary` : `bg-light-primary`} p-4`}>
                    <div className="flex justify-between ">
                        <img src="/telegram.png" className="w-16 md:w-8 md:h-8" alt="" />
                        <Button onClick={toggleTheme} Icon={theme == 'dark' ? IoSunnyOutline : FaMoon} />
                    </div>
                    <div className="mt-5 md:mt-0 flex justify-between">
                        <div>
                            <p className="text-lg md:text-sm">Utkarsh</p>
                            <p className="text-lg md:text-sm text-slate-200">+91 63975532165</p>
                        </div>
                        <div className={`${isArrowClick ? `rotate-180` : ``} transition-all duration-400`}>
                            <Button onClick={() => setIsArrowClick(!isArrowClick)} Icon={IoIosArrowDown}/>
                        </div>
                    </div>
                </div>
                <div className={`p-2 ${theme === `dark` ? `bg-dark-secondary` : `bg-light-secondary`} ${theme === `dark` ? `text-dark-text` : `text-light-text`}`}>
                    {isArrowClick &&
                        <>
                            <div className="text-2xl md:text-sm flex gap-5 transition-all duration-300">
                                <img src="/telegram.png" className="w-10 md:w-6 p-1" alt="" />
                                <p>Utkarsh</p>
                            </div>
                            <MenuItem onClick={() => handleMenuClick('addAccount')} Icon={FaPlus} name={"Add Account"} />
                        </>
                    }
                    
                    <div className={`border ${theme === `dark` ? `border-dark-secondary` : `border-light-secondary`} border-y-2`}><MenuItem onClick={() => handleMenuClick('myProfile')} Icon={CgProfile} name={"My Profile"}/></div>
                        <MenuItem onClick={() => handleMenuClick('newGroup')} Icon={MdGroups2} name={"New Group"} />
                        <MenuItem onClick={() => handleMenuClick('contacts')} Icon={IoMdContact} name={"Contacts"} />
                        <MenuItem onClick={() => handleMenuClick('calls')} Icon={IoCallSharp} name={"Calls"} />
                        <MenuItem onClick={() => handleMenuClick('peopleNearby')} Icon={RiUserLocationLine} name={"People Nearby"} />
                        <MenuItem onClick={() => handleMenuClick('savedMessages')} Icon={FaBookmark} name={"Saved Messages"} />
                        <div className={`border ${theme === `dark` ? `border-dark-secondary` : `border-light-secondary`} border-b-2`}><MenuItem onClick={() => handleMenuClick('settings')} Icon={IoIosSettings} name={"Settings"} /></div>
                        <MenuItem onClick={() => handleMenuClick('inviteFriends')} Icon={IoMdPersonAdd} name={"Invite Friends"} />
                        <MenuItem onClick={() => handleMenuClick('telegramFeatures')} Icon={IoIosHelpCircleOutline} name={"Telegram Features"} />
                    </div>
            </div>
            <MenuOptionContent menuOptions={menuOptions} />
            
        </>
    )
}