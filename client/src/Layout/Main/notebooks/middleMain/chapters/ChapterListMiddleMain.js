import React from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
export default function ChapterList(props) {
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

   
    let chapters = window.localStorage.getItem('chapters');
    chapters = JSON.parse(chapters);
    chapters = (chapters) ? chapters : []

    let ntBkSelectedLcalStorg = window.localStorage.getItem('notebookSelectedd');
    ntBkSelectedLcalStorg = JSON.parse(ntBkSelectedLcalStorg);
    ntBkSelectedLcalStorg = (ntBkSelectedLcalStorg) ? ntBkSelectedLcalStorg : []
    //In case when we refresh, the ntBkSelected is still available 
    const ntBkToDisplay = (ntBkSelected) ? ntBkSelected : ntBkSelectedLcalStorg
    // const chapsSelected = chapters.filter((chapter, idx) => chapter.bookId === ntBkSelectedLcalStorg.id);
    // const chapsSelected = chapters.filter((chapter, idx) => chapter.bookId === ntBkToDisplay.id);
    const chapsSelected = chapters.filter((chapter, idx) => (ntBkSelected) && chapter.bookId == ntBkSelected.id);
    const history = useHistory();
    const { url } = useRouteMatch();
    const chapterList = chapsSelected.map((chap,idx) => (
        <li className = "list-group-item m-0 p-0 w-100">
            <Link   className = "link"
                    to = {`${url}/${chap.title.replaceAll(" ","-")}`} >
                <button className = "list-group-item w-100 m-0 text-start"
                    onClick = {(e) => {
                        // e.preventDefault();. Cant use it overhere b/c Link will not work
                        setChapSelected (() => chap);
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
        <h3 className = "m-0 text-center py-2 "> {ntBkToDisplay.title} </h3>
        <hr className ="m-0 p-0"/>
        <ul className = "list-group">
            {chapterList}
        </ul>
        </>
    )
}