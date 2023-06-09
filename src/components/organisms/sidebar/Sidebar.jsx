import SearchBar from "../../molecules/search/Search";
import './sidebar.css'
import Menus from "../../molecules/menus/Menus";

export default function Sidebar(){
    return(
        <div className="sidebar">
            <h2>Logo</h2>
            <SearchBar/>
            <Menus/>
        </div>
    )
}