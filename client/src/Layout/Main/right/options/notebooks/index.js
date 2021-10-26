import React, { useState } from "react";
import { Search, LeftArrow, ThreeDots } from "../../../../../utils/Icons/Main";
import MakeChanges from "./makeChanges";


export default function NoteBookOptions() {
    const [displayOptions, setDisplayOptions] = useState(false);
    const [optionNav, setOptionNav] = useState (null);
    const [ntbkOptionSelected, setNtbkOptionSelected] = useState(null);
    const [chgOptnSelected, setChgOptnSelected] = useState(null);
    const [subChgSelected, setSubChgSelected] = useState(null);
    const ntbkOptions = ['Make changes', 'Make exercises', 'Study', 'Need to improve'];
    
    const subOption = (option) => {
        switch (option) {
            case 'Make changes':
                return <MakeChanges setOptionNav = {setOptionNav}
                                    setChgOptnSelected = {setChgOptnSelected}
                                    chgOptnSelected = {chgOptnSelected}
                                    setSubChgSelected = {setSubChgSelected}
                                    subChgSelected = {subChgSelected}
                />
                // return <Add setOptionSelected = {setOptionSelected}/>
            // case 'Add Chapter':
            //     return <AddChapter />
            }
    }

    const handleBack = () => {
        (subChgSelected !== null) ? setSubChgSelected(() => null) : setChgOptnSelected(() => null); 
        (chgOptnSelected !== null) ? setNtbkOptionSelected(() => ntbkOptionSelected) : setNtbkOptionSelected(() => null);
    }
    const selectedOption = (
        <>
        <div className = "d-flex align-items-center text-center my-2 p-0 ps-2">
            <button className = "d-flex align-items-center text-center btn p-0 plusBtn"
                onClick = {handleBack}
            > {LeftArrow()} </button>
            <h5 className = "px-2 my-0"> {optionNav}</h5>
        </div>
        <hr className = "my-0"/>
        {subOption(ntbkOptionSelected)}
        </>
        )    
    
    
   

    const listOptions = ntbkOptions.map((option, idx) => {
        return (
        <>
        <li key = {idx} className = "m-0 p-0 list-group-item">
            <button className = "d-flex list-group-item w-100"
                   onClick = {() => {
                       setNtbkOptionSelected(() => option)
                       setOptionNav(() => option)
                    }}
                >
                {option}
            </button>
        </li>
        </>
    )})
    const options = ntbkOptionSelected ? selectedOption : listOptions
    return (
        <>
         <div className ="ps-2 d-flex justify-content-between align-items-center options">
   
            <div className ="px-2 py-1 d-flex justify-content-between">
                <div className = "optionBtn mx-2"> 
                    <button className = "p-2 optionBtn"> {Search()} </button>
                </div>
                <div className = "optionBtn"> 
                    <button className = "p-2 optionBtn"
                            onClick = {(e) => setDisplayOptions(() => !displayOptions)}
                    > 
                    {ThreeDots()} 
                    </button>
                </div>
                {
                displayOptions
                ?   <ul    
                        className = "bg-white optionBox list-group"
                    >   
                        {options}
                    </ul>
                :   null       
                }
            </div>
        </div>

        
        </>
    )
}