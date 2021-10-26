import React, { useState } from "react";
import { CaretDown } from "../../../../../../../utils/Icons/Main";
import { ListToDlt, list } from "../../../../../../../utils/notebook/MkChg";

export default function DltTopic({option}) {
    const [ ntBkDropdown, setNtBkDropdown ] = useState(false);
    const [ chapDropdown, setChapDropdown ] = useState(false); 
    const [ topicDropdown, setTopicDropdown ] = useState(false); 
    const [ chapsSelected, setChapsSelected ] = useState ([]);  
    const [ topicsSelected, setTopicsSelected ] = useState ([]);
    const [ chapSelected, setChapSelected ] = useState ();
    const [ ntBkSelected, setNtBkSelected] = useState()
    

    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : []    
    
    let chapters = window.localStorage.getItem('chapters');
    chapters = JSON.parse(chapters);
    chapters = (chapters) ? chapters : []

    let topics = window.localStorage.getItem('topics');
    topics = JSON.parse(topics);
    topics = (topics) ? topics : []


   
    // const listNtBks = notebooks.map((ntbk,idx) => (
    //     <li 
    //     href="#/action-1"
    //     className = "list-group-item m-0 p-0"
    //     >
    //         <button className = "list-group-item w-100 text-start"
    //             onClick = {(e) => {
    //                 setNtBkSelected(() => ntbk) 
    //                 setNtBkDropdown (() => !ntBkDropdown)
    //                 setChapsSelected (() => chapters.filter((chapter, idx) => ntbk.id === chapter.bookId))
    //             }}
    //         > {ntbk.title}
    //         </button> 
    //     </li>
    // ))
    return (
        <>
        <ul className = "list-group">
            <li className = "list-group-item m-0 p-0">
            <button className = "list-group-item w-100 text-start d-flex justify-content-between align-items-center"
                    onClick = {() => {
                        setNtBkDropdown(() => !ntBkDropdown);
                    }}
                >
                {/* <h6 className = "list-group-item w-100 text-start d-flex justify-content-between align-items-center">  */}
                {/* {select} */}
                {
                    ntBkSelected 
                    ? ntBkSelected.title
                    : `Select the notebook` 
                }
                <CaretDown /> 
                {/* </h6> */}
            </button>
            </li>
            { ntBkDropdown 
                ? list(notebooks, setNtBkSelected, setNtBkDropdown, ntBkDropdown, setChapsSelected, chapters)
                // ? listNtBks
                : chapsSelected.length
                    ? <>
                        <li className = "list-group-item m-0 p-0">
                        <button className = "list-group-item w-100 text-start d-flex justify-content-between align-items-center"
                                onClick = {() => setChapDropdown(() => !chapDropdown)}
                            >
                                {
                                    chapSelected && (ntBkSelected.id === chapSelected.bookId) 
                                    ? chapSelected.title
                                    : `Select the chapter` 
                                }
                            <CaretDown /> 
                            {/* </h6> */}
                        </button>
                        </li>
                        { chapDropdown 
                            
                            ? list(chapsSelected, setChapSelected, setChapDropdown, chapDropdown, setTopicsSelected, topics)
                            // ? listChapters
                            // : chapSelected
                            : topicsSelected.length && (ntBkSelected.id === chapSelected.bookId) 
                                ? <>
                                    <li className = "list-group-item m-0 p-0">
                                    <button className = "list-group-item w-100 text-start d-flex justify-content-between align-items-center"
                                            onClick = {() => setTopicDropdown(() => !topicDropdown)}
                                        >
                                        Select the topic
                                        <CaretDown /> 
                                        {/* </h6> */}
                                    </button>
                                    </li>
                                    { topicDropdown
                                        ? ListToDlt(topicsSelected, "topics")
                                        : null
                                    }
                                    </>
                                : null
                            }
                        </>
                    : null
                }
            </ul>
        </>
    )
}


