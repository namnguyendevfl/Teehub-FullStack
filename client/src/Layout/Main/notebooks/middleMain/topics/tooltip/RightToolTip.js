import React from "react";
import NoteBookRoute from "../../../../layout/rightMain/notebooksRoute/notebookRoute";
import OptionBar from "../../../../layout/rightMain/notebooksRoute/optionBar/optionBar";

export default function RightToolTip(props) {
    const {
        displayTooltip,
        setDisplayToolTip,
        ntBkSelected,
        setNtBkSelected, 
        chapSelected, 
        setChapSelected, 
        displayLeftMain, 
        setDisplayLeftMain, 
        displayRightMain, 
        setDisplayRightMain,
    } = props

    return (
        <div className = "position-absolute notebookTooltip">
            {/* <OptionBar 
                displayTooltip = {displayTooltip}
                setDisplayToolTip = {setDisplayToolTip}
            /> */}
            <NoteBookRoute 
                    ntBkSelected = {ntBkSelected}
                    setNtBkSelected = {setNtBkSelected}
                    chapSelected = {chapSelected}
                    setChapSelected = {setChapSelected}
                    displayLeftMain = {displayLeftMain}
                    setDisplayLeftMain = {setDisplayLeftMain}
                    displayRightMain = {displayRightMain}
                    setDisplayRightMain = {setDisplayRightMain}
            
            />
        </div>
    )
}