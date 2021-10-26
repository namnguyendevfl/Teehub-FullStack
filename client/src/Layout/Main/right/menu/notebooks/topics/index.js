import React from "react";
import CreateTopic from "./CreateTopic";

export default function TopicList({chapSelected, ntBkSelected}) {
    // const topics = ['part1', 'part2', 'part3', 'part4']
    let topics = window.localStorage.getItem('topics');
    topics = JSON.parse(topics);
    topics = (topics) ? topics : []
    // topics = ['part1', 'part2', 'part3', 'part4']
    const topicsSelected = topics.filter((topic, idx) => topic.bookId === ntBkSelected.id && topic.chapterId === chapSelected.id);
    const topicList = (topicsSelected.length !== 0) && topicsSelected.map((topic, idx) => (
        <>
        <li key = {idx} className = "list-group-item m-0 p-0 border-white"> 
            <a className = "list-group-item w-100 d-flex border-white ps-4 text-decoration-none text-secondary"
            href={`#${topic.title}`}>T{idx + 1}. {topic.title}</a>
            {/* <span className = " ps-4 text-start"> T{idx + 1}. {topic.title} </span> */}
            {/* </button> */}
        </li>
        </>
    ))

    return (
        <>
            <ul className = "list-group">
                {topicList}
            </ul>
            {/* <CreateTopic /> */}
        </>
    )
}