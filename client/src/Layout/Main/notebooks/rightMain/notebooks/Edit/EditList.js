import React, { useState } from "react";
import { LeftArrow, Escape, ArrowBarLeft, Edit, List, Swap } from "../../../../../../utils/Icons/Main";
import { useHistory } from "react-router-dom"
import EditTitle from "./EditNtBkTitle";
import { Notebooks } from "../../../../../../utils/notebook/MkChg";
import DnD from "../../../../../../utils/notebook/DnD";

export default function EditList(props) {
    const {
        option,

        chapSelected, 
        setChapSelected, 
        displayLeftMain, 
        setDisplayLeftMain, 
        displayRightMain, 
        setDisplayRightMain, 
        optionBarUrl,
        setOptionBarUrl,
        dropdown, 
        setDropdown,
        displayAddOption,
        setDisplayAddOption,
        selectNtBk,
        setSelectNtBk 
    } = props
    let notebooks = Notebooks.getList()

    const handleChange = ({target: { name, value }}) => {
        setSelectNtBk((prevNtBk) => ({
            ...prevNtBk,
            [name]: value,
        }))
    } 

    const selectNtBkId = selectNtBk ? selectNtBk.id : null
    console.log(selectNtBk)
    const notebookList = notebooks.map((notebook, idx) => (
        <li key = {idx} 
            className = "list-group-item p-0 addList d-flex align-items-center justify-content-between"
        >    
            <div className="row w-100 d-flex text-aligns-center m-0 mt-2 justify-content-center">    
                <form >
                  <input
                        className = "list-group-item createInput px-3 text-start w-100"
                        id = "title"
                        name = "title"
                        placeholder = "Write a notebook title"
                        value = { selectNtBkId === notebook.id ? selectNtBk.title : notebook.title }
                        onChange = {handleChange}
                        onClick = {(e) => {
                            e.preventDefault();
                            setSelectNtBk(() => notebook)
                        }}
                    >
                    </input>
                </form>
                
                
                {/* <span className = "col-10 text-start m-0 px-3 pt-">{notebook.title}</span> */}
                {/* <button    className = "col-10 text-start m-0 px-3"
                        onClick = {(e) => {
                            e.preventDefault();
                            setSelectNtBk (() => notebook)
                            console.log(selectNtBk)
                        }}
                >    */}
              
                    {/* selectNtBk && selectNtBk.id === notebook.id
                    ?   <>
                    <EditTitle  
                                selectNtBk = {selectNtBk}
                                notebook = {notebook}
                                setSelectNtBk = {setSelectNtBk}
                                /> */}
                    {/* <input
                        className = "list-group-item createInput px-3 text-start w-100"
                        id = "title"
                        name = "title"
                        placeholder = "Write a notebook title"
                        value = {selectNtBk.title}
                        onChange = {handleChange}
                    >
                    </input> */}
                        {/* </> */}
               
   
                {/* </button> */}
                {/* <div className = "col-2 m-0  d-flex align-items-center justify-content-end">
                    <button className = "ntbkBtn p-2 "
                            onClick = {(e) => {
                                setSelectNtBk (() => notebook)
                            }}
                    >
                        <Edit />
                    </button>
            </div> */}
        </div>
        </li>
    ))

const history = useHistory();  
const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/notebooks");
    notebooks = notebooks.filter((notebook, idx) => notebook.id !== selectNtBk.id)
    notebooks.push(selectNtBk);
    // setDropdown(() => !dropdown)
    window.localStorage.setItem('notebooks', JSON.stringify(notebooks))
};
    return (
        <>
        <div className="row d-flex text-aligns-center m-0 justify-content-center">    
    
            <div className = "col-2 m-0 ps-2 d-flex align-items-center">
            </div>
            <h5 className = "col-8 text-center m-0 py-3"> Edit notebook</h5>
            <div className = "col-2 m-0  d-flex align-items-center justify-content-end">
                <button className = "ntbkBtn p-2 "
                        onClick = {(e) => setDropdown (() => !dropdown)}
                >
                    <Escape />
                </button>
        </div>
        </div>
        <hr className =" m-0 p-0"/>
        <DnD /> 
        {/* <ul className = "list-group boxList">
                {notebookList}
        </ul> */}
        {/* {
            ! selectNtBk
            ?   <ul className = "list-group boxList">
                {notebookList}
                </ul>
            :   <EditTitle 
                selectNtBk = {selectNtBk}
                setSelectNtBk = {setSelectNtBk}
                />
        } */}
        <div className = "position-absolute bottom-0 text-center w-100">
        {/* {
            selectNtBk &&
            <>
            <div className="row w-100 d-flex text-aligns-center m-0 mb-1 justify-content-center">    
                <span className = "col-10 text-start m-0 px-3 pt-">Add to your note</span>
                <div className = "col-2 d-flex align-items-center justify-content-end">
                    <button className = "ntbkBtn p-2 "
                            onClick = {(e) => {
                                e.preventDefault();
                                setDisplayAddOption (() => !displayAddOption);
                            }}
                    >
                        <Swap/>
                    </button>
                    <button className = "ntbkBtn p-2 "
                            onClick = {(e) => {
                                e.preventDefault();
                                setDisplayAddOption (() => !displayAddOption);
                            }}
                    >
                        <List />
                    </button>
                </div>
            </div>
            </>
        } */}
        <div className = "px-3">
        <button 
            className = "mb-3 save list-group-item w-100 d-flex align-items-center justify-content-center text-center "
            type = "submit"
            // onClick = {handleSubmit}
            >
            Save
        </button>
        </div>
        </div>
        </>
    )
}