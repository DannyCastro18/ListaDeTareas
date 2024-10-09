export default function ListTask({ texto }){
    return(
        <>
        <span>✅</span>
        <p className="bg-teal-300">{ texto || "aqui la tarea"}</p>
        <span>❌</span>
        </>
    )
}