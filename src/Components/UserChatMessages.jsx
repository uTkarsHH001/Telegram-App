import ChatMessage from "./ChatMessage";
import PropTypes from "prop-types";

export default function UserChatMessages({userId, messages}){

    return(
        <>
            <div className="h-full w-full flex items-center">
                <div className="h-full p-4 mb-6 w-full overflow-scroll">
                    {messages.map(m => (
                        <ChatMessage key={m.chat_id} userId={userId} senderId={m.chat_id} msg={m.message} timeAt={m.created_at}/>
                    ))}
                </div>
            </div>
        </>
    )
}

UserChatMessages.propTypes = {
    userId: PropTypes.number.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
        chat_id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired
    })).isRequired
};