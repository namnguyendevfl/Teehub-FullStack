import React, { useState } from "react";
import Add from "./Add";
import BreadCrum from "./breadCrum";
import Dlt from "./Delete";

export default function OptionBar(props) {
    const {
        ntBkSelected,
        setNtBkSelected, 
        chapSelected, 
        setChapSelected, 
        displayLeftMain, 
        setDisplayLeftMain, 
        displayRightMain, 
        setDisplayRightMain, 
        optionBarUrl,
        setOptionBarUrl 
    } = props
    const [ dropdown, setDropdown ] = useState(false);
    const [ option, setOption] = useState(false);
    const displayOption = (option) => {
        switch (option) {
            case "add":
                //We have to return it => remember
                return <Add option = {option} 
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

            case "trash":
                return <Dlt option = {option} 
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
        }
    }
    return (
        <> 
        <div className = "position-relative">
            <BreadCrum 
            option = {option}
            setOption = {setOption}
            setDropdown = {setDropdown}
            dropdown = { dropdown }
            />
            {
                option && dropdown &&
                <div className = "optionBox bg-white container-fluid m-0 p-0">
                    {displayOption(option)}
                </div>
            }
        </div>
        {/* <hr className = "m-0 pb-0 pt-1" /> */}
        </>
    )
}