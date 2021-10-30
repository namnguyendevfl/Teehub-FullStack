import React, { useState } from "react";
import TextareaAutosize from "react-autosize-textarea"
// import { Save } from "../../../../../utils/Icons/Main";

export default function CreateTopicContent({topic, topics, mapIdx}) {
    
    const newTopics = topics.filter((topic, filterIdx) => filterIdx !== mapIdx)
    
    const initState = {
        ...topic,
        content: ""
    }
    const [newTopic, setnewTopic] = useState(initState)
    const handleChange = ({target: {name, value}}) => {
        setnewTopic((prevContent) => ({
            ...prevContent,
            [name]: value
        }))
        
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        newTopics.push(newTopic)
        // window.localStorage.removeItem('topics')
        window.localStorage.setItem('topics', JSON.stringify(newTopics))
    }

    
    return (
        <form onSubmit = {handleSubmit}>
            <TextareaAutosize
                className = "w-100 topicInput"
                type = "textarea"
                id = "content"
                name = "content"
                placeholder = "Write a content..."
                value = {newTopic.content}
                onChange = {handleChange}
            />
            <button 
                className = "text-start plusBtn px-0 d-flex align-items-center justify-content-center"
                type = "submit">
                Save
                {/* <Save /> */}
            </button>
    </form>
    )
}