import React, { useState } from "react";
import { LeftArrow, Escape, ArrowBarLeft } from "../../../../../../utils/Icons/Main";
import { useHistory } from "react-router-dom"

export default function Swap(props) {
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
        selectNtBk,
        setSelectNtBk 
    } = props
    const [ swappedNoteBook, setSwappedNoteBook ] = useState()
    //Create a state variable so that we can set it up to undefined when clicking on return button
    const [ selectedNotebook, setSelectedNotebook ] = useState(selectNtBk)
    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : [];
    notebooks = notebooks.sort((noteA, noteB) => noteA.id - noteB.id)

   
    console.log("swap notebook", swappedNoteBook)
    let swappedNoteBooks = (swappedNoteBook) => {
        let swapedNoteBooks
        if (swappedNoteBook) {
            swapedNoteBooks = notebooks.reduce((acc, notebook, idx) => {
                // if (notebook.id !== selectNtBk.id && notebook.id !== swappedNoteBook.id)
                if (notebook.id !== selectedNotebook.id && notebook.id !== swappedNoteBook.id)
                acc.push(notebook);
                return acc
            },[])
            // newNoteBooks.push(selectNtBk, swappedNoteBook)
            swapedNoteBooks.push(selectedNotebook, swappedNoteBook)
            swapedNoteBooks = swapedNoteBooks.sort((noteA, noteB) => noteA.id - noteB.id)
        }
        return swapedNoteBooks
    }
    
    const newNoteBooks = (swappedNoteBook) ? swappedNoteBooks(swappedNoteBook) : notebooks;
    const notebookLists = newNoteBooks.map((notebook, idx) => (
        <li key = {idx} 
            className = "list-group-item addList d-flex align-items-center justify-content-between py-1 pe-4"
        >    
            {
                // (selectNtBk.title === notebook.title) &&  (selectNtBk.id === notebook.id)
                (selectedNotebook.title === notebook.title) &&  (selectedNotebook.id === notebook.id)
                ?   <span className ="text-primary fw-bolder"> {notebook.title} </span>
                :   <>
                        {swappedNoteBook && swappedNoteBook.id === notebook.id
                        ? <span className ="text-success fw-bolder"> {notebook.title} </span>
                        : <span className =""> {notebook.title} </span>
                        }
                        <button className = "plusBtn d-flex align-items-center justify-content-center"
                            onClick = {(e) => {
                                e.preventDefault();
                                // setSelectNtBk((prevNtBk) => ({
                                setSelectedNotebook((prevNtBk) => ({
                                    ...prevNtBk,
                                    id: notebook.id
                                }))
                                setSwappedNoteBook (() => ({
                                    ...notebook,
                                    id: selectedNotebook.id
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
                        onClick = {(e) => {
                            setDisplayAddOption(() => !displayAddOption)
                            setSwappedNoteBook(() => undefined)
                            setSelectedNotebook(() => undefined)
                        }}
                >
                    <LeftArrow />
                </button>
            </div>
            <h5 className = "col-8 text-center m-0 py-3"> Swap notebook</h5>
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
        </button>
        </div>
        </>
    )
}