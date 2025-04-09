import React from "react";
import ReactDOM from "react-dom/client"; // Импортируем createRoot из react-dom/client
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const rootElement = document.getElementById("root"); // Получаем элемент root
const root = ReactDOM.createRoot(rootElement); // Создаём корневой элемент

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
