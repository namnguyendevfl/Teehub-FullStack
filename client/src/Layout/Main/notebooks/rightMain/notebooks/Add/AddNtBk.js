import React, { useState } from "react"
import { Escape, Plus, List } from "../../../../../../utils/Icons/Main"
import { useHistory } from "react-router";
import AddList from "./AddList";
import AddLayout from "./AddLayout";

export default function AddNtBk(props) {
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
    
    let userIdLogin = window.localStorage.getItem('userId');
    userIdLogin= JSON.parse(userIdLogin);
    const initialNoteBook = {
        userId : "",
        title: "",
        id : "",
    }
    const [ newNtBk, setNewNtBk ] = useState(initialNoteBook);


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
        newNtBk = {newNtBk}
        setNewNtBk = {setNewNtBk}
       
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
        newNtBk = {newNtBk}
        setNewNtBk = {setNewNtBk}
      
/>
        }
        </>
    )
}