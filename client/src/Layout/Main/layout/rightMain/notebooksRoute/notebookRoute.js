import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import ChapterList from "../../../notebooks/rightMain/chapters/ChapterListRightMain";
import NtBkList from "../../../notebooks/rightMain/notebooks/NtBkListRightMain";
import OptionBar from "./optionBar/optionBar";

export default function NoteBookRoute(props) {
    const [ optionBarUrl, setOptionBarUrl ] = useState("")
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
    const { url } = useRouteMatch();
    //do not use exact in the parent component Route b/c the children Routes wont work
    return (
        <>
        <OptionBar 
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
        />
        <hr className = "my-2"/>
        <Switch>
            <Route path = {`${url}`}>
                <NtBkList 
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
                />
                <Route path = {`${url}/:bookId`}>
                    {
                    chapSelected &&
                    <ChapterList 
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
                    />
                    }
                </Route>
            </Route>
        </Switch>
        <hr className = "my-2"/>
        </>
    )
}