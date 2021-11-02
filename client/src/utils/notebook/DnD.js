import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Grap } from "../Icons/Main";
import { Notebooks } from "./MkChg";

const DnD = () => {
    const notebooks =  Notebooks.getList();
    const [ list, setList ] = useState(notebooks); 
    const [ selectedItem, setSelectedItem ] = useState()
    const [ count, setCount ] = useState(0)    
    const handleChange = ({target : {name, value}}) => {
        setSelectedItem((preV) => ({
            ...preV,
            [name] : value
        }))
    }    
    const selectedItemId = (selectedItem) ? selectedItem.id : undefined   
    useEffect(() => {       
      setList(() => list)
    },[count, list])

    const handleClick = (e, item) => {
      e.preventDefault();
      console.log(item)
      setSelectedItem((prevItem) => {
        console.log("prev item", prevItem);
        const prevIdx = (prevItem) ? prevItem.id - 1 : null
        console.log("list item", list[prevIdx]) 
        if (list[prevIdx]) { 
          list[prevIdx].title  = prevItem.title
        }      
        return item});        
    }

    const handleDragEnd = (param) => {
        // the only one that is required
        //Swap id of the source and destination
        const srcI = param.source.index;
        const desI = param.destination?.index;
        const srcId = list[srcI].id
        const desId = list[desI]?.id  
        list[desI].id = srcId;
        list[srcI].id = desId;
        if (desI || desI === 0) {
          if (selectedItemId) {
            if(selectedItemId === srcId) {           
              selectedItem.id = desId;
              list.splice(srcI, 1)
              list.splice(desI, 0, (selectedItem) ? selectedItem : list.splice(srcI, 1));          
              setSelectedItem(() => null)
            } else if (selectedItemId === desId) {         
                selectedItem.id = srcId;          
                list.splice(desI, 1, selectedItem)             
                if (srcI < desI) { 
                  list.splice(desI + 1, 0, list[srcI])
                  list.splice(srcI, 1)  
                } else {              
                  list.splice(desI, 0, list[srcI])
                  list.splice(srcI + 1, 1) 
                }                           
                setSelectedItem(() => null)   
            } else {
              list.splice(selectedItemId-1,1,selectedItem)
              list.splice(desI, 0, list.splice(srcI, 1)[0]) 
            }                          
          } else {
            //work perfectly when selectedId not being grapped
            list.splice(desI, 0, list.splice(srcI, 1)[0])    
          };
        }
        setCount((prev) => prev + 1)    
        // Notebooks.saveList(list);
        setList(() => {
          list.forEach((item, idx) => item.id = idx+1)
          return list
        })
      }
  return (
    
      <DragDropContext
      onDragEnd={(param) => handleDragEnd(param)}
      >
        <div className="">
        <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <ul className = "list-group" 
                ref={provided.innerRef} {...provided.droppableProps}>
                {list.map((item, i) => (
                  <Draggable
                    key={item.id}
                    draggableId={"draggable-" + item.id}
                    index={i}
                    
                  >
                    {(provided, snapshot) => (
                      <li 
                        className = "p-0 m-0 list-group-item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{
                          ...provided.draggableProps.style,
                          boxShadow: snapshot.isDragging
                            ? "0 0 .4rem #666"
                            : "none",
                          
                            color: "#444444",
                            // padding: "0.8rem 0.3rem",
                        }}
                      >
                        <div className = "d-flex justify-content-between align-items-center me-2 ">                               
                            <form 
                                  className = "d-flex"
                                  >
                                <input
                                        className = "list-group-item w-100 createInput px-3 text-start w-100"
                                        id = "title"
                                        name = "title"
                                        placeholder = "Write a notebook title"                              
                                        value = {(selectedItemId === item.id) ? selectedItem.title : item.title}
                                        onChange = {handleChange}                    
                                        onClick = {(e) => handleClick(e,item)}
                                    >
                                    </input>
                    
                                </form>
                                <div    className = "ntbkBtn "
                                        {...provided.dragHandleProps}
                                        
                                        >
                                        <Grap />
                                </div>
                        </div>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
  

 
      
        </div>
      </DragDropContext>
    
  );
};

export default DnD;
