import PropTypes from 'prop-types'

export default function Message({toUserId,m}){

    const isReceiver = toUserId === m.sender.id
    return (
        <>
            <div key={toUserId} 
                    className={`w-full text-dark-text my-8 text-2xl md:text-lg flex flex-col  ${isReceiver ? `items-start` : `items-end`}`}
                >
                <div className="w-9/12 overflow-hidden p-2 rounded-lg bg-slate-700">
                    <p>{m.message}
                    </p>
                </div>
                <span className="text-sm">{new Date(m.created_at).toLocaleTimeString()}</span>
            </div>
            
        </>
    )
}

Message.propTypes = {
    toUserId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    m: PropTypes.shape({
        sender: PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        }).isRequired,
        message: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
    }).isRequired,
};