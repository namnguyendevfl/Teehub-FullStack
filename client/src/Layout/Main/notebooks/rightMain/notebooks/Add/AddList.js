import React, { useState } from "react";
import { LeftArrow, Escape, ArrowBarLeft } from "../../../../../../utils/Icons/Main";
import { useHistory } from "react-router-dom"


export default function AddList(props) {
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
    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : [];
    notebooks = notebooks.sort((noteA, noteB) => noteA.id - noteB.id)
 
    const found = notebooks.find((notebook, idx) => notebook.id === newNtBk.id)
    let newNoteBooks = []
    if(newNtBk.title !== ""){
        if (!found) {
            notebooks.push(newNtBk)
            newNoteBooks = notebooks;
        } else {
            const firstHalf = notebooks.filter((notebook, idx) => newNtBk.id > notebook.id)
            const secondHalf = notebooks.reduce((acc, notebook, idx) => {
                if (notebook.id === newNtBk.id || notebook.id > newNtBk.id){
                    acc.push ({...notebook,
                        id : idx + 2
                    })
                }
                return acc
            }, [])
            newNoteBooks = firstHalf.concat(secondHalf)
            newNoteBooks.push(newNtBk)
        }} else {
            newNoteBooks = notebooks;
    }
    console.log(newNtBk);
    console.log(newNoteBooks)
    newNoteBooks = newNoteBooks.sort((noteA, noteB) => noteA.id - noteB.id)
    const notebookLists = newNoteBooks.map((notebook, idx) => (
        <li key = {idx} 
            className = "list-group-item addList d-flex align-items-center justify-content-between py-1 pe-4"
        >    
            {
                (newNtBk.title === notebook.title) &&  (newNtBk.id === notebook.id)
                ? <h6 className ="text-primary"> {notebook.title} </h6>
                :   <>
                        {notebook.title}
                        <button className = "plusBtn d-flex align-items-center justify-content-center"
                            onClick = {(e) => {
                                e.preventDefault();
                                setNewNtBk((prevNtBk) => ({
                                    ...prevNtBk,
                                    id: idx + 1
                                }))
                            }}
                        >
                            <ArrowBarLeft />
                        </button>
                    </>
            }
        </li>
    ))


const history = useHistory();
const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/notebooks");
    setDropdown(() => !dropdown)
    window.localStorage.setItem('notebooks', JSON.stringify(newNoteBooks))
};
    return (
        <>

        <div className="row d-flex text-aligns-center m-0 justify-content-center">    
    
            <div className = "col-2 m-0 ps-2 d-flex align-items-center">
                <button className = "d-block plusBtn d-flex align-items-center p-0 "
                        onClick = {(e) => setDisplayAddOption(() => !displayAddOption)}
                >
                    <LeftArrow />
                </button>
            </div>
            <h5 className = "col-8 text-center m-0 py-3"> Rearrange order</h5>
            <div className = "col-2 m-0  d-flex align-items-center justify-content-end">
            <button className = "d-block plusBtn d-flex align-items-center p-2 "
                    onClick = {(e) => setDropdown (() => !dropdown)}
            >
                <Escape />
            </button>
        </div>
        </div>
<hr className =" m-0 p-0"/>
        <ul className = "list-group boxList">
            {notebookLists}
        </ul>
        <div className = "position-absolute bottom-0 text-center w-100 px-3">
        <button 
            className = "mb-3 save list-group-item w-100 d-flex align-items-center justify-content-center text-center "
            type = "submit"
            onClick = {handleSubmit}
            >
            Save
            {/* <Plus /> */}
        </button>
        </div>
        </>
    )
}