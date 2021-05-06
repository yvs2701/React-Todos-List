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
      // priority: false
      // deadline: "By 12:00pm you gotta finish it !"
    },
    {
      title: "Add a title in the above input",
      description: "A description is optional, you may or may not add it !",
      // priority: true
      // deadline: "By 12:00pm you gotta finish it !"
    },
    {
      title: "You can even add looooong description",
      description: "Initially, Yoga was imparted by the Adiyogi (the first yogi), Shiva, over 15,000 years ago. It was Adiyogi who introduced to humanity the idea that one can evolve beyond one’s present level of existence. He poured his knowing into the legendary Sapta Rishis, or seven sages, who took the tremendous possibility offered by the yogic science to various parts of the world, including Asia, ancient Persia, northern Africa, and South America. It is this fundamental yet sophisticated science of elevating human consciousness that is the source of the world’s spiritual traditions, predating religion by many thousands of years. Yoga is about attaining absolute Balance, piercing Clarity, and an inexhaustible Exuberance. With this, you are immensely fit for life.",
      // priority: false
      // deadline: "By 12:00pm you gotta finish it !"
    },
  ] // array of objects
  ); // here useState hook calls setTodos which will update our list

  const addTodo = () => {
    let text = document.getElementById("exampleFormControlInput1");
    let descr = document.getElementById("exampleFormControlTextarea1");

    if (text.value.trim() !== "") {
      let todoObj; // to store our new todo item
      if (descr.value.trim() !== "")
        todoObj = {
          title: text.value.trim(),
          description: descr.value.trim()
        };
      else
        todoObj = {
          title: text.value.trim(),
          description: "..."
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
      <Add new={addTodo} />
      <List todos={todos} del={deleteTodo} />
      <Footer />
    </div>
    // here we passed a JS object todos as react property (props) argument 'todos'
    // don't confuse yourself due to the same name
  )
}