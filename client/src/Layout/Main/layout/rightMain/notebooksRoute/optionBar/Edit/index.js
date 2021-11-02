import React from "react";
import EditNtBk from "../../../../../notebooks/rightMain/notebooks/Edit/EditNtBkLayout";

export default function Edit(props) {
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
                <EditNtBk
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
                Edit a chapter
                {/* <AddChapter
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
                    />            */}
            </>
        )
    }
    return (
        <>
            Edit a topic
            {/* <AddTopic 
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
                />   */}
     
        </>
    )
}