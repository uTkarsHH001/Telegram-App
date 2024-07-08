import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../context";
import { IsChatOpenContext } from "../context";
import Avatar from "react-avatar";

export default function Chat({id, name, onClick}){
    
    const { theme } = useContext(ThemeContext)
    const { toggleChat } = useContext(IsChatOpenContext)
    
    return(
        <>
            <div onClick={ () => {toggleChat(); onClick();}} className={`flex p-2 text-${theme}-text active:bg-slate-500`}> 
                {/* <img src="/public/telegram.png"  /> */}
                <Avatar name={name} size="65" className="p-1 rounded-full" alt=""/>
                <div className="flex-grow ml-2 p-1 border-b-2 border-black">
                    <h1>{name}</h1>
                    <p className="text-2xl text-slate-400">fjaskdf asfasd f s</p>
                </div>
                <div className="text-lg border-b-2 border-black">
                    <h2>Jun 12</h2>
                    <h2 className={`float-right text-dark-text p-1 bg-slate-600 rounded-full`}>20</h2>
                </div>
            </div>
        </>
    )
}