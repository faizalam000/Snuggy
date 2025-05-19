import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Example = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([{ task: "data", id: "data" }]);
  const changeValue = (e) => {
    setInputValue(e.target.value);
  };
  const addTodo = () => {
    setList((list) => {
      return [...list, { task: inputValue, id: uuidv4() }];
    });
    setInputValue("");
    console.log(list);
  };
  const deleteTodo = (id)=>{
   setList((list)=>{
   return list.filter((element)=>{
    return element.id !== id
   });
   });
  };
  return (
    <>
      <h1>ToDo-List</h1>
      <input
        type="text"
        placeholder="enter todo"
        onChange={(e) => {
          changeValue(e);
        }}
        value={inputValue}
      />
      <button onClick={addTodo}>ADD</button>
      <ul>
        {list.map((element, index) => {
          return (
            <li key={element.id}>{element.task} <button onClick={(e)=>{deleteTodo(element.id)}} >delete</button></li>
          );
        })}
      </ul>
    </>
  );
};

export default Example;
