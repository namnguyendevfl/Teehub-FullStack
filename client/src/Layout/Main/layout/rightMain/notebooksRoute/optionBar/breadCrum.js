import React from "react";
import { ThreeDots, Plus, Trash, Edit, Search } from "../../../../../../utils/Icons/Main";


export default function BreadCrum({option, setOption, dropdown, setDropdown}) {
    const handleClick = ({target}) => {
        setOption(() => target.id);
        setDropdown(() => true);      
    }
    return (
        <>
        <div className = "optionBar d-flex align-items-center justify-content-center">
            <div className = "ms-1 ntbkBtn">
                <button className = "p-0 ntbkBtn"
                        id = "search"
                        onClick = {handleClick}
                > 
                <Search />
            </button>
            </div>
        
        <div className = "ms-1 ntbkBtn">
                <button className = "p-0 ntbkBtn"
                    id = "add"
                    onClick = {handleClick}                 
            > 
            <Plus />
            </button>
        </div>

        <div className = "ms-1 ntbkBtn">
                <button className = "p-0 ntbkBtn"
                    id= "trash"
                    onClick = {handleClick}
            > 
            <Trash />
            </button>
        </div>

        <div className = "ms-1 ntbkBtn">
                <button className = "p-0 ntbkBtn"
                    id = "edit"
                    onClick = {handleClick}
            > 
            <Edit />
            </button>
        </div>

        <div className = "ms-1 ntbkBtn">
                <button className = "p-0 ntbkBtn"
                    id = "more"
                    onClick = {handleClick}
            > 
            {ThreeDots()} 
            </button>
        </div>
        
        </div>
    </>
    )

}