import React from "react";
import NoteBookLayout from "../../../notebooks";
import { Switch, Route,  } from "react-router-dom";
import Home from "../../../home";
import NoteBookRoute from "../notebooksRoute/notebookRoute";

export default function MenuLayout(props) {
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
    return (
        <Switch>
        <Route path = "/" exact>
            <Home />
        </Route>
        <Route path = "/notebooks">
            <div className = "bg-white">
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
        </Route>
    </Switch>
    )
}