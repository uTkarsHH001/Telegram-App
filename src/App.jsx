import Topbar from "./Components/Topbar"
import ChatsList from "./Components/ChatsList"
import { useContext } from "react";
import { IsChatOpenContext, ThemeContext } from "./context";


export default function App(){

  const {theme} = useContext(ThemeContext)
  const { isChatOpen } = useContext(IsChatOpenContext)

  return(
    <>
      <div className={`h-screen w-screen md:w-3/12 ${theme === `dark` ? `bg-dark-secondary` : `bg-light-secondary`} text-2xl md:text-xl`}>
        <Topbar />
        <ChatsList />
  
        {/* {!isChatOpen && 
          <button className={`bg-light-primary absolute bottom-5 right-5 text-5xl p-4 rounded-full md:fixed md:bottom-10 md:right-10`}><MdOutlineEdit /></button>
        } */}
      </div>
    </>
  ) 
}