import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, toggleAvailability } from "./features/productsSlice";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Список продуктов</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Цена: {product.price} руб.</p>
            <p>Доступен: {product.available ? "Да" : "Нет"}</p>
            <button onClick={() => dispatch(toggleAvailability(product.id))}>
              Переключить доступность
            </button>
            <button onClick={() => dispatch(removeProduct(product.id))}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
