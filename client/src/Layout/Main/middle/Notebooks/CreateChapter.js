import React, { useState } from "react";
import { Plus } from "../../../../utils/Icons/Main";



export default function CreateChapter({ntBkSelected}) {
    let noteBookSelected = window.localStorage.getItem('noteBookSelected');
    noteBookSelected = JSON.parse(noteBookSelected);
    console.log(noteBookSelected)
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
        // window.localStorage.removeItem('chapters')
        window.localStorage.setItem('chapters', JSON.stringify(prevChapters))
    })
    console.log(prevChapters)
    return (
        <>
        <form className = "d-flex justify-content-between align-items-center px-2 "
        onSubmit = {handleSubmit}
        >   
            
            <input  
                className = "number ps-1"
                id = "id"
                name = "id"
                placeholder = "#"
                value = {newChap.chapterId}
                onChange = {handleChange}
            >
            </input>
            <input
                className = "list-group-item createInput ps-0 text-start w-100"
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
            
        </form>
        </>
    )
}