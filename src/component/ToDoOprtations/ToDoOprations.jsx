import React, { useState, useReducer, useEffect } from "react";
import { initialState, reducer } from "../../reducer";
import { Category } from "../category/category";

import { Droppable } from 'react-beautiful-dnd';

//! What To Do Now 🤔🤔🤔


const stateSwitch = (state) => {
  if (state == 'add') return `inprogress`
  if (state == 'inprogress') return `complete`
  //if (state == 'comp') return `delete`
  //if (state == 'delete') return `add`
}


const ToDoApp = () => {
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id, state) => {
    //dispatch({ type: "DELETE_TODO", payload: {id, todoState:'delete'} });
    
    dispatch({ type: "UPDATE_TODO", payload: {id, todoState:stateSwitch(state)} });
  };

  const handleKeyUp = e => {
    if (e.keyCode === 13) {
      if (text === "") return;
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: Math.random(),
          text,
          todoState:'add'
        }
      });
      setText("");
    }
  };


  useEffect(() => {
    dispatch({
      type: "INITIALIZE"
    });
  
    return () => {
      //second
    }
  }, [])
  

  if (Object.keys(state.todos).length === 0) {
    return <center>
      <br/><br/>
      <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="add todo..."
          onKeyUp={handleKeyUp}
        />
      <p>Todo empty !!</p>
    </center>
  } 

    return (
      <center>
        <br/><br/>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="add todo..."
          onKeyUp={handleKeyUp}
        />

    
          <div className="category">
          <Category name={'add'} data={state.todos} handleDelete={handleDelete} /> 
          <Category name={'inprogress'} data={state.todos} handleDelete={handleDelete} />
          <Category name={'complete'} data={state.todos} handleDelete={handleDelete} /> 
          {/* <Category name={'delete'} data={state.todos} handleDelete={handleDelete} /> */}
          </div>

        
          <button className="end-button" onClick={() => {
            dispatch({type:'REMOVE_COMPLETED_TODO',payload:{
              todoState:`complete`
            }} )
          }} > clear all Completed</button>
        
          
      </center>
    );
};

const style = {
  list: { display: "flex", alignItems: "center", justifyContent: "center" },
  del: {
    width: 40,
    height: 40,
    borderRadius: 10,
    lineHeight: "40px",
    backgroundColor: "gold"
  }
};

export {ToDoApp}
