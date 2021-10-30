import React, { useState } from "react";
import { LeftArrow, Escape, ArrowBarLeft } from "../../../../../../utils/Icons/Main";
import { useHistory } from "react-router-dom"


export default function AddList(props) {
    const {
        option,
        ntBkSelected,
        setNtBkSelected, 
        chapSelected, 
        setChapSelected, 
        displayLeftMain, 
        setDisplayLeftMain, 
        displayRightMain, 
        setDisplayRightMain, 
        optionBarUrl,
        setOptionBarUrl,
        dropdown, 
        setDropdown,
        displayAddOption,
        setDisplayAddOption,
        newTopic, setNewTopic
    } = props
  
    let originalTopics = window.localStorage.getItem('topics');
    originalTopics = JSON.parse(originalTopics);
    originalTopics = (originalTopics) ? originalTopics : []

    let selectedTopics = originalTopics.filter((topic, idx) => (chapSelected) && topic.bookId === chapSelected.bookId && topic.chapterId === chapSelected.id)
    selectedTopics = selectedTopics.sort((topicA, topicB) => topicA.id - topicB.id)

    const unselectedTopics = originalTopics.filter((topic, idx) => topic.bookId !== chapSelected.bookId || topic.chapterId !== chapSelected.id)
    
    const found = selectedTopics.find((topic, idx) => topic.id === newTopic.id)
    console.log("found", found)
    let newTopics = []
    if (newTopic.title !== "") {
        if (!found) {
            selectedTopics.push(newTopic);
            newTopics = selectedTopics
        } else {
            const firstHalf = selectedTopics.filter((topic, idx) => newTopic.id > topic.id)
            const secondHalf = selectedTopics.reduce((acc, topic, idx) => {
                if (topic.id === newTopic.id || topic.id > newTopic.id){
                    acc.push ({...topic,
                        id : idx + 2})
                }
                return acc
            }, [])
            newTopics = firstHalf.concat(secondHalf)
            newTopics.push(newTopic)
        }
    } else {
        newTopics = selectedTopics
    }
    
    newTopics = newTopics.sort((topicA, topicB) => topicA.id - topicB.id)
    const topicLists = newTopics.map((topic, idx) => (
        <li key = {idx} 
            className = "list-group-item addList d-flex align-items-center justify-content-between py-1 pe-4"
        >    
            {
            (newTopic.title === topic.title) &&  (newTopic.id === topic.id)
            ? <h6 className ="text-primary"> {topic.title} </h6>
            :   <> 
                    {topic.title}
                    <button className = "plusBtn d-flex align-items-center justify-content-center"
                        onClick = {(e) => {
                            e.preventDefault();
                            setNewTopic((prevTopic) => ({
                                ...prevTopic,
                                id: idx + 1
                            }))
                        }}
                    >
                        <ArrowBarLeft />
                    </button>                
                </>
            }
            
        </li>
    ))

let chapterUrl = window.localStorage.getItem('chapterUrl');
chapterUrl = JSON.parse(chapterUrl);
const history = useHistory();

console.log("selectedTopics", selectedTopics)
console.log("unselectedTopics", unselectedTopics)
const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`${chapterUrl}`);
    setDropdown(() => !dropdown)
    const totalTopics = newTopics.concat(unselectedTopics)
    console.log("totalTopics", totalTopics)
    window.localStorage.setItem('topics', JSON.stringify(totalTopics))
};
    return (
        <>

        <div className="row d-flex text-aligns-center m-0 justify-content-center">    
    
            <div className = "col-2 m-0 ps-2 d-flex align-items-center">
                <button className = "d-block plusBtn d-flex align-items-center p-0 "
                        onClick = {(e) => setDisplayAddOption(() => !displayAddOption)}
                >
                    <LeftArrow />
                </button>
            </div>
            <h5 className = "col-8 text-center m-0 py-3"> Rearrange order</h5>
            <div className = "col-2 m-0  d-flex align-items-center justify-content-end">
            <button className = "d-block plusBtn d-flex align-items-center p-2 "
                    onClick = {(e) => setDropdown (() => !dropdown)}
            >
                <Escape />
            </button>
        </div>
        </div>
<hr className =" m-0 p-0"/> 
        {newTopic.content !== "" || newTopic.title != "" &&
            <ul className = "list-group boxList">
                {topicLists}
            </ul>
        }

        <div className = "position-absolute bottom-0 text-center w-100 px-3">
        <button 
            className = "mb-3 save list-group-item w-100 d-flex align-items-center justify-content-center text-center "
            type = "submit"
            onClick = {handleSubmit}
            >
            Save
            {/* <Plus /> */}
        </button>
        </div>
        </>
    )
}