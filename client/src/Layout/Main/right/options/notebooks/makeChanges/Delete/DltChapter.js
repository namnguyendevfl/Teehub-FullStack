import React, { useState } from "react";

import { CaretDown } from "../../../../../../../utils/Icons/Main";
import { ListToDlt, list } from "../../../../../../../utils/notebook/MkChg";

export default function DltChapter({option}) {
    
    const [ ntBkDropdown, setNtBkDropdown ] = useState(false);
    const [ chapDropdown, setChapDropdown ] = useState(false); 
    const [ chapsSelected, setChapsSelected ] = useState ([]);  
    const [ ntBkSelected, setNtBkSelected] = useState()

    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : []    
    
    let chapters = window.localStorage.getItem('chapters');
    chapters = JSON.parse(chapters);
    chapters = (chapters) ? chapters : []

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
                : chapsSelected.length
                    ? <>
                        <li className = "list-group-item m-0 p-0">
                        <button className = "list-group-item w-100 text-start d-flex justify-content-between align-items-center"
                                onClick = {() => setChapDropdown(() => !chapDropdown)}
                            >
                            Select the chapter
                            <CaretDown /> 
                            {/* </h6> */}
                        </button>
                        </li>
                        { chapDropdown 
                            ? ListToDlt(chapsSelected, `chapters`)
                            : null
                        }
                        </>
                    : null
            }
        </ul>
        </>
    )
}


