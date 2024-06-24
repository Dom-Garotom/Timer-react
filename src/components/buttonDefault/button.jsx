import './style.css'

export default function ButtonDefault(prop){
    return(
        <>
            <button onClick={prop.onClick} className={prop.modelo}>{prop.content}</button>
        </>
    )
}