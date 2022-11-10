import React, { useState } from "react";
import Input from "./Input";

const Todo = () => {
  const [list, setList] = useState([]);

  const onFormSubmit = (term) => {
    setList([term, ...list]);
    
  }

  

  const renderedList = () => {
   return list.map((item,index) => {


    const onDeleteItem = () => {
     setList(list.filter((todo) => {
        return  todo !== item;
      }) ) 
    }
      return (
      <div className="todo-item" key={index}>
      <h3 className="todo-heading">{item}</h3>
      <i className="trash icon" onClick={onDeleteItem} style={{'cursor': 'pointer'}}></i>
      <hr/>
    </div>
      )
    })
  }
  
  
  return (
    <div>
    <Input label='Add new' userSubmit={onFormSubmit}/>
    <div>{renderedList()}</div>
    </div>
  )
}

export default Todo;