import ChatMessage from "./ChatMessage";

export default function UserChatMessages({userId, messages}){

    return(
        <>
            <div className="h-full w-full flex items-center">
                <div className="h-5/6 w-full">
                    {messages.map(m => (
                        <ChatMessage key={m.chat_id} userId={userId} senderId={m.chat_id} msg={m.message} timeAt={m.created_at}/>
                    ))}
                </div>
            </div>
        </>
    )
}