import React from "react";
import { Switch, Route,  } from "react-router-dom";
import Home from "../../../home";
import NoteBookRoute from "./notebookRoute";

export default function NoteBookMenuLayout(props) {
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
            <div className = "">
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