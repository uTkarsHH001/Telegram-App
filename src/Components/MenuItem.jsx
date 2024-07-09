import PropTypes from "prop-types";

export default function MenuItem({Icon, name}){

    return (
        <>
            <div className="p-3 flex gap-5 text-2xl sm:text-sm md:p-1 hover:bg-slate-700 active:bg-slate-700">
                {<Icon />}
                <p>{name}</p>
            </div>
        </>
    )
}

MenuItem.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    name: PropTypes.string.isRequired
};