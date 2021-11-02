import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"
import LeftMainLayout from "./leftMain"
import MiddleMainLayout from "./middleMain"
import RightMainLayout from "./rightMain"

export default function MainLayout() {
    const [ ntBkSelected, setNtBkSelected ] = useState()
    const [ chapSelected, setChapSelected ] = useState ()
    const [ displayLeftMain, setDisplayLeftMain ] = useState(true)
    const [ displayRightMain, setDisplayRightMain ] = useState(true)

    return <div className = "row position-relative main">
    <Switch>
        <Route path = "/">
            {   displayLeftMain &&
                <>
                    <div className = "col-2 leftMain">
                    <LeftMainLayout 
                            ntBkSelected = {ntBkSelected}
                            setNtBkSelected = {setNtBkSelected}
                            setChapSelected = {setChapSelected}
                    />
                    </div>
                    <div className = "col-2 " >        
                    </div>
                </>
            }

            <div className = "col middleMain">
                <MiddleMainLayout 
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

            {displayRightMain &&
            <>
                
                <div className = "col-4 rightMain">              
                <RightMainLayout 
                                ntBkSelected = {ntBkSelected}
                                setNtBkSelected = {setNtBkSelected}
                                chapSelected = {chapSelected}
                                setChapSelected = {setChapSelected}
                />
                </div >
                <div className = "col-4" > </div>
            </>
            }
        </Route>

    </Switch>
    </div>
}