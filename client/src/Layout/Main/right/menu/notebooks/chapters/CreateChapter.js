import React, { useState } from "react";
import { Plus } from "../../../../../../utils/Icons/Main";


export default function CreateChapter() {
    let noteBookSelected = window.localStorage.getItem('noteBookSelected');
    noteBookSelected = JSON.parse(noteBookSelected);
    console.log(noteBookSelected)
    const initChap = {...noteBookSelected,
        userId: `${noteBookSelected.userId}`,
        bookId: `${noteBookSelected.id}`,
        id: "",
        title: "",
        content:"",
    }

    const [newChap, setNewChap] = useState(initChap);

    const handleChange = ({ target: {name, value}}) => {
        setNewChap((prevChap) => ({
            ...prevChap,
            [name]: value
        }))
    };

    console.log(newChap)
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
        <form 
        onSubmit = {handleSubmit}
        >   
            <div>
                Select book
            </div>
            <div className = "d-flex justify-content-between">
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
            </div>
        </form>
        </>
    )
}