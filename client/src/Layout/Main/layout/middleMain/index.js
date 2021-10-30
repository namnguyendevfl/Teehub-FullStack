import React from "react";
import { Switch, Route } from "react-router-dom"
import Home from "../../home";
import NoteBookLayout from "../../notebooks";
import Chapters from "../../notebooks/middleMain/chapters";
import NoteBookRoute from "./notebooksRoute";

export default function MiddleMainLayout({ntBkSelected, setNtBkSelected, chapSelected, setChapSelected, displayLeftMain, setDisplayLeftMain, displayRightMain, setDisplayRightMain}) {
    
    return (
        <>
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
        </>
    )
}