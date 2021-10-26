import React, { useState } from "react"
import MiddleLayout from "./middle"
import RightLayout from "./right"
import { Switch, Route } from "react-router-dom"
import LeftMainLayout from "./left"

export default function MainLayout() {

    const [ntBkSelected, setNtBkSelected] = useState()

    return <div className = "row vh-100 position-relative">
    <div className = "col-2 leftMain">
        <LeftMainLayout 

        />
    </div>
    <Switch>
        <Route path = "/">
            <div className = "col-2" > </div>
            <div className = "col-6">
                <MiddleLayout 
                        ntBkSelected = {ntBkSelected}
                        setNtBkSelected = {setNtBkSelected}
                />
            </div>
            {/* <div className = "col-4" > </div> */}
        </Route>
    </Switch>
    <div className = "col-4 rightMain">
        <RightLayout 
                        ntBkSelected = {ntBkSelected}
                        setNtBkSelected = {setNtBkSelected}
        />
    </div >
    </div>
}