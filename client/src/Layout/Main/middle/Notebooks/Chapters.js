import React, { useState } from "react";
import CreateChapter from "./CreateChapter";

import CreateTopicContent from "./CreateTopicContent";
import Topics from "./Topics";
import ViewNtBk from "./ViewNtBk";

export default function Chapters({ntBkSelected}) {

    const [ chapSelected, setChapSelected ] = useState()
    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : []
    let chapters = window.localStorage.getItem('chapters');
    chapters = JSON.parse(chapters);
    chapters = (chapters) ? chapters : []
    let topics = window.localStorage.getItem('topics');
    topics = JSON.parse(topics);
    topics = (topics) ? topics : []

    console.log(chapters)
    const chapsSelected = chapters.filter((chapter, idx) => chapter.bookId === ntBkSelected.id);
    console.log(chapsSelected)
    const chapterList = chapsSelected.map((chap,idx) => (
        <li className = "list-group-item m-0 p-0 w-100">
            <button className = "list-group-item w-100 m-0 text-start"
                    onClick = {(e) => {
                        e.preventDefault();
                        setChapSelected (() => chap);
                    }}
            > 
                C{chap.id}: {chap.title}
            </button>
        </li>
    ))
    
    return (
        <>
        {
        chapSelected !== undefined
        ?   <Topics   ntBkSelected = {ntBkSelected}
                        chapSelected = {chapSelected}
                        />
        // ?   <Topics
        :  ( <>
            <ul className = "list-group m-0 p-0">
                {chapterList}
                
            </ul>
            <CreateChapter ntBkSelected = {ntBkSelected}/>
        </>)
        }
        </>
    )
}