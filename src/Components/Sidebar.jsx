import SidebarLists from "./SidebarLists";
import { SidebarContext } from "../context";
import { useContext } from "react";

export default function Sidebar(){
    
    const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext)

    return(
        <>
            <div className={`absolute w-full h-full transition-all duration-300 ${isSidebarOpen ? `left-0` : `-left-[100vw]`} overflow-scroll`}>
                <div onClick={toggleSidebar} className="w-full h-full absolute"></div>
                <SidebarLists />
            </div>
        </>
    )   
}
