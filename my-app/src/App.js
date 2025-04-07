// import logo from './logo.svg';
import "./App.css";
import CommentsList from "./components/CommentsList";
import Greeting from "./components/Greeting";
import Message from "./components/Message";
import NewComponents from "./components/NewComponents";


function App() {
  return (
    <div className="App">
      <h1>Изучаем React!</h1>
      <Greeting></Greeting>
      <NewComponents></NewComponents>
      <Message></Message>
      <CommentsList></CommentsList>
      
    </div>
  );
}

export default App;
