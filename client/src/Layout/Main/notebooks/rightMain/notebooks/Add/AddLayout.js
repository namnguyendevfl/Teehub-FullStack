import React, { useState } from "react"
import { Escape, Plus, List, ArrowBarBottom } from "../../../../../../utils/Icons/Main"
import { useHistory } from "react-router";
import AddList from "./AddList";

export default function AddLayout(props){
    const {
        option,
        ntBkSelected,
        setNtBkSelected, 
        chapSelected, 
        setChapSelected, 
        displayLeftMain, 
        setDisplayLeftMain, 
        displayRightMain, 
        setDisplayRightMain, 
        optionBarUrl,
        setOptionBarUrl,
        dropdown, 
        setDropdown,
        displayAddOption,
        setDisplayAddOption,
        newNtBk,
        setNewNtBk,
    } = props
    const handleChange = ({target: { name, value }}) => {
        setNewNtBk((prevNtBk) => ({
            ...prevNtBk,
            [name]: value,
            id: notebooks.length + 1
        }))
    }
  
    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : [];
    notebooks = notebooks.sort((noteA, noteB) => noteA.id - noteB.id)
    
    const history = useHistory();  
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/notebooks");
        notebooks.push(newNtBk);
        setDropdown(() => !dropdown)
        window.localStorage.setItem('notebooks', JSON.stringify(notebooks))
    };
    return (
        <>    
    <div className="row d-flex text-aligns-center m-0 justify-content-center">    
        <div className = "col-2"></div>
        <h5 className = "col-8 text-center m-0 py-3">Create notebook</h5>
        <div className = "col-2 m-0  d-flex align-items-center justify-content-end">
            <button className = "d-block plusBtn d-flex align-items-center p-2 "
                    onClick = {(e) => setDropdown (() => !dropdown)}
            >
                <Escape />
            </button>
        </div>
    </div>
    <hr className =" m-0 p-0"/>

    <form className = ""
    onSubmit = {handleSubmit}>
    <div>

        <input
            className = "list-group-item createInput px-3 text-start w-100"
            id = "title"
            name = "title"
            placeholder = "Write a notebook title"
            value = {newNtBk.title}
            onChange = {handleChange}
            >
        </input>
    </div>

    <div className = "position-absolute bottom-0 text-center w-100 px-3">
        <div className = "py-1 w-100 d-flex justify-content-between">
            <p className = "m-0 "> Add to your note </p>
            <div>
            <button className = "plusBtn d-flex justify-content-center align-items-center"
                    onClick = {(e) => {
                        e.preventDefault();
                        setDisplayAddOption (() => !displayAddOption);
                    }}
            >
                <List />
            </button>

            </div>

        </div>
        <button 
            className = "save mb-3 list-group-item w-100 d-flex align-items-center justify-content-center text-center"
            type = "submit"
            >
            Save
            {/* <Plus /> */}
        </button>
    </div>
</form>
</>
    )
}