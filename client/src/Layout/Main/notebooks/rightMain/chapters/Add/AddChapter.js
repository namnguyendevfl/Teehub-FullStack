import React, { useState } from "react"
import AddLayout from "./AddLayout";
import AddList from "./AddList";
import { useRouteMatch } from "react-router"; 

export default function AddChapter(props) {
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
    const initChap = {
        id: "",
        title: "",
        content:"",
    }
    const [newChap, setNewChap] = useState(initChap);
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
        newChap = {newChap}
        setNewChap = {setNewChap} 
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
        newChap = {newChap}
        setNewChap = {setNewChap}
      
/>
        }
        </>
    )
}