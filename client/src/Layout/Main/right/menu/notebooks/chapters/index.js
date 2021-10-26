import React, { useState } from "react";
import TopicList from "../topics";
import CreateChapter from "./CreateChapter";


export default function ChapterList({ntBkSelected}) {
    const [ chapSelected, setChapSelected ] = useState ()
    const [ displayTopics, setDisplayTopics ] = useState (false)
    let chapters = window.localStorage.getItem('chapters');
    chapters = JSON.parse(chapters);
    chapters = (chapters) ? chapters : [];


    console.log(chapters);
    const chapsSelected = chapters.filter((chapter,idx) => chapter.bookId === ntBkSelected.id)

    const chapterList = (chapsSelected.length !== 0) && chapsSelected.map((chapter, idx) => (
        <>
        <ul className = "list-group">
        <li key = {idx} className = "list-group-item m-0 p-0 border-white"> 
            <button className = "list-group-item w-100 d-flex border-white px-0"
                    onClick = {(e) => {
                        // setDisplayMenu(() => 'Topics');
                        setChapSelected(() => chapter);
                        setDisplayTopics (() => !displayTopics)
                        window.localStorage.setItem('chapterSelected', JSON.stringify(chapter));
                        // window.localStorage.setItem('displayOption', JSON.stringify("Topic"));
                    }}
                    > 
                
                <span className = "text-start ps-3"> C{idx + 1}. {chapter.title} </span>
            </button>
        </li>
        {   
        chapSelected && chapSelected.id === chapter.id && displayTopics &&
        <TopicList 
            ntBkSelected = {ntBkSelected}
            chapSelected = {chapSelected}
        />
            
        }
        </ul>
        </>
    ))
    return (
    <>
    
    <ul className = "list-group">
        {chapterList}
    </ul>

    {/* <div>
        <CreateChapter />
    </div> */}
    </>
    )
}