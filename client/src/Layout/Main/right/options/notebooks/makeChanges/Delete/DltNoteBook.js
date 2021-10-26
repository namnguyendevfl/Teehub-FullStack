import React, { useState } from "react";
import { Dropdown } from 'react-bootstrap';


import { CaretDown, Trash } from "../../../../../../../utils/Icons/Main";
import { ListToDlt } from "../../../../../../../utils/notebook/MkChg";

export default function DltNoteBook({option}) {
    // console.log(option);
    const [ dropdown, setDropdown ] = useState(false); 
    const [ ntBksSelected, setNtBksSelected ] = useState ([]) 
    
    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : []        
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
            // ? list(notebooks)
            ? ListToDlt(notebooks, `notebooks`)
            : null
            }

        </ul>
        </>
    )
}