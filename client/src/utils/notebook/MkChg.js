import { Trash } from "../Icons/Main"
import { useHistory } from "react-router";
import React, { useState } from "react";


export const ListToDlt = (options, indicatorToStore, optionDlt, setOptionDlt) => {
    const history = useHistory();
    // const [ optionDlt, setOptionDlt ] = useState()
    const newOptions = (!optionDlt) ? options : options.filter((option, idx) => option.id !== optionDlt.id)
    return newOptions.map((option,idx) => 
        <li className = "dlt me-0 py-1 pe-2 list-group-item d-flex align-items-center justify-content-between">
        <span>{option.title} </span>
        <button 
                className = "dltBtn d-flex align-items-center justify-content-center"
                onClick = {(e) => {
                    const newOptions = options.filter((selectedOption, idx) => selectedOption.id !== option.id) 
                    // window.localStorage.setItem('notebooks', JSON.stringify(newOptions))
                    // history.push("/notebooks")
                    // window.localStorage.setItem(`${indicatorToStore}`, JSON.stringify(newOptions));
                    setOptionDlt(() => option)
                }}
                > 
            <Trash />  
        </button>

        </li>
    )
}

export const list = (objs, setObjSelected, setObjDropdown, objDropdown, setSubObjsSelected, subObjs) => objs.map((obj,idx) => {
    console.log(objs);
    console.log(subObjs);
    
    return (
    <li 
    href="#/action-1"
    className = "list-group-item m-0 p-0 ps-2"
    >
        <button className = "list-group-item w-100 text-start"
            onClick = {(e) => {
                setObjSelected(() => obj) 
                setObjDropdown(() => !objDropdown)
                setSubObjsSelected(() => subObjs.filter((subObj, idx) => {
                    return subObj.chapterId 
                    ? obj.bookId === subObj.bookId && obj.id === subObj.chapterId 
                    : obj.id === subObj.bookId
                }))
            }}
        > {obj.title}
        </button> 
    </li>
)})



// export const list = (notebooks, setNtBkSelected, setNtBkDropdown, ntBkDropdown, setChapsSelected, chapters) => notebooks.map((ntbk,idx) => (
//     <li 
//     href="#/action-1"
//     className = "list-group-item m-0 p-0"
//     >
//         <button className = "list-group-item w-100 text-start"
//             onClick = {(e) => {
//                 setNtBkSelected(() => ntbk) 
//                 setNtBkDropdown(() => !ntBkDropdown)
//                 if (chapters !== null ) setChapsSelected(() => chapters.filter((chapter, idx) => ntbk.id === chapter.bookId || ntbk.id === chapter.chapterId))
//             }}
//         > {ntbk.title}
//         </button> 
//     </li>
// ))


export const List = (options, setSelects, setDropdown, setSelect) => {
    return options.map((option,idx) => 
    <li 
    href="#/action-1"
    className = "list-group-item m-0 p-0"
    >
     <button className = "list-group-item w-100 text-start"
        onClick = {(e) => {
            const titles = (selects) => selects.map((select) => select.title)
            setSelects ((prevSelects) => (!titles(prevSelects).includes(option.title)) ? prevSelects.concat(option) : prevSelects )
            if (setSelect) {
                setSelect(() => option)
            }  
            setDropdown(() => false)
        }}
    > {option.title}
    </button> 
    </li>
)
}


export const SelectedList = (selects, ntBkSelected) => selects.map((select, idx) => {
    if(ntBkSelected !== undefined) {
        if (ntBkSelected.id === select.bookId) 
            return (
            <li className = "dlt me-0 py-1 pe-2 list-group-item d-flex align-items-center justify-content-between">
                <span className = " text-start ">{select.title} </span>
                <button className = "dltBtn d-flex align-items-center justify-content-center"> <Trash />  </button>
            </li>
        )
    }
    return (
        <li className = "dlt me-0 py-1 pe-2 list-group-item d-flex align-items-center justify-content-between">
        <span>{select.title} </span>
        <button className = "dltBtn d-flex align-items-center justify-content-center"> <Trash />  </button>
        </li>
    )
})