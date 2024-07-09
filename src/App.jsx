import Topbar from "./Components/Topbar"
import ChatsList from "./Components/ChatsList"
import { useContext } from "react";
import { ThemeContext } from "./context";

export default function App(){

  const {theme} = useContext(ThemeContext)

  return(
    <>
      <div className={`h-screen w-screen md:w-3/12 ${theme === `dark` ? `bg-dark-secondary` : `bg-light-secondary`} text-2xl md:text-xl`}>
        <Topbar />
        <ChatsList />
      </div>
    </>
  ) 
}