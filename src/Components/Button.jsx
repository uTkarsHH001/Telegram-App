import PropTypes from "prop-types";

export default function Button({Icon, onClick}){

    return(
        <>
            <button onClick={onClick} className="active:bg-slate-500 hover:bg-slate-500 p-4 active:rounded-full hover:rounded-full">{<Icon/>}</button>
        </>
    )
}

Button.propTypes = {
        Icon: PropTypes.elementType.isRequired,
        onClick: PropTypes.func.isRequired
};