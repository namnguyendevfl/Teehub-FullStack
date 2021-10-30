import React from "react";
import { ThreeDots, Plus, Trash, Edit, Search } from "../../../../../../utils/Icons/Main";


export default function BreadCrum({option, setOption, dropdown, setDropdown}) {
    const handleClick = ({target}) => {
        setOption(() => target.id);
        setDropdown(() => true);      
    }
    return (
        <>
        <div className = "optionBtnBar list-group-item pb-0 pt-1 d-flex align-items-center justify-content-center">
            <div>
                <button className = "p-2 optionBtn"
                        id = "search"
                        onClick = {handleClick}
                > 
            <Search />
            </button>
            </div>
        
        <div className = "ps-1">
                <button className = "p-0 plusBtn d-flex align-items-center justify-content-center"
                    id = "add"
                    onClick = {handleClick}                 
            > 
            <Plus />
            </button>
        </div>

        <div className = "ps-1">
                <button className = "p-0 plusBtn d-flex align-items-center justify-content-center"
                    id= "trash"
                    onClick = {handleClick}
            > 
            <Trash />
            </button>
        </div>

        <div className = "ps-1">
                <button className = "p-0 plusBtn d-flex align-items-center justify-content-center"
                    id = "edit"
                    onClick = {handleClick}
            > 
            <Edit />
            </button>
        </div>

        <div className = "ps-1">
                <button className = "p-2 optionBtn"
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