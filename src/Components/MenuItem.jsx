
export default function MenuItme({Icon, name}){

    return (
        <>
            <div className="p-3 flex gap-5 text-2xl hover:bg-slate-700 active:bg-slate-700">
                {<Icon />}
                <p>{name}</p>
            </div>
        </>
    )
}