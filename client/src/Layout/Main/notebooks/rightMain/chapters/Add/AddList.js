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
        newChap, setNewChap
    } = props
  
    //Its important to keep originalChapters to the end and then push newChaps to originalURl
    let originalChapters = window.localStorage.getItem('chapters');
    originalChapters = JSON.parse(originalChapters);
    originalChapters = (originalChapters) ? originalChapters : []


    let chapters = originalChapters.filter((chapter, idx) => (ntBkSelected) && chapter.bookId === ntBkSelected.id)
    chapters = chapters.sort((chapterA, chapterB) => chapterA.id - chapterB.id)

    const unselectedChapters = originalChapters.filter((chapter, idx) => chapter.bookId !== ntBkSelected.id)

    console.log(originalChapters)
    console.log(chapters);
    console.log(unselectedChapters);
    
    
    
    const found = chapters.find((chapter, idx) => chapter.id === newChap.id)
    console.log("found", found)
    let newChaps = []
    if (newChap.title !== "") {
        if (!found) {
            chapters.push(newChap)
            newChaps = chapters
            // originalChapters.push(newChap)
            // newChaps = originalChapters
        } else {
            const firstHalf = chapters.filter((chapter, idx) => newChap.id > chapter.id)
            const secondHalf = chapters.reduce((acc, chapter, idx) => {
                if (chapter.id === newChap.id || chapter.id > newChap.id){
                    acc.push ({...chapter,
                        id : idx + 2})
                }
                return acc
            }, [])
            newChaps = firstHalf.concat(secondHalf);
            newChaps.push(newChap)
        }
    } else {
        newChaps = chapters
        // newChaps = originalChapters
    }
    
    console.log(newChaps)
    newChaps = newChaps.sort((chapA, chapB) => chapA.id - chapB.id)
    const chapterLists = newChaps.map((chapter, idx) => (
        <li key = {idx} 
            className = "list-group-item addList d-flex align-items-center justify-content-between py-1 pe-4"
        >    
            {
            (newChap.title === chapter.title) &&  (newChap.id === chapter.id)
            ? <h6 className ="text-primary"> {chapter.title} </h6>
            :   <> 
                    {chapter.title}
                    <button className = "plusBtn d-flex align-items-center justify-content-center"
                        onClick = {(e) => {
                            e.preventDefault();
                            setNewChap((prevChap) => ({
                                ...prevChap,
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

    
    

    let chapterUrl = window.localStorage.getItem('notebookUrl');
    chapterUrl = JSON.parse(chapterUrl);

const history = useHistory();
const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`${chapterUrl}`);
    setDropdown(() => !dropdown)
    const totalChapters = newChaps.concat(unselectedChapters)
    // unselectedChapters.push(newChaps)
    window.localStorage.setItem('chapters', JSON.stringify(totalChapters))
};

// console.log(unselectedChapters);
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
        <ul className = "list-group boxList">
            {chapterLists}
        </ul>
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