import './button.css'
export default function Button(props){
    return(
        <button className={`button ${props.type}`} onClick={props.click}>{props.children}</button>
    )
}