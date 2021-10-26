import React, { useState } from "react";
import CreateChapter from "./CreateChapter";
import CreateNoteBook from "./CreateNoteBook";
import CreateTopic from "./CreateTopic";

export default function Add({ setSubChgSelected, subChgSelected, setOptionNav}) {
    const options = ['Notebook', 'Chapter', 'Topic']
    const listOption = options.map((option, idx) => (
        <li className = "list-group-item m-0 p-0">
            <button className = "list-group-item w-100 text-start"
                    onClick = {() => {
                        setSubChgSelected(() => option);
                        setOptionNav((prev) => {
                            const prevArr = prev.split(" ");
                            return prevArr[0] + " a " + option.toLowerCase()
                        })
                    }}
            > {option} </button>
        </li>
    ))

    switch (subChgSelected) {
        case "Notebook":
           return <CreateNoteBook />

        case "Chapter" :
            return <CreateChapter/>
        
        case "Topic" :
            return <CreateTopic/>
        
        default:
            return <ul className = "list-group">
            {listOption}
        </ul>  
    }
}