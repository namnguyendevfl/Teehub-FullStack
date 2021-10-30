import React, { useState } from "react";
import { ListToDlt } from "../../../../../utils/notebook/MkChg";
import { Escape } from "../../../../../utils/Icons/Main"
import { useHistory } from "react-router";

export default function DltTopic(props){
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
        setDropdown 
    } = props

    const [ topicDlted, setTopicDlted ] = useState () 
    let topics = window.localStorage.getItem('topics');
    topics = JSON.parse(topics);
    topics = (topics) ? topics : []   
    
    const selectedTopics = topics.filter((topic, idx) => ntBkSelected && chapSelected && topic.bookId === ntBkSelected.id && topic.chapterId === chapSelected.id)
    const newTopics = (!topicDlted) ? topics : topics.filter((topic, idx) => {
        if (topic.bookId === topicDlted.bookId) {
            if (topic.chapterId === topicDlted.chapterId){
                return topic.id !== topicDlted.id
            } else return topic
        } else return topic  
    })
    let chapterUrl = window.localStorage.getItem('chapterUrl');
        chapterUrl = JSON.parse(chapterUrl);
    const history = useHistory();
    return (
    <>
            <div className="row d-flex text-aligns-center m-0 justify-content-center">
            <div className = "col-2"></div>
            <h5 className = "col-8 text-center m-0 py-3">Delete topic</h5>
            <div className = "col-2 m-0 d-flex align-items-center justify-content-end">
                <button className = "d-block plusBtn d-flex align-items-center p-2 "
                        onClick = {(e) => setDropdown (() => !dropdown)}
                >
                    <Escape />
                </button>
            </div>
        </div>
        <hr className =" m-0 p-0"/>
        <div className = "boxList">
        {ListToDlt(selectedTopics, `topics`, topicDlted, setTopicDlted)}
        </div>
        <div className = "position-absolute bottom-0 text-center w-100 px-3">
        <button 
            className = "mb-3 save list-group-item w-100 d-flex align-items-center justify-content-center text-center "
            type = "submit"
            onClick = {
                (e) => {
                    e.preventDefault();
                    history.push(`${chapterUrl}`);
                    window.localStorage.setItem('topics', JSON.stringify(newTopics))
                }
            }
            >
            Save
            {/* <Plus /> */}
        </button>
        </div>
      
    </>
    )
}