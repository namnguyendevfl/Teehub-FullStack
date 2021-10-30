import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import ChapterList from "../../../notebooks/middleMain/chapters/ChapterListMiddleMain";

import TopicList from "../../../notebooks/middleMain/topics/TopicList";
import NtBkList from "../../../notebooks/rightMain/notebooks/NtBkListRightMain";

export default function ChapterRoute(props) {
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
        <Switch>
            <Route exact path = {`${url}`}>
                    <NtBkList 
                    ntBkSelected = {ntBkSelected}
                    setNtBkSelected = {setNtBkSelected}
                    chapSelected = {chapSelected}
                    setChapSelected = {setChapSelected}
                    displayLeftMain = {displayLeftMain}
                    setDisplayLeftMain = {setDisplayLeftMain}
                    displayRightMain = {displayRightMain}
                    setDisplayRightMain = {setDisplayRightMain}         
                    />
                    {/* <Switch> */}
                        <Route path = {`${url}/:bookId`}>
                                <div>
                            <ChapterList 
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
                    {/* </Switch> */}
            </Route>

            {/* <Route exact path = {`${url}/:bookId`}>
                <div>
                    <ChapterList 
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

            <Route path = {`${url}/:bookId/:chapterId`}>
                <TopicList 
                    ntBkSelected = {ntBkSelected}
                    setNtBkSelected = {setNtBkSelected}
                    chapSelected = {chapSelected}
                    setChapSelected = {setChapSelected}
                    displayLeftMain = {displayLeftMain}
                    setDisplayLeftMain = {setDisplayLeftMain}
                    displayRightMain = {displayRightMain}
                    setDisplayRightMain = {setDisplayRightMain}                      
                />
            </Route> */}
        </Switch>
    )
}