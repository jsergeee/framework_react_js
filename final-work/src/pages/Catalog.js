import React from "react";
import Product from "../components/Product";

const Catalog = ({ products, onAddToCart }) => {
  return (
    <div className="container goods__container">
      <h2 className="goods__title">Featured Items</h2>
      <ul className="goods__list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
