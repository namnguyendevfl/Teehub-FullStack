import React, { useState } from "react";

import { useHistory, Link, useRouteMatch } from "react-router-dom"
import { Switch } from "../../../../../utils/Icons/Main";

export default function NtBkList(props) {
    const {
        ntBkSelected,
        setNtBkSelected, 
        chapSelected, 
        setChapSelected, 
        displayLeftMain, 
        setDisplayLeftMain, 
        displayRightMain, 
        setDisplayRightMain, 
        optionBarUrl,
        setOptionBarUrl   
    } = props


    
    const [ dropdown, setDropdown ] = useState(false);
    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : [];
     notebooks = notebooks.sort((noteA, noteB) => noteA.id - noteB.id)
    const { url } = useRouteMatch();
    const unchosenNtBks = notebooks.filter((ntbk, idx) => (ntBkSelected) ? ntbk.id !== ntBkSelected.id : ntbk.id);
  
    //we can use Link or history.push over here. The difference is with Link, dont put/ in front of url, history.push you need to put "/" in front of url
    // const dropdownNtBkList = notebooks.map((ntbk,idx) => (
    const dropdownNtBkList = unchosenNtBks.map((ntbk,idx) => (
        <li className = "list-group-item p-0 m-0">
        <Link   className = "link"
                    to = {`${url}/${ntbk.title.replaceAll(" ","-")}`} >            
            <button     className = "list-group-item w-100 text-start ps-4"
                        onClick = {(e) => {
                            setNtBkSelected(() => ntbk);
                            setChapSelected(() => undefined);
                            setDropdown(() => !dropdown);
                            window.localStorage.setItem('notebookSelected', JSON.stringify(ntbk));
                            // setOptionBarUrl (() => `${url}/${ntbk.title.replaceAll(" ","-")}`);
                        }}
            > 
                {ntbk.title}
            </button>
            </Link>
        </li>
    ))

    
    return (
        <>
        <div>
        {
                <ul className = "list-group"> 
                <li className = "list-group-item py-1 ntbkInRightMenu d-flex align-items-center justify-content-between"> 
                    <div className = "d-flex align-items-center py-1"> 
                    <h5 className = "d-flex align-items-center m-0"> {
                    ntBkSelected
                    ? <span> { ntBkSelected.title }</span>
                    : <span> Notebooks </span>
                    } 
                    </h5>
                    </div >
                    <button className = "d-flex align-items-center justify-content-center plusBtn"
                        onClick = {(e) => setDropdown(() => !dropdown)}
                    >    
                    <Switch />
                    </button>
                </li>
                {
                    dropdown
                    ?   dropdownNtBkList
                    :   null
                }
                <hr className = "m-0 p-0"/>
                </ul>
        }
        </div>
        </>
    )

}