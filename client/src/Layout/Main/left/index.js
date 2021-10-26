import React from "react";
import { useHistory } from "react-router";

export default function LeftMainLayout() {
    const options = ['Notebooks', 'Flashcards', 'Practice']
    const history = useHistory();
    
    const menuList = options.map((option, idx) => {
        const handleClick = (e) => {
            // e.preventDefault();
            if (option === "Notebooks") history.push("/notebooks")
        }
        return(
        <li className = "list-group-item m-0 p-0">
            <button className = "list-group-item w-100 text-start"
                    onClick = {handleClick}
            >
                <span className = "text-start w-100"> {option} </span>
            </button>
        </li>
    )})
    return (
        <ul className = "list-group">
            {menuList}
        </ul>
    )
}