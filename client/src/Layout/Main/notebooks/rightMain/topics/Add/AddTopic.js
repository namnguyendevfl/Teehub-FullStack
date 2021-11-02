import React, { useState } from "react"
import AddLayout from "./AddLayout";
import AddList from "./AddList";
import { useRouteMatch } from "react-router"; 

export default function AddTopic(props) {
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

    const [ displayAddOption, setDisplayAddOption ] = useState(false);
    const [ displayContent, setDisplayContent ] = useState(false)
    const initTopic = {
        id: "",
        title: "",
        content:"",
    }
    const [newTopic, setNewTopic] = useState(initTopic);
    return (
        <>
       
        {displayAddOption
        ? <AddList 
        option = {option} 
        ntBkSelected = {ntBkSelected}
        setNtBkSelected = {setNtBkSelected}
        chapSelected = {chapSelected}
        setChapSelected = {setChapSelected}
        displayLeftMain = {displayLeftMain}
        setDisplayLeftMain = {setDisplayLeftMain}
        displayRightMain = {displayRightMain}
        setDisplayRightMain = {setDisplayRightMain} 
        optionBarUrl = {optionBarUrl}
        setOptionBarUrl = {setOptionBarUrl}  
        dropdown = {dropdown}
        setDropdown = { setDropdown }   
        displayAddOption = {displayAddOption}
        setDisplayAddOption = {setDisplayAddOption}
        newTopic = {newTopic}
        setNewTopic = {setNewTopic} 
        initTopic = { initTopic }
        displayContent = { displayContent }
        setDisplayContent = { setDisplayContent }
/>
        : <AddLayout 
        option = {option} 
        ntBkSelected = {ntBkSelected}
        setNtBkSelected = {setNtBkSelected}
        chapSelected = {chapSelected}
        setChapSelected = {setChapSelected}
        displayLeftMain = {displayLeftMain}
        setDisplayLeftMain = {setDisplayLeftMain}
        displayRightMain = {displayRightMain}
        setDisplayRightMain = {setDisplayRightMain} 
        optionBarUrl = {optionBarUrl}
        setOptionBarUrl = {setOptionBarUrl}  
        dropdown = {dropdown}
        setDropdown = { setDropdown }   
        displayAddOption = {displayAddOption}
        setDisplayAddOption = {setDisplayAddOption}
        newTopic = {newTopic}
        setNewTopic = {setNewTopic}   
        initTopic = {initTopic}
        displayContent = { displayContent }
        setDisplayContent = { setDisplayContent }
/>
        }
        </>
    )
}