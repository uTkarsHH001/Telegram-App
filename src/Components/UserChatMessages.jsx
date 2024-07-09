import PropTypes from "prop-types";
import Message from "./Message";

export default function UserChatMessages({toUserId, messages}){
    
    
    return(
        <>
            <div className="h-full w-full flex items-center">
                <div className="h-full p-4 w-full overflow-scroll flex flex-col-reverse">
                    {messages.map(m => (
                        <Message key={m.id} toUserId={toUserId} m={m}/>
                    ))}
                </div>
            </div>
        </>
    )
}

UserChatMessages.propTypes = {
    toUserId: PropTypes.number.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
        chat_id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired
    })).isRequired
};