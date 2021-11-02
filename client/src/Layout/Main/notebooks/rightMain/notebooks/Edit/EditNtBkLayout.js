import React, { useState } from "react"
import DnD from "../../../../../../utils/notebook/DnD";
import EditList from "./EditList";
import RearrageList from "./Swap";

export default function EditNtBk(props) {
    const {
        option,
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
    const [ selectNtBk, setSelectNtBk ] = useState()
    
    return (
        <>
       
        {
        !displayAddOption
            ?   <EditList   
                    option = {option} 
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
                    selectNtBk = { selectNtBk }
                    setSelectNtBk = { setSelectNtBk }
                />
            :   
                // selectNtBk && 
                <RearrageList
                    option = {option} 
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
                    selectNtBk = { selectNtBk }
                    setSelectNtBk = { setSelectNtBk }   
                />
        }
        </>
    )
}