import React from 'react';
// import logo from './logo.svg';
// import TemperatureConverter from "./components/TemperatureConverter";
// import TodoList from "./components/TodoList";
// import CommentsList from "./components/CommentsList";
// import Greeting from "./components/Greeting";
// import Message from "./components/Message";
// import NewComponents from "./components/NewComponents";
import './App.css'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';





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
  // return (
  //   <div className="App">
  //     <TemperatureConverter />
  //     <TodoList />
  //   </div>
  // );

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link> {/ Ссылка на главную страницу /}
            </li>
            <li>
              <Link to="/about">О нас</Link> {/ Ссылка на страницу "О нас" /}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          {/ Маршрут для главной страницы /}
          <Route path="/about" element={<AboutPage />} />{" "}
          {/ Маршрут для страницы "О нас" /}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
