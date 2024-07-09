import PropTypes from "prop-types";

export default function UserChatMessages({userId, messages}){

    return(
        <>
            <div className="h-full w-full flex items-center">
                <div className="h-full p-4 w-full overflow-scroll">
                    {messages.map(m => (
                        <div key={userId} 
                             className={`w-full text-dark-text my-8 text-2xl md:text-lg`}
                            >
                            <div className="message-content">
                                <div className="message-text">{m.message}</div>
                                <div className="message-meta">
                                    <span className="message-time">{new Date(m.created_at).toLocaleTimeString()}</span>
                                </div>
                            </div>
                        </div>
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