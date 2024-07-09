import PropTypes from "prop-types";
import { useContext } from "react";
import { IsMenuOptionClickedContext } from "../context";

export default function MenuItem({onClick, Icon, name}){

    const { showClikedMenuOption } = useContext(IsMenuOptionClickedContext)

    return (
        <>
            <button onClick={() => {onClick(); showClikedMenuOption();}} className="p-3 flex gap-5 text-2xl sm:text-sm md:p-1 hover:bg-slate-700 active:bg-slate-700">
                {<Icon />}
                <p>{name}</p>
            </button>
        </>
    )
}

MenuItem.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};