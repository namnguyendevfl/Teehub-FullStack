import React, { useState } from "react";
import MenuLayout from "./menu";
import Options from "./options";
// import Options from "./options";

export default function RightLayout({ntBkSelected, setNtBkSelected}) {
    
    return (
        <>
        <div className = "bg-white">
        <Options 
            ntBkSelected = {ntBkSelected}
            setNtBkSelected = {setNtBkSelected}       
        />
        <MenuLayout 
            ntBkSelected = {ntBkSelected}
            setNtBkSelected = {setNtBkSelected}   
        />
        </div>
            {/* {lists()} */}
        </>
    )
}