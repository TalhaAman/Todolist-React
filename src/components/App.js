
import React from "react";
import Todo from "./Todo";
import'../styles/formstyle.css';

const App = () => {

  return (
  <div className=" todolist">
    <h2 className="heading">TodoList</h2>
    
    <br/>
    <Todo />
  </div>
  )
};

export default App;