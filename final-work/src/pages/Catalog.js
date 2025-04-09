import React, { useState } from "react";
import ProductList from "../components/ProductList";
import SortFilter from "../components/SortFilter";

const Catalog = ({ products, onAddToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSort = (size) => {
    if (size === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.size === size));
    }
  };

  return (
    <div>
      <SortFilter onSort={handleSort} />
      <ProductList products={filteredProducts} onAddToCart={onAddToCart} />
    </div>
  );
};

export default Catalog;
