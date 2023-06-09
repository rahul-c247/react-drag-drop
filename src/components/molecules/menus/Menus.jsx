import { Link } from "react-router-dom";
import './menus.css'

export default function Menus(props){
    return(
        <ul className="menu">
            <li><Link to="">Menu item 1</Link></li>
            <li><Link to="">Menu item 1</Link></li>
            <li><Link to="">Menu item 1</Link></li>
            <li><Link to="">Menu item 1</Link></li>
            <li><Link to="">Menu item 1</Link></li>
        </ul>
    )
}