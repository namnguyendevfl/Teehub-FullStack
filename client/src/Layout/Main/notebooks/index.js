import React from "react";
import { useHistory } from "react-router";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
export default function NoteBookLayout({ntBkSelected, setNtBkSelected, chapSelected, setChapSelected, displayLeftMain, setDisplayLeftMain, displayRightMain, setDisplayRightMain}) {
    const { path }  = useRouteMatch();
    const history = useHistory();
    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : []
    console.log(notebooks);

    const ntbkList = notebooks.map((ntBk,idx) => (
        <li className = "list-group-item m-0 p-0 w-100">
            {/* <Link className = "link"
                to = {`notebooks/view/${ntBk.title.replaceAll(" ","-")}`} > */}
                <button className = "list-group-item w-100 m-0 text-start"
                    onClick = {(e) => {
                        // e.preventDefault();. Cant use it overhere b/c Link will not work
                        setNtBkSelected (() => ntBk);
                        // history.push("/")
                        history.push(`/notebooks/view/${ntBk.title.replaceAll(" ","-")}`)
                        // To make Link work over here, you have to use Route over here. To store selectedBook after refesh, we need to use localStorage
                        window.localStorage.setItem('ntBkSelected', JSON.stringify(ntBk));
                        // window.localStorage.setItem('deckId', JSON.stringify(deck.deck_id));
                    }}
            > 
                {ntBk.title}
            </button>
            {/* </Link> */}
        </li>
    ))

    return (
        <>
            <ul className = "list-group m-0 p-0">
                {ntbkList}
                {/* <CreateNoteBook /> */}
            </ul>
        </>
    )
}