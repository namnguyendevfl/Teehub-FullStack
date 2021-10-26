import React, { useState } from "react";
import CreateTopic from "./CreateTopic";
import CreateTopicContent from "./CreateTopicContent";

export default function Topics({ntBkSelected, chapSelected}) {

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


    const topicsSelected = topics.filter((topic,idx) => topic.bookId === ntBkSelected.id && topic.chapterId === chapSelected.id)
    // console.log(topics)
    console.log(chapters)
    

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
                <h6>Topic {topic.id}: {topic.title}</h6>
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
            <h3 className = "text-center">
                {ntBkSelected.title} </h3>
            <hr className = "m-0"/>
            {/* {chapSelected.title} */}
            <h5 className = "text-start my-2 text-center"> Chapter {chapSelected.id}: {chapSelected.title} </h5>
            {topicList}
            <CreateTopic chapSelected = {chapSelected}/>
        </div>
        </>
    )
}