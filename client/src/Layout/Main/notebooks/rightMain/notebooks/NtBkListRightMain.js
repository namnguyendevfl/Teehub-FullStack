import React, { useState } from "react";
import { useHistory, Link, useRouteMatch } from "react-router-dom"
import { SwitchNoteBook, Switch } from "../../../../../utils/Icons/Main";
import { Notebooks } from "../../../../../utils/notebook/MkChg";

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

    const [ switchNtbk, setSwitchNtbk ] = useState(false);
    const notebooks = Notebooks.getList();
    const { url } = useRouteMatch();
    const unchosenNtBks = notebooks.filter((ntbk, idx) => (ntBkSelected) ? ntbk.id !== ntBkSelected.id : ntbk.id);
    //we can use Link or history.push over here. The difference is with Link, dont put/ in front of url, history.push you need to put "/" in front of url
    // const dropdownNtBkList = notebooks.map((ntbk,idx) => (
    const dropdownNtBkList = unchosenNtBks.map((ntbk,idx) => (
        <li className = "list-group-item bg-transparent p-0 m-0">
        {/* <Link   className = "link"
                    to = {`${url}/${ntbk.title.replaceAll(" ","-")}`} >             */}
            <button     className = "ntbkDropdown bg-transparent list-group-item w-100 text-start"
                        onClick = {(e) => {
                            setNtBkSelected(() => ntbk);
                            setChapSelected(() => undefined);
                            setSwitchNtbk(() => !switchNtbk);
                            window.localStorage.setItem('notebookSelected', JSON.stringify(ntbk));
                            // setOptionBarUrl (() => `${url}/${ntbk.title.replaceAll(" ","-")}`);
                        }}
            > 
                <span style = {{fontSize : "15px"}} className = "text-white"> {ntbk.title} </span>
            </button>
            {/* </Link> */}
        </li>
    ))

    window.addEventListener("click",({target}) => {
        const targetId= target.id
        if (targetId !== "switchNtbk") 
        return setSwitchNtbk(() => false)
    }) 

    return (
        <>
        <div>
                <ul className = "list-group"> 
                <li className = "ntbkBar list-group-item bg-transparent py-1 d-flex align-items-center justify-content-between"> 
                    <div className = "d-flex align-items-center py-1"> 
                    <h5 className = "d-flex align-items-center m-0"> {
                    ntBkSelected
                    ? <span className = "fs-6"> { ntBkSelected.title }</span>
                    : <span className= "fs-6 "> Notebooks </span>
                    } 
                    </h5>
                    </div >
                    <button className = "ntbkBtn"
                            id = "switchNtbk"
                            onClick = {(e) => setSwitchNtbk(() => !switchNtbk)}
                    >    
                   
                    <Switch 
                        switchNtbk = { switchNtbk }
                        setSwitchNtbk = { switchNtbk }
                    />
                    </button>
                </li>
                </ul>
                {
                    switchNtbk
                    ?   
                        <ul className = "list-group dropdownListBox">
                            {dropdownNtBkList}
                        </ul>    
                    
                    :   null
                }
    
       
        </div>
        </>
    )

}