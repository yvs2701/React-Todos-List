import './App.css';
import Header from "./header";
import List from "./list";
import Footer from "./footer";
import Add from "./addTodo";

import React, { Component, useState } from 'react'

export default function App() {
  const [todos, setTodos] = useState([
    {
      title: "Insert your todo",
      description: "Add a description if you may want",
      // deadline: "By 12:00pm you gotta finish it !"
    },
    {
      title: "Insert your todo",
      description: "Add a description if you may want",
      // deadline: "By 12:00pm you gotta finish it !"
    },
    {
      title: "Insert your todo",
      description: "Add a description if you may want",
      // deadline: "By 12:00pm you gotta finish it !"
    },
  ] // array of objects
  ); // here useState hook calls setTodos which will update our list

  const addTodo = () => {
    let text = document.getElementById("exampleFormControlInput1");
    let descr = document.getElementById("exampleFormControlTextarea1");

    if(text.value.trim() !== "")
    {
      let todoObj; // to store our new todo item
      if(descr.value.trim() !== "")
        todoObj = {
          title: text.value().trim(),
          description: descr.value().trim()
        };
      else
        todoObj = {
        title: text.value().trim(),
        description: descr.value().trim()
        };
      setTodos([...todos, todoObj]);
    }
  };

  const deleteTodo = (removeElem) => {
    // in react this wont update the UI we need to use Hooks
    // let index = todos.indexOf(removeElem);
    // todos.splice(index, 1);

    setTodos(todos.filter(
      (elem) => {
        return elem !== removeElem;
      }));
  };

  return (
    <div className="App">
      <Header />
      <Add new={addTodo}/>
      <List todos={todos} del={deleteTodo} />
      <Footer />
    </div>
    // here we passed a JS object todos as react property (props) argument 'todos'
    // don't confuse yourself due to the same name
  )
}