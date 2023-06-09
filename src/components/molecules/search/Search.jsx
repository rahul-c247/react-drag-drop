import Input from "../../atoms/input/Input"
import Button from "../../atoms/button/Button"
import './search.css'


export default function SearchBar(){
    return(
        <div className="search_bar">
            <Input type="text" placeholder="Enter keyword for search"/>
            <Button>Search</Button>
        </div>
    )
}