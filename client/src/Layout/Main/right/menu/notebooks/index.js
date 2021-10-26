import React, { useState } from "react";
import { CaretDown, Trash } from "../../../../../utils/Icons/Main";
// import { Trash } from "../../../../../utils/Icons/Footer";
import ChapterList from "./chapters";
import TopicList from "./topics";


export default function NoteBookLayout({ntBkSelected, setNtBkSelected}) {
    // const [ displayMenu, setDisplayMenu ] = useState(null);
    // const [ ntBkSelected, setNtBkSelected ] = useState();
    // const [ chapSelected, setChapSelected ] = useState ();
    const [ dropdown, setDropdown ] = useState(false);
    
    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : [];

    
    const bookList = notebooks.map((notebook, idx) => (
        <>
        <ul className = "list-group">
        <li key = {idx} className = "list-group-item m-0 p-0 border-white bg-white d-flex justify-content-between align-items-center"> 
            <button className = "list-group-item d-flex border-white ps-3 justify-content-between align-items-center w-100 "
                onClick = {() => {
                    setNtBkSelected (() => notebook);
                    // setDisplayMenu (() => 'Chapters')
                    window.localStorage.setItem('noteBookSelected', JSON.stringify(notebook));
                    // window.localStorage.setItem('displayOption', JSON.stringify("Chapter"));
                  
                }}
            > 
            {idx + 1}. {notebook.title} 
            </button>

        </li>
        </ul>
        </>
    ))

    
    const unchosenNtBks = notebooks.filter((ntbk, idx) => (ntBkSelected) ? ntbk.id !== ntBkSelected.id : ntbk.id);

    const dropdownList = unchosenNtBks.map((ntbk,idx) => (
        <li className = "list-group-item p-0 m-0">
            <button     className = "list-group-item w-100 text-start ps-4"
                        onClick = {(e) => {
                            setNtBkSelected(() => ntbk)
                            setDropdown(() => !dropdown)
                        }}
            > 
                {ntbk.title}
            </button>
        </li>
    ))

    // const list = () => {
    //     switch (displayMenu) {
    //         case 'Chapters' :
    //             return <ChapterList setDisplayMenu = {setDisplayMenu}
    //                                 ntBkSelected = {ntBkSelected}
    //                                 setChapSelected = {setChapSelected }                
    //                     />
    //         case 'Topics' :
    //             return <TopicList   
    //                                 ntBkSelected = {ntBkSelected}
    //                                 chapSelected = {chapSelected}
    //                     />
    //         default:
    //             return (
    //                 <>
    //                 {/* <CreateNoteBook /> */}
    //                 {ntBkSelected
    //                 ?   <ChapterList    setDisplayMenu = {setDisplayMenu}
    //                                     ntBkSelected = {ntBkSelected}
    //                                     setChapSelected = {setChapSelected }  
    //                                     />      
    //                 :    bookList
    //                 }
    //                 <hr />
    //                 {/* {bookList} */}
    //                 </>
    //                 )
    //     }}
    return (
        <>
        <div>
        {
            ntBkSelected
            ?   <ul className = "list-group"> 
                <li className = "list-group-item pt-1 pb-0 ntbkInRightMenu d-flex align-items-center justify-content-between"> 
                    <div className = "d-flex pb-0 pt-1 align-items-center"> 
                    <h5 className = "d-flex align-items-center"> {ntBkSelected.title} 
                    </h5>
                    </div >
                    <button className = "d-flex align-items-center justify-content-center plusBtn"
                        onClick = {(e) => setDropdown(() => !dropdown)}
                    > 
                    <CaretDown />
                    </button>
                </li>
                {
                    dropdown
                    ?   dropdownList
                    :   null
                }
                <hr className = "m-0 p-0"/>
                <ChapterList 
                            //   setDisplayMenu = {setDisplayMenu}
                              ntBkSelected = {ntBkSelected}
                            //   setChapSelected = {setChapSelected }                  
                />
                </ul>
            :   bookList
        }
        {/* {list()} */}
        {/* <ChapterList /> */}
        </div>
        </>
    )

}