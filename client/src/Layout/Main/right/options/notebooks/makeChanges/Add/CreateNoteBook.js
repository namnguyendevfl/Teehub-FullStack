import React, { useState } from "react";
import { Plus } from "../../../../../../../utils/Icons/Main";



export default function CreateNoteBook({setSubChgBack}) {
    let userIdLogin = window.localStorage.getItem('userId');
    userIdLogin= JSON.parse(userIdLogin);
    const initialChap = {
        userId: `${userIdLogin}`,
        id: "",
        title: "",
        content: "",
    }

    const [newNtBk, setNewNtBk] = useState(initialChap);

    const handleChange = ({ target: {name, value}}) => {
        setNewNtBk((prevNtBook) => ({
            ...prevNtBook,
            [name]: value
        }))
    };

    let prevNoteBooks = window.localStorage.getItem('notebooks');
    prevNoteBooks = JSON.parse(prevNoteBooks);
    prevNoteBooks = (prevNoteBooks !== null) ? prevNoteBooks : []
    // console.log(newNtBk);
    const handleSubmit = ((event) => {
        event.preventDefault();
        prevNoteBooks.push(newNtBk)
        window.localStorage.setItem('notebooks', JSON.stringify(prevNoteBooks))
    })
    
    return (
        <>
        <form className = "d-flex justify-content-between align-items-center px-2 "
            onSubmit = {handleSubmit}>
            <input  className = "number ps-1"
                id = "id"
                name = "id"
                placeholder = "#"
                value = {newNtBk.id}
                onChange = {handleChange}
                >
            </input>
            <input
                className = "list-group-item createInput ps-0 text-start w-100"
                id = "title"
                name = "title"
                placeholder = "Add a book"
                value = {newNtBk.title}
                onChange = {handleChange}
                >
            </input>
            <button 
                className = "p-0 plusBtn d-flex align-items-center justify-content-center"
                type = "submit"
                >
                <Plus />
            </button>
        </form>
        </>
    )
}