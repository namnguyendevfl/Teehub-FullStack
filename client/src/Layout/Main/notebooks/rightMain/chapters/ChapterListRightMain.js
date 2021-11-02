import React, { useState } from "react";
import { CaretDown, Switch, SwitchChapter } from "../../../../../utils/Icons/Main";
import TopicList from "../topics/TopicListRightMain";
import { Link, useRouteMatch } from "react-router-dom"

export default function ChapterList(props) {
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

    const [ topicsDropdown, setTopicsDropdown ] = useState(false)
    const [ switchChap, setSwitchChap ] = useState(false);

    let chapters = window.localStorage.getItem('chapters');
    chapters = JSON.parse(chapters);
    chapters = (chapters) ? chapters : [];

    const chapsSelected = chapters.filter((chapter,idx) => (ntBkSelected) ? chapter.bookId === ntBkSelected.id : chapter)
    const { url } = useRouteMatch();
  
    const unchosenChapters = chapsSelected.filter((chapter, idx) => (chapSelected) ? chapter.id !== chapSelected.id : chapter.id);
    const dropdownList = unchosenChapters.map((chapter,idx) => (
        <li className = "bg-transparent list-group-item w-100 p-0 m-0">
            <Link   className = "link"
                    to = {`${url}/${chapter.title.replaceAll(" ","-")}`} >
            <button     className = "bg-transparent ntbkDropdown list-group-item w-100 text-start ps-4"
                        onClick = {(e) => {
                            setChapSelected(() => chapter);
                            setSwitchChap(() => !switchChap);
                        }}
            > 
                <span style = {{fontSize : "15px"}} className = "text-white"> {chapter.title} </span>
            </button>
            </Link>
        </li>

    ))
    window.addEventListener("click",({target}) => {
        const targetId= target.id
        if (targetId !== "switchChap") 
        setSwitchChap(() => false)
        if (targetId !== "topicList") 
        setTopicsDropdown(() => false)
    })
    
    
    //Remove the caret down if there are no topics
    let topics = window.localStorage.getItem('topics');
    topics = JSON.parse(topics);
    topics = (topics) ? topics : []
    
    const topicsSelected = topics.filter((topic, idx) => topic.bookId === ntBkSelected.id && topic.chapterId === chapSelected.id);
    return (
    <>
    <div>
        <ul className = "list-group"> 
                <li className = "ntbkBar bg-transparent list-group-item py-1 d-flex align-items-center justify-content-between"> 
                    <h6 className = "bg-transparent d-flex align-items-center pb-0 pt-1"> 
                    {
                        chapSelected && chapSelected.bookId === ntBkSelected.id
                        ? chapSelected.title
                        : <span className = " fs-6"> Chapters </span>
                    }         
                    </h6>
                    <div className = "d-flex align-items-center ms-2">
                        {
                            chapSelected && chapSelected.bookId === ntBkSelected.id 
                            && topicsSelected.length !== 0 
                            && <button className = "ntbkBtn"
                                    id = "topicList"
                                    onClick = {(e) => {
                                        setTopicsDropdown(() => !topicsDropdown)
                                    }}
                                > 
                                <CaretDown 
                                    topicsDropdown = {topicsDropdown}
                                />
                                </button>  
                        }
                        {unchosenChapters.length !== 0 &&
                            <button className = "ntbkBtn"
                                    id = "switchChap"
                                    onClick = {(e) => {
                                    setSwitchChap(() => !switchChap)
                                            }}
                            > 
                                <Switch 
                                    switchChap = { switchChap }
                                />
                            </button>
                        }
                    </div>
                </li>
        </ul>
                {
                    switchChap
                    ?   
                    <ul className = "list-group dropdownListBox">
                    { dropdownList} 
                    </ul>
                    :   null
                }
                {
                    chapSelected && chapSelected.bookId === ntBkSelected.id && topicsDropdown
                    ?               
                    <TopicList 
                                    ntBkSelected = {ntBkSelected}
                                    chapSelected = {chapSelected}          
                    />
                    :   null
                } 
               
        </div>

    </>
    )
}