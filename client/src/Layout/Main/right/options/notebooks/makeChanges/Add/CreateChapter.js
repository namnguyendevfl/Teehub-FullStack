import React, { useState } from "react";
import { Plus, CaretDown } from "../../../../../../../utils/Icons/Main";
import { list } from "../../../../../../../utils/notebook/MkChg";

export default function CreateChapter() {
    const [ ntBkDropdown, setNtBkDropdown ] = useState(false);
    const [ chapsSelected, setChapsSelected ] = useState ([]);  
    const [ ntBkSelected, setNtBkSelected] = useState()

    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : []    
    
    let chapters = window.localStorage.getItem('chapters');
    chapters = JSON.parse(chapters);
    chapters = (chapters) ? chapters : []
    // id of ntbkSelected will become bookId of a newChap
    const { userId = " ", id = " "} = (ntBkSelected !== undefined) ? ntBkSelected : " ";
    const initChap = {
        id: "",
        title: "",
        content:"",
    }
    const [newChap, setNewChap] = useState(initChap);

    const handleChange = ({ target: {name, value}}) => {
        setNewChap((prevChap) => ({
            ...prevChap,
            [name]: value,
            userId: `${userId}`,
            bookId: `${id}`,
        }))
    };

    let prevChapters = window.localStorage.getItem('chapters');
    prevChapters = JSON.parse(prevChapters);
    prevChapters = (prevChapters !== null) ? prevChapters : []
    // console.log(newNtBk);

    const handleSubmit = ((event) => {
        event.preventDefault();
        prevChapters.push(newChap)
        window.localStorage.setItem('chapters', JSON.stringify(prevChapters))
    })

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
            : null
        }
        </ul>

        {ntBkSelected && ntBkDropdown === false &&
        <>
        <hr className = "m-0 p-0"/>
        <form   onSubmit = {handleSubmit}
                className = "d-flex justify-content-between align-items-center px-2"
                >   
            {/* <div > */}
          
            <input  
                className = "number"
                id = "id"
                name = "id"
                placeholder = "#"
                value = {newChap.chapterId}
                onChange = {handleChange}
            >
            </input>
            <input
                className = "list-group-item ps-0 createInput"
                id = "title"
                name = "title"
                placeholder = "Add a chapter"
                value = {newChap.title}
                onChange = {handleChange}
            >
            </input>         
            <button 
                className = "p-0 plusBtn d-flex align-items-center justify-content-center"
                type = "submit">
                <Plus />
            </button>
            {/* </div> */}
        </form>
        </>
        } 
        </>
    )
}