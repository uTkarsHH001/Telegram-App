import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import Sidebar from "./Sidebar";
import Button from "./Button";
import { SidebarContext, ThemeContext } from "../context";

export default function Topbar(){

    const { theme } = useContext(ThemeContext)
    const { toggleSidebar } = useContext(SidebarContext)

    return(
        <>
            <div className={`w-full md:w-2/4 ${theme === `dark` ? `bg-dark-primary` : `bg-light-primary`} text-dark-text flex items-center gap-8 fixed top-0`}>
                <Button Icon={GiHamburgerMenu} onClick={toggleSidebar}/>
                <p className="flex-grow md:hidden">Telegram</p>
                <div>
                    <div className="md:hidden"><Button Icon={IoSearch} onClick={() => console.log('clicked')}/></div>
                    <input type="text" placeholder={"Search..."} className="hidden w-3/4 md:block p-2 bg-gray-600 rounded-full"/>
                </div>
            </div>
            <Sidebar/>
        </>
    )
}