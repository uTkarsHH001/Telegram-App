
export default function Button({Icon, onClick}){

    return(
        <>
            <button onClick={onClick} className="active:bg-slate-500 hover:bg-slate-500 p-4 active:rounded-full hover:rounded-full">{<Icon/>}</button>
        </>
        )
    }