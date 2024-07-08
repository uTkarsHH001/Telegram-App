import ChatMessage from "./ChatMessage";

export default function UserChatMessages({Messages}){

    return(
        <>
            <div className="h-full w-full flex items-center">
                <div className="h-5/6 w-full">
                    {Messages.map(msg => (
                        <ChatMessage key={msg.id} />
                    ))}
                </div>
            </div>
        </>
    )
}