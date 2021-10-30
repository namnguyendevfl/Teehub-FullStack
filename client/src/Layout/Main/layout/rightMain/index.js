import React from "react";
import MenuLayout from "./menu";

export default function RightMainLayout({ntBkSelected, setNtBkSelected, chapSelected, setChapSelected}) {
    
    return (
        <>
        <div className = "bg-white">
        {/* <Options 
            ntBkSelected = {ntBkSelected}
            setNtBkSelected = {setNtBkSelected}   
            chapSelected = {chapSelected}
            setChapSelected = {setChapSelected}     
        /> */}
       
        <MenuLayout 
            ntBkSelected = {ntBkSelected}
            setNtBkSelected = {setNtBkSelected}  
            chapSelected = {chapSelected}
            setChapSelected = {setChapSelected} 
        />
        </div>
        </>
    )
}