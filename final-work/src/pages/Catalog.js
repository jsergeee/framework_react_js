import React from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const Catalog = ({ products, onAddToCart, pageTitle = "HOME" }) => {
  return (
    <div className="container goods__container">
      <div className="top-head">
        <div className="top-head_navigation">
          <h2 className="top-head__heading"></h2>
          <nav class="bread_crumbs">
            <Link to="/" class="bread_crambs__link">
              HOME
            </Link>
            <Link to="/src/pages/Catalog.js" class="bread_crambs__link">
              CATALOG
            </Link>
            <Link to="/src/components/Cart.js" class="bread_crambs__link_site">
              CART
            </Link>
          </nav>
        </div>
      </div>
      <div className="top-head">
        <div className="top-head_navigation">
          <h2 className="top-head__heading"></h2>
          <nav class="bread_crumbs">
            <Link to="/" class="bread_crambs__link">
              HOME
            </Link>
            <Link to="/src/pages/Catalog.js" class="bread_crambs__link">
              CATALOG
            </Link>
            <Link to="/src/components/Cart.js" class="bread_crambs__link_site">
              CART
            </Link>
          </nav>
        </div>
      </div>
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
