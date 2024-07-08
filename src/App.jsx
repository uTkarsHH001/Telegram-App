import Topbar from "./Components/Topbar"
import ChatsList from "./Components/ChatsList"
import Sidebar from './Components/Sidebar'
import UserChat from "./Components/UserChat";
import { MdOutlineEdit } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "./context";


export default function App(){

  const {theme} = useContext(ThemeContext)

  return(
    <>
      <div className={`h-screen w-screen ${theme === `dark` ? `bg-dark-secondary` : `bg-light-secondary`} text-3xl`}>
        <Topbar />
        <ChatsList />
        
        {/* <button className={`bg-light-primary absolute bottom-5 right-5 text-5xl p-4 rounded-full`}><MdOutlineEdit /></button> */}
      </div>
    </>
  ) 
}