import React, { useState } from "react";
import Add from "./Add/index";
import Delete from "./Delete/index";

export default function MakeChanges({ setChgOptnSelected, chgOptnSelected, setSubChgSelected, subChgSelected, setOptionNav}) {
    const options = ['Add', 'Edit', 'Delete']
    const listOption = options.map((option, idx) => (
        <li className = "list-group-item m-0 p-0">
            <button className = "list-group-item w-100 text-start"
                    onClick = {(e) => {
                        setChgOptnSelected(() => option);
                        setOptionNav(() => option);
                    }}
            > 
                <span> {option} </span>
            </button>
        </li>
    ))

    switch (chgOptnSelected) {
        case "Add":
            return <Add setSubChgSelected = {setSubChgSelected} 
                        subChgSelected = {subChgSelected}
                        setOptionNav = {setOptionNav}
                    />

        case "Delete":
            return <Delete  setSubChgSelected = {setSubChgSelected} 
                            subChgSelected = {subChgSelected}
                            setOptionNav = {setOptionNav}
                            />

        default:
            return (
                <>
                <ul className = "list-group">
                    {listOption}
                </ul>
                </>
            )
    }
}