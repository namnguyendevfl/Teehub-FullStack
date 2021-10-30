import React, { useState } from "react";
import { useRouteMatch, Link, useHistory, Switch, Route } from "react-router-dom";


export default function Chapters({ntBkSelected, chapSelected, setChapSelected, displayLeftMain, setDisplayLeftMain, displayRightMain, setDisplayRightMain}) {

    const { url }  = useRouteMatch();
    
    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : []

    let chapters = window.localStorage.getItem('chapters');
    chapters = JSON.parse(chapters);
    chapters = (chapters) ? chapters : []
    
    let topics = window.localStorage.getItem('topics');
    
    topics = JSON.parse(topics);
    topics = (topics) ? topics : []


    let ntBkSelectedLcalStorg = window.localStorage.getItem('ntBkSelected');
    ntBkSelectedLcalStorg = JSON.parse(ntBkSelectedLcalStorg);
    ntBkSelectedLcalStorg = (ntBkSelectedLcalStorg) ? ntBkSelectedLcalStorg : []

    const ntBkToDisplay = (ntBkSelected) ? ntBkSelected : ntBkSelectedLcalStorg

    // const chapsSelected = chapters.filter((chapter, idx) => chapter.bookId === ntBkSelectedLcalStorg.id);
    const chapsSelected = chapters.filter((chapter, idx) => chapter.bookId === ntBkToDisplay.id);

    const chapterList = chapsSelected.map((chap,idx) => (
        <li className = "list-group-item m-0 p-0 w-100">

            <Link   className = "link"
                    to = {`${url}/${chap.title.replaceAll(" ","-")}`} >
                <button className = "list-group-item w-100 m-0 text-start"
                    onClick = {(e) => {
                        // e.preventDefault();. Cant use it overhere b/c Link will not work
                        setChapSelected (() => chap);
                        // history.push("notebooks/chapters")
                        // To make Link work over here, you have to use Route over here. To store selectedBook after refesh, we need to use localStorage
                        // window.localStorage.setItem('chapSelected', JSON.stringify(chap));
                        // window.localStorage.setItem('deckId', JSON.stringify(deck.deck_id));
                    }}
            > 
                {chap.title}
            </button>
            </Link>
        </li>
    ))
    

    
    return (
        <>
        {/* <Switch>
            <Route path = {`${url}`} exact> */}
            <h3 className = "text-center pt-2 bg-white">
                {/* {ntBkSelected.title}  */}
                {/* {ntBkSelectedLcalStorg.title} */}
                {/* {ntBkToDisplay.title} */}
            </h3>
            <hr className = "m-0 bg-white"/>
            <ul className = "list-group m-0 p-0">
                {chapterList}
                {/* <CreateChapter ntBkSelected = {ntBkSelected}/> */}
            </ul>
            {/* </Route>
            <Route path = {`${url}/:topicId`}>
                <Topics     ntBkSelected = {ntBkSelected}
                            chapSelected = {chapSelected}
                            displayLeftMain = {displayLeftMain}
                            setDisplayLeftMain = {setDisplayLeftMain}
                            displayRightMain = {displayRightMain}
                            setDisplayRightMain = {setDisplayRightMain}
                />
            </Route>
        </Switch> */}
        </>
    )
}