import React, { useState } from "react"
import { Escape, Plus, List, ArrowBarBottom } from "../../../../../../utils/Icons/Main"
import { useHistory } from "react-router";
import { Notebooks } from "../../../../../../utils/notebook/MkChg";
import DnD from "../../../../../../utils/notebook/DnD";

export default function EditTitle(props){
    const {
        option,
        dropdown, 
        setDropdown,
        displayAddOption,
        setDisplayAddOption,
        newNtBk,
        setNewNtBk,
        selectNtBk,
        setSelectNtBk,
        notebook 
    } = props

    const handleChange = ({target: { name, value }}) => {
        setSelectNtBk((prevNtBk) => ({
            ...prevNtBk,
            [name]: value,
        }))
    }

    console.log(selectNtBk)
    let notebooks = Notebooks.getList()
    notebooks = notebooks.filter((notebook, idx) => notebook.id !== selectNtBk.id)
  
    const history = useHistory();  
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/notebooks");
        notebooks.push(selectNtBk);
        // setDropdown(() => !dropdown)
        Notebooks.saveList(notebooks)
    };

    return (
    <>    
    {/* <form className = "w-100"
        onSubmit = {handleSubmit}>
        <div>

            <input
                className = "list-group-item createInput px-3 text-start w-100"
                id = "title"
                name = "title"
                placeholder = "Write a notebook title"
                value = {selectNtBk.title}
                onChange = {handleChange}
                >
            </input>
        </div>
    </form> */}
</>
    )
}