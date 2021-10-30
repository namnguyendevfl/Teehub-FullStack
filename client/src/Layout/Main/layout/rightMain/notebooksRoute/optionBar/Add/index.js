import React from "react";
import { useRouteMatch } from "react-router";
import AddChapter from "../../../../../notebooks/rightMain/chapters/Add/AddChapter";
import AddNtBk from "../../../../../notebooks/rightMain/notebooks/Add/AddNtBk";
import AddTopic from "../../../../../notebooks/rightMain/topics/Add/AddTopic";

export default function Add(props){
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

    if (!ntBkSelected) {
        return (
            <>
                <AddNtBk
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
                    />
            </>
        )
    }

    if (!chapSelected) {
        return (
            <>
                <AddChapter
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
                    />           
            </>
        )
    }
    return (
        <>
        {/* <div className = "position-absolute"> */}
            <AddTopic 
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
                />  
        {/* </div> */}
        </>
    )
}