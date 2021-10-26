import React, { useState } from "react";
import CreateTopicContent from "./CreateTopicContent";

export default function ViewNtBk({ntBkSelected, chapSelected}) {

    // let newTopic = window.localStorage.getItem('newTopic');
    // newTopic = JSON.parse(newTopic);
    // console.log(newTopic);

    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : []
    let chapters = window.localStorage.getItem('chapters');
    chapters = JSON.parse(chapters);
    chapters = (chapters) ? chapters : []
    let topics = window.localStorage.getItem('topics');
    topics = JSON.parse(topics);
    topics = (topics) ? topics : []
    // const [newTopics, setNewTopics] = useState(topics)

    // console.log(topics)

 

    console.log(chapters)
    const chapsSelected = chapters.filter((chapter, idx) => chapter.bookId === ntBkSelected.id);
    console.log(chapsSelected)
    const chapterList = chapsSelected.map((chapter, idx) => {
        const topicList = topics.map((topic, mapIdx) => {
            const newTopics = topics.filter((topic, filterIdx) => filterIdx !== mapIdx)
            if (topic.chapterId === chapter.id) {
                const contents = topic.content.split("\n")
                // remove spaces and empty lines
                const newContents = contents.filter((content,idx) => content.replace(/\s/g, '').length)
                
                return (
                <>
                <section    id = {`${topic.title}`} 
                            className = "topicDisplay"
                >
                <h6>Topic {topic.id}: {topic.title}</h6>
                {newContents.length
                ?   <p className = "displayText"> {newContents.join('\n')} </p>
                :   <CreateTopicContent topic = {topic} newTopics = {newTopics} mapIdx = {mapIdx} topics = {topics}/>
                }
                </section>
                </>
            )} else return null
        })
        return (
            <>
            <h5 className = "text-start my-2"> Chapter {chapter.id}: {chapter.title} </h5>
            {topicList}
            </>
        )
    })
    return (
        <>
        <div className = "px-3 py-2">
            <h3 className = "text-center">
                {ntBkSelected.title} </h3>
            <hr className = "m-0"/>
            {chapterList}
        </div>
        </>
    )
}