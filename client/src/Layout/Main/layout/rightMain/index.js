import React from "react";
import NoteBookMenuLayout from "./notebooksRoute/index";

export default function RightMainLayout({ntBkSelected, setNtBkSelected, chapSelected, setChapSelected}) {
    
    return (
        <>
        <div className = "">
        {/* {ntBkSelected &&  */}
        <NoteBookMenuLayout
            ntBkSelected = {ntBkSelected}
            setNtBkSelected = {setNtBkSelected}  
            chapSelected = {chapSelected}
            setChapSelected = {setChapSelected} 
        />
        {/* } */}
        </div>
        </>
    )
}