import React, { useState } from "react";
import { Dropdown } from 'react-bootstrap';
import { CaretDown, Trash } from "../../../../../../../utils/Icons/Main";

export default function Dlt({option}) {
    // console.log(option);
    const [ dropdown, setDropdown ] = useState(false); 
    const [ selects, setSelects ] = useState ([]) 
    // const [ select, setSelect ] = useState (`Select the ${option}`) 
    // const [ chapDropdown, setChapDropdown ] = useState(false);
    // const [ selectNtBk, setSelectNtBk ] = useState (`Select the ${option}`)
    // const [ selectChap, setSelectChap ] = useState (`Select the ${chapter}`)
    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : []
    // console.log(notebooks)
    const list = (options) => {
        return options.map((option,idx) => 
        <li 
        href="#/action-1"
        className = "list-group-item m-0 p-0"
        >
        <button className = "list-group-item w-100 text-start"
            onClick = {(e) => {
                setSelects ((selects) => selects.concat(option))
                setDropdown(() => false)
            }}
        > {option.title}
        </button>
        </li>
    )
    }

    const selectedList = selects.map((select, idx) => (
        <ul className = "list-group">
        <li className = "dlt me-0 py-1 pe-2 list-group-item d-flex align-items-center justify-content-between">
            <span>{select.title} </span>
            <button className = "dltBtn d-flex align-items-center justify-content-center"> <Trash />  </button>
        </li>
        </ul>
    ))
    
    
    let chapters = window.localStorage.getItem('chapters');
    chapters = JSON.parse(chapters);
    chapters = (chapters) ? chapters : []

    let topics = window.localStorage.getItem('topics');
    topics = JSON.parse(topics);
    topics = (topics) ? topics : []
    // console.log(chapters)
    // const listChapters = chapters.map((chapter,idx) => 
    //     <Dropdown.Item 
    //     href="#/action-1"
    //     className = "list-group-item"
    //     >
    //     {chapter.title}
    //     </Dropdown.Item>
    // )

    
    return (
        <>
        <ul className = "list-group">
            <li className = "list-group-item m-0 p-0">
            <button className = "list-group-item w-100 text-start d-flex justify-content-between align-items-center"
                    onClick = {() => setDropdown(() => !dropdown)}
                >
                {/* <h6 className = "list-group-item w-100 text-start d-flex justify-content-between align-items-center">  */}
                {/* {select} */}
                Select the notebook
                <CaretDown /> 
                {/* </h6> */}
            </button>
            </li>
            { dropdown && option === "notebook"
            ? list(notebooks)
            : null
            }
            {
                (selects.length)
                ? selectedList
                : null
            }
        </ul>
        {/* <Dropdown>
            <Dropdown.Toggle 
                className = "w-100 dropdown list-group-item text-start"
                // variant="secondary" 
                // id="dropdown-basic"
                >
                Select the book
            </Dropdown.Toggle>

            <Dropdown.Menu className = "p-0 m-0 w-100">
                {listNoteBooks}
            </Dropdown.Menu>
        </Dropdown> */}
        </>
    )
}