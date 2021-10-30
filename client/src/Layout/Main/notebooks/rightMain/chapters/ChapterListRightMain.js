import React, { useState } from "react";
import { CaretDown, Switch } from "../../../../../utils/Icons/Main";
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
    const [ switchDropdown, setSwitchDropdown ] = useState(false);

    let chapters = window.localStorage.getItem('chapters');
    chapters = JSON.parse(chapters);
    chapters = (chapters) ? chapters : [];

    const chapsSelected = chapters.filter((chapter,idx) => (ntBkSelected) ? chapter.bookId === ntBkSelected.id : chapter)
    const { url } = useRouteMatch();
  
    const unchosenChapters = chapsSelected.filter((chapter, idx) => (chapSelected) ? chapter.id !== chapSelected.id : chapter.id);
    const dropdownList = unchosenChapters.map((chapter,idx) => (
        <ul className = "list-group">
        <li className = "list-group-item w-100 p-0 m-0">
            <Link   className = "link"
                    to = {`${url}/${chapter.title.replaceAll(" ","-")}`} >
            <button     className = "list-group-item w-100 text-start ps-4"
                        onClick = {(e) => {
                            setChapSelected(() => chapter);
                            setSwitchDropdown(() => !switchDropdown);
                        }}
            > 
                {chapter.title}
            </button>
            </Link>
        </li>
 
        </ul>
    ))
    return (
    <>
    <div>
        <ul className = "list-group"> 
                <li className = "list-group-item py-1 ntbkInRightMenu d-flex align-items-center justify-content-between"> 
                    <h6 className = "d-flex align-items-center pb-0 pt-1"> 
                    {
                        chapSelected && chapSelected.bookId === ntBkSelected.id
                        ? chapSelected.title
                        : <span> Chapters </span>
                    }         
                    </h6>
                    <div className = "d-flex align-items-center">
                        {
                            chapSelected && chapSelected.bookId === ntBkSelected.id
                            ? <button className = "d-flex align-items-center justify-content-center plusBtn"
                            onClick = {(e) => {
                                setTopicsDropdown(() => !topicsDropdown)
                                setSwitchDropdown(() => false)
                            }}
                        > 
                            <CaretDown />
                        </button>
                            : null
                        }

                        <button className = "d-flex align-items-center justify-content-center plusBtn"
                            onClick = {(e) => {
                                setTopicsDropdown(() => false)
                                setSwitchDropdown(() => !switchDropdown)
                                        }}
                        > 
                            <Switch />
                        </button>
                    </div>
                </li>
                {
                    switchDropdown
                    ?   dropdownList
                    :   null
                }
                {
                    chapSelected && chapSelected.bookId === ntBkSelected.id && topicsDropdown
                    ?   <TopicList 
                                    ntBkSelected = {ntBkSelected}
                                    chapSelected = {chapSelected}  
                    />
                    :   null
                } 
                </ul>
        </div>

    </>
    )
}