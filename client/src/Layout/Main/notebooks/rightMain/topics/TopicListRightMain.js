import React from "react";

export default function TopicList({chapSelected, ntBkSelected}) {
  
    let topics = window.localStorage.getItem('topics');
    topics = JSON.parse(topics);
    topics = (topics) ? topics : []
    
    const topicsSelected = topics.filter((topic, idx) => topic.bookId === ntBkSelected.id && topic.chapterId === chapSelected.id);
    const topicList = (topicsSelected) && topicsSelected.map((topic, idx) => {
        const header = `${idx + 1}. ${topic.title}`
        return <>
        <li key = {idx} className = "ntbkDropdown bg-transparent  list-group-item m-0 p-0 border-white"> 
            <a className = "ntbkDropdown bg-transparent  list-group-item w-100 d-flex border-white ps-4 text-decoration-none text-secondary"
            href={`#${topic.title}`}>
                <span style = {{fontSize : "15px"}} className = "text-white"> {header} </span>
            </a>
        </li>
        </>
    })

    return ( 
        <>  
            <ul className = "list-group dropdownListBox">
                {topicList}
            </ul>
        </>
    )
}