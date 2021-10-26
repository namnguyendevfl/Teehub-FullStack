import React, { useState } from "react";
import { Plus } from "../../../../../../utils/Icons/Main";


export default function CreateTopic() {
    let chapterSelected = window.localStorage.getItem('chapterSelected');
    chapterSelected = JSON.parse(chapterSelected);
    const initTopic = {
        userId: `${chapterSelected.userId}`,
        bookId: `${chapterSelected.bookId}`,
        chapterId: `${chapterSelected.id}`,
        id: "",
        title: "",
        content:"",
    }

    const [newTopic, setNewTopic] = useState(initTopic);

    const handleChange = ({ target: {name, value}}) => {
        setNewTopic((prevTopic) => ({
            ...prevTopic,
            [name]: value
        }))
    };

    let prevTopics = window.localStorage.getItem('topics');
    prevTopics = JSON.parse(prevTopics);
    prevTopics = (prevTopics !== null) ? prevTopics : []
    // console.log(newNtBk);
    const handleSubmit = ((event) => {
        event.preventDefault();
        prevTopics.push(newTopic)
        // window.localStorage.removeItem('topics')
        window.localStorage.setItem('topics', JSON.stringify(prevTopics))
    })
    // console.log(prevTopics)
    return (
        <>
        <form 
            className = "d-flex justify-content-between"
            onSubmit = {handleSubmit}>
                <input  
                className = "number"
                id = "id"
                name = "id"
                placeholder = "#"
                value = {newTopic.id}
                onChange = {handleChange}
                >
                </input>
                <input
             
                id = "title"
                name = "title"
                placeholder = "Add a topic"
                value = {newTopic.title}
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