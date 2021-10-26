import React from "react";
import NoteBookLayout from "./Notebooks";
import { useRouteMatch } from "react-router";
import { Switch, Route } from "react-router-dom"

export default function MiddleLayout({ntBkSelected, setNtBkSelected}) {
    const { url } = useRouteMatch();
    
    return (
        <>
        <Switch>
            <Route path = "/" exact>
            </Route>
            <Route path = "/notebooks">
                <div className = "bg-white">
                <NoteBookLayout 
                ntBkSelected = {ntBkSelected}
                setNtBkSelected = {setNtBkSelected}
                
                />
                </div>
            </Route>
        </Switch>
        </>
    )
}