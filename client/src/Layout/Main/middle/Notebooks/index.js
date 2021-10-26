import React, { useState } from "react";
import CreateNoteBook from "../../right/options/notebooks/makeChanges/Add/CreateNoteBook";
import Chapters from "./Chapters";
import CreateTopicContent from "./CreateTopicContent";
import ViewNtBk from "./ViewNtBk";

export default function NoteBookLayout({ntBkSelected, setNtBkSelected}) {

    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : []

    // const [ntBkSelected, setNtBkSelected] = useState()

    const ntbkList = notebooks.map((ntBk,idx) => (
        <li className = "list-group-item m-0 p-0 w-100">
            <button className = "list-group-item w-100 m-0 text-start"
                    onClick = {(e) => {
                        e.preventDefault();
                        setNtBkSelected (() => ntBk);
                    }}
            > 
                {ntBk.title}
            </button>
        </li>
    ))
    
    return (
        <>
        {
        ntBkSelected !== undefined
        // ?   <ViewNtBk ntBkSelected = {ntBkSelected}/>
        ?   <Chapters 
                        ntBkSelected = {ntBkSelected}
            />
        :   <ul className = "list-group m-0 p-0">
                {ntbkList}
                <CreateNoteBook />
            </ul>
        }
        </>
    )
}