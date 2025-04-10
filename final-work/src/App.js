import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CartPage from "./pages/CartPage";
import "./style/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";




const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      title: "Product 1",
      price: 50,
      description: "Description",
      image: "/image/11.jpg",
    },
    // Добавьте другие товары здесь
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
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    );
  };

  return (
    <Router>
      < Header/>
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
