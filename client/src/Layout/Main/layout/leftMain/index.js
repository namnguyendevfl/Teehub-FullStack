import React from "react";
import { useHistory } from "react-router";

export default function LeftMainLayout({setNtBkSelected, setChapSelected}) {
    const options = ['Notebooks', 'Flashcards', 'Practice']
    const history = useHistory();
    
    const menuList = options.map((option, idx) => {
        const handleClick = (e) => {
            setNtBkSelected (() => null)
            setChapSelected (() => null)
            // window.localStorage.setItem('notebooks', JSON.stringify([]))
            // when click on the left menu, it's gonna push to the url bellow
            switch (option) {
                case "Notebooks":  history.push("/notebooks") 
                    break;
                case "Flashcards":  history.push("/flashcards")
                    break;
                case "Practice":  history.push("/practice")
                    break;  
                default: history.push("/home")
                    break;
            }
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