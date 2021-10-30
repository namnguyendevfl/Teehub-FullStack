import React from "react";
import { RightChevron, LeftChevron } from "../../../../../utils/Icons/Main";
import CreateTopicContent from "./CreateTopicContent";

export default function TopicList(props) {
    const {
        ntBkSelected,
        setNtBkSelected, 
        chapSelected, 
        setChapSelected, 
        displayLeftMain, 
        setDisplayLeftMain, 
        displayRightMain, 
        setDisplayRightMain, 
    } = props

    let ntBkSelectedLcalStorg = window.localStorage.getItem('notebookSelected');
    ntBkSelectedLcalStorg = JSON.parse(ntBkSelectedLcalStorg);
    ntBkSelectedLcalStorg = (ntBkSelectedLcalStorg) ? ntBkSelectedLcalStorg : []
    const ntBkToDisplay = (ntBkSelected) ? ntBkSelected : ntBkSelectedLcalStorg

    let chapSelectedLcalStorg = window.localStorage.getItem('chapSelected');
    chapSelectedLcalStorg = JSON.parse(chapSelectedLcalStorg);
    chapSelectedLcalStorg = (chapSelectedLcalStorg) ? chapSelectedLcalStorg : []
    const chapterToDisplay = (chapSelected) ? chapSelected : chapSelectedLcalStorg

    let topics = window.localStorage.getItem('topics');
    topics = JSON.parse(topics);
    topics = (topics) ? topics : []

    const topicsSelected = topics.filter((topic,idx) => topic.bookId === ntBkToDisplay.id && topic.chapterId === chapterToDisplay.id)
    const topicList = topicsSelected.map((topic, mapIdx) => {
        const contents = topic.content.split("\n")
                // remove spaces and empty lines
        const newContents = contents.filter((content,idx) => content.replace(/\s/g, '').length)
        const newTopics = topicsSelected.filter((topic, filterIdx) => filterIdx !== mapIdx)        
        return (
            <>
                <section    id = {`${topic.title}`} 
                            className = "topicDisplay px-3"
                >
                <h6>{topic.title}</h6>
                {newContents.length
                ?   <p className = "displayText"> {newContents.join('\n')} </p>
                :   <CreateTopicContent topic = {topic} newTopics = {newTopics} mapIdx = {mapIdx} topics = {topics}/>
                }
                </section>
            </>
    )})
    return (
        <>
        <div className = "py-2">
            <div className = "w-100 d-flex justify-content-between">
            <button className = "d-flex align-items-center justify-content-center plusBtn ms-1"
                    onClick = {(e) => setDisplayLeftMain(() => !displayLeftMain)}
            >   
                {
                    displayLeftMain 
                    ? <LeftChevron />
                    : <RightChevron />
                }
            </button>
            <h3 className = "text-center">
                {ntBkToDisplay.title}

                </h3>
            <button className = "d-flex align-items-center justify-content-center plusBtn me-1"
                    onClick = {(e) => setDisplayRightMain(() => !displayRightMain)}
                    >    
                {
                    displayRightMain
                    ?  <RightChevron />
                    :   <LeftChevron />
                }    
            </button>
            </div>
            <hr className = "m-0"/>
            <h5 className = "text-start my-2 text-center"> 
            Chapter {chapterToDisplay.id}: {chapterToDisplay.title}  
            </h5>
            {topicList}
        </div>
        </>

    )
}