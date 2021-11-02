import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Notebooks } from "../../../../../utils/notebook/MkChg";

export default function NtBkList(props) {
    const {
        ntBkSelected,
        setNtBkSelected, 
        chapSelected, 
        setChapSelected, 
        displayLeftMain, 
        setDisplayLeftMain, 
        displayRightMain, 
        setDisplayRightMain, 

    } = props


    const notebooks = Notebooks.getList();
    console.log(notebooks)
    const ntbkList = notebooks.map((ntBk,idx) => {
        // const url = `/notebooks/${ntBk.title.replaceAll(" ","-")}`
        return (
        <li className = "list-group-item m-0 p-0 w-100">
            {/* <Link className = "link"
                to = {`/notebooks/${ntBk.title.replaceAll(" ","-")}`} > */}
                <button className = "list-group-item w-100 m-0 text-start"
                    onClick = {(e) => {
                        // e.preventDefault();. Cant use it overhere b/c Link will not work
                        setNtBkSelected (() => ntBk);
                        // history.push(`/notebooks/${ntBk.title.replaceAll(" ","-")}`)
                        // To make Link work over here, you have to use Route over here. To store selectedBook after refesh, we need to use localStorage
                        window.localStorage.setItem('notebookSelected', JSON.stringify(ntBk));
                        // window.localStorage.setItem('notebookUrl', JSON.stringify(url));
                        // window.localStorage.setItem('deckId', JSON.stringify(deck.deck_id));
                    }}
            > 
                {ntBk.title}
            </button>
            {/* </Link> */}
        </li>
    )})
    return (
        <>
        <ul className = "list-group">
            {ntbkList}
        </ul>
        </>
    )
}