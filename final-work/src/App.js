import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CartPage from "./pages/CartPage";
import "./style/style.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Пример массива товаров
  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "Description for Product 1",
      price: 50,
      size: "M",
      image: "/image/11.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description for Product 2",
      price: 80,
      size: "L",
      image: "/image/12.jpg",
    },
    {
      id: 3,
      title: "Product 3",
      description: "Description for Product 3",
      price: 30,
      size: "S",
      image: "/image/13.jpg",
    },
    {
      id: 4,
      title: "Product 4",
      description: "Description for Product 4",
      price: 60,
      size: "XL",
      image: "/image/14.jpg",
    },
    // Добавьте больше товаров при необходимости
  ];

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/catalog"
          element={
            <Catalog products={products} onAddToCart={handleAddToCart} />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
