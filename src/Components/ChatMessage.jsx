import PropTypes from "prop-types";

export default function ChatMessage ({ userId, senderId, msg, timeAt }){
    const isReceived = senderId === userId; // Assuming sender_id 1 is the other user
    console.log(senderId + " " + userId);
    return (
        <div className={`text-dark-text my-8 text-2xl`}>
            <div className="message-content">
                {/* <span className="bg-red-100">{isReceived}</span> */}
                <div className="message-text">{msg}</div>
                <div className="message-meta">
                    <span className="message-time">{new Date(timeAt).toLocaleTimeString()}</span>
                </div>
            </div>
        </div>
    )
}

ChatMessage.propTypes = {
    userId: PropTypes.number.isRequired,
    senderId: PropTypes.number.isRequired,
    msg: PropTypes.string.isRequired,
    timeAt: PropTypes.string.isRequired
};
