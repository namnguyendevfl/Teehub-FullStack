import React, { useState } from "react";
import { ListToDlt, Notebooks } from "../../../../../utils/notebook/MkChg";
import { Escape } from "../../../../../utils/Icons/Main"
import { useHistory } from "react-router-dom";
export default function DltNtBk(props){
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
        setDropdown 
    } = props
    const [ ntBksDlted, setNtBksDlted ] = useState ([]) 
    const notebooks = Notebooks.getList();
    const ntBksDltedIds = ntBksDlted.map((ntBkDlt, idx) => ntBkDlt.id)
    const newNoteBooks = (!ntBksDlted) ? notebooks : notebooks.filter((notebook, idx) => !ntBksDltedIds.includes(notebook.id))
    const history = useHistory();

    return (
    <>
            <div className="row d-flex text-aligns-center m-0 justify-content-center">
            <div className = "col-2"></div>
            <h5 className = "col-8 text-center m-0 py-3">Delete notebook</h5>
            <div className = "col-2 m-0 d-flex align-items-center justify-content-end">
                <button className = "d-block plusBtn d-flex align-items-center p-2 "
                        onClick = {(e) => setDropdown (() => !dropdown)}
                >
                    <Escape />
                </button>
            </div>
        </div>
        <hr className =" m-0 p-0"/>
        <div className = "boxList">
        {ListToDlt(notebooks, `notebooks`, ntBksDlted, setNtBksDlted)}
        </div>
        <div className = "position-absolute bottom-0 text-center w-100 px-3">
        <button 
            className = "mb-3 save list-group-item w-100 d-flex align-items-center justify-content-center text-center "
            type = "submit"
            onClick = {
                (e) => {
                    e.preventDefault();
                    history.push("/notebooks");
                    Notebooks.saveList(newNoteBooks)
                }
            }
            >
            Save
        </button>
        </div>
      
    </>
    )
}