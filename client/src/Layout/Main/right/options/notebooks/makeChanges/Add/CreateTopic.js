import React, { useState } from "react";
import { Plus, CaretDown } from "../../../../../../../utils/Icons/Main";
import { list } from "../../../../../../../utils/notebook/MkChg";


export default function CreateTopic() {
    const [ ntBkDropdown, setNtBkDropdown ] = useState(false);
    const [ chapDropdown, setChapDropdown ] = useState(false); 
    //Cant use null over here, have to use [] and set condition length !== 0
    const [ chapsSelected, setChapsSelected ] = useState ([]);  
    const [ topicsSelected, setTopicsSelected ] = useState ([]);
    const [ chapSelected, setChapSelected ] = useState ();
    const [ ntBkSelected, setNtBkSelected] = useState()
    
    

    let notebooks = window.localStorage.getItem('notebooks');
    notebooks = JSON.parse(notebooks);
    notebooks = (notebooks) ? notebooks : []    
    
    let chapters = window.localStorage.getItem('chapters');
    chapters = JSON.parse(chapters);
    chapters = (chapters) ? chapters : []

    let topics = window.localStorage.getItem('topics');
    topics = JSON.parse(topics);
    topics = (topics) ? topics : []

    const { userId = " ", bookId = " ", id = " "} = (chapSelected !== undefined) ? chapSelected : " ";
    const initTopic = {
        id: "",
        title: "",
        content:"",
    }

    const [newTopic, setNewTopic] = useState(initTopic);

    const handleChange = ({ target: {name, value}}) => {
        setNewTopic((prevTopic) => ({
            ...prevTopic,
            [name]: value,
            userId: `${userId}`,
            bookId: `${bookId}`,
            chapterId: `${id}`
        }))
    };

    let prevTopics = window.localStorage.getItem('topics');
    prevTopics = JSON.parse(prevTopics);
    prevTopics = (prevTopics !== null) ? prevTopics : []
    // console.log(newTopic);
    const handleSubmit = ((event) => {
        event.preventDefault();
        prevTopics.push(newTopic)
        // window.localStorage.removeItem('topics')
        window.localStorage.setItem('topics', JSON.stringify(prevTopics))
    })
    // console.log(prevTopics)
    return (
        <>
            <ul className = "list-group">
                <li className = "list-group-item m-0 p-0">
                    <button className = "list-group-item w-100 text-start d-flex justify-content-between align-items-center"
                            onClick = {() => {
                                setNtBkDropdown(() => !ntBkDropdown);
                            }}
                        >
                        {/* <h6 className = "list-group-item w-100 text-start d-flex justify-content-between align-items-center">  */}
                        {/* {select} */}
                        {
                            ntBkSelected 
                            ? ntBkSelected.title
                            : `Select the notebook` 
                        }
                        <CaretDown /> 
                        {/* </h6> */}
                    </button>
                </li>
                { ntBkDropdown 
                    ? list(notebooks, setNtBkSelected, setNtBkDropdown, ntBkDropdown, setChapsSelected, chapters)
                    : null
                }

                { 
                    chapsSelected.length !== 0 && ntBkDropdown === false &&
                    <>
                    <li className = "list-group-item m-0 p-0">
                        <button className = "list-group-item w-100 text-start d-flex justify-content-between align-items-center"
                                onClick = {() => setChapDropdown(() => !chapDropdown)}
                            >
                                {
                                    chapSelected 
                                    ? chapSelected.title
                                    : `Select the chapter` 
                                }
                            <CaretDown /> 
                            {/* </h6> */}
                        </button>
                    </li>
                    {chapDropdown 
                        ? list(chapsSelected, setChapSelected, setChapDropdown, chapDropdown, setTopicsSelected, topics)
                        : null
                    }
                    </>
                }                
            </ul>

        {
        chapsSelected.length !== 0 && ntBkDropdown === false && chapDropdown === false &&
        <>
        <hr className = "m-0 p-0"/>
             <form 
             className = "d-flex justify-content-between align-items-center px-2"
             onSubmit = {handleSubmit}>
                 <input  
                    className = "number "
                    id = "id"
                    name = "id"
                    placeholder = "#"
                    value = {newTopic.id}
                    onChange = {handleChange}
                 >
                 </input>
                 <input
                    className = "list-group-item createInput ps-0"
                    id = "title"
                    name = "title"
                    placeholder = "Add a topic"
                    value = {newTopic.title}
                    onChange = {handleChange}
                    >
                 </input>
                <button 
                    className = "p-0 plusBtn d-flex align-items-center justify-content-center"
                    type = "submit">
                    <Plus />
                </button>
         </form> 
         </>
        } 
       
        </>
    )
}