import React, { useState } from "react";
import Dlt from "./Dlt";
import DltChapter from "./DltChapter";
import DltNoteBook from "./DltNoteBook";
import DltTopic from "./DltTopic";



export default function Delete({ subChgSelected, setSubChgSelected, setOptionNav }) {
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



    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : []

    let chapters = window.localStorage.getItem('chapters');
    chapters = JSON.parse(chapters);
    chapters = (chapters) ? chapters : []

    let topics = window.localStorage.getItem('topics');
    topics = JSON.parse(topics);
    topics = (topics) ? topics : []

    

    switch (subChgSelected) {
        case "Notebook":
           return <DltNoteBook option = {"notebook"} />
           

        case "Chapter" :
            return (
            <>

                <DltChapter option = {'chapter'} />
            </>
            )
        
        case "Topic" :
            return (
                <>
                <DltTopic />
            </>
            )
            
        
        default:
            return <ul className = "list-group">
            {listOption}
        </ul>  
    }
}