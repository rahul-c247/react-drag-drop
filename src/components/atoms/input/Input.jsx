import './input.css'
export default function Input(props){
    return(
        <input 
            type={props.type} 
            placeholder={props.placeholder}
            name={props.name}
            className="input"
            value={props.value}
        />
    )
}