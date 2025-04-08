// import logo from './logo.svg';
import React from "react";
import TemperatureConverter from "./components/TemperatureConverter";
import TodoList from "./components/TodoList";
import "./App.css";
// import CommentsList from "./components/CommentsList";
// import Greeting from "./components/Greeting";
// import Message from "./components/Message";
// import NewComponents from "./components/NewComponents";




function App() {
  // return (
  //   <div className="App">
  //     <h1>Изучаем React!</h1>
  //     <Greeting></Greeting>
  //     <NewComponents></NewComponents>
  //     <Message></Message>
  //     <CommentsList></CommentsList>
      
  //   </div>
  // );
  return (
    <div className="App">
      <TemperatureConverter />
      <TodoList />
    </div>
  );
}

export default App;
