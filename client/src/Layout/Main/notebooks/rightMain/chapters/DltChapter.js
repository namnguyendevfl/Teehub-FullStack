import React, { useState } from "react";
import { ListToDlt } from "../../../../../utils/notebook/MkChg";
import { Escape } from "../../../../../utils/Icons/Main"
import { useHistory } from "react-router";

export default function DltChapter(props){
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

    const [ chapDlted, setChapDlted ] = useState () 
    let chapters = window.localStorage.getItem('chapters');
    chapters = JSON.parse(chapters);
    chapters = (chapters) ? chapters : []   
    
    const selectedChapters = chapters.filter((chapter, idx) => (ntBkSelected) && chapter.bookId === ntBkSelected.id)
    const newChapters = (!chapDlted) ? chapters : chapters.filter((chapter, idx) => {
        if (chapter.bookId === chapDlted.bookId){
            return chapter.id !== chapDlted.id
        } else return chapter
    });
    
    let notebookUrl = window.localStorage.getItem('notebookUrl');
    notebookUrl = JSON.parse(notebookUrl);
    const history = useHistory();
    return (
    <>
            <div className="row d-flex text-aligns-center m-0 justify-content-center">
            <div className = "col-2"></div>
            <h5 className = "col-8 text-center m-0 py-3">Delete chapter</h5>
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
        {ListToDlt(selectedChapters, `chapters`, chapDlted, setChapDlted)}
        </div>
        <div className = "position-absolute bottom-0 text-center w-100 px-3">
        <button 
            className = "mb-3 save list-group-item w-100 d-flex align-items-center justify-content-center text-center "
            type = "submit"
            onClick = {
                (e) => {
                    e.preventDefault();
                    history.push(`${notebookUrl}`);
                    window.localStorage.setItem('chapters', JSON.stringify(newChapters))
                }
            }
            >
            Save
            {/* <Plus /> */}
        </button>
        </div>
      
    </>
    )
}