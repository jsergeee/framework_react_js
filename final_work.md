Для перевода вашего проекта на React с указанным функционалом, необходимо создать несколько компонентов и организовать их с помощью роутинга. Вот пример, как можно структурировать проект, чтобы покрыть все ваши требования:

### 1. Установка необходимых зависимостей

Убедитесь, что у вас установлен react, react-dom, и react-router-dom. Вы можете установить их с помощью следующей команды:

``bash
npx create-react-app my-app
cd my-app
npm install react-router-dom


### 2. Структура проекта

Вот пример структуры проекта:

src/
├── components/
│ ├── Header.js
│ ├── Footer.js
│ ├── Product.js
│ ├── ProductList.js
│ ├── Cart.js
│ └── SortFilter.js
├── pages/
│ ├── Home.js
│ ├── Catalog.js
│ ├── CartPage.js
├── App.js
└── index.js

### 3. Компоненты

Header.js
jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
return (
<header>
<nav>
<Link to="/">Home</Link>
<Link to="/catalog">Catalog</Link>
<Link to="/cart">Cart</Link>
</nav>
</header>
);
};

export default Header;

Product.js
jsx
import React from 'react';

const Product = ({ product, onAddToCart }) => {
return (
<div className="product">
<img src={product.image} alt={product.title} />
<h3>{product.title}</h3>
<p>{product.description}</p>
<p>${product.price}</p>
<button onClick={() => onAddToCart(product)}>Add to Cart</button>
</div>
);
};

export default Product;

ProductList.js
jsx
import React from 'react';
import Product from './Product';

const ProductList = ({ products, onAddToCart }) => {
return (
<div className="product-list">
{products.map(product => (
<Product key={product.id} product={product} onAddToCart={onAddToCart} />
))}
</div>
);
};

export default ProductList;

SortFilter.js
jsx
import React from 'react';

const SortFilter = ({ onSort }) => {
return (
<div>
<label>Sort by Size: </label>
<select onChange={(e) => onSort(e.target.value)}>
<option value="all">All</option>
<option value="S">S</option>
<option value="M">M</option>
<option value="L">L</option>
<option value="XL">XL</option>
</select>
</div>
);
};

export default SortFilter;

Cart.js
jsx
import React from 'react';

const Cart = ({ cartItems, onUpdateQuantity }) => {
const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

return (
<div>
<h2>Your Cart</h2>
<ul>
{cartItems.map(item => (
<li key={item.id}>
{item.title} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
<button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
<button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
</li>
))}
</ul>
<h3>Grand Total: ${totalAmount}</h3>
</div>
);
};

export default Cart;

### 4. Основные страницы

Home.js
jsx
import React from 'react';

const Home = () => {
return <h1>Welcome to the Store</h1>;
};

export default Home;

Catalog.js
jsx
import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import SortFilter from '../components/SortFilter';

const Catalog = ({ products, onAddToCart }) => {
const [filteredProducts, setFilteredProducts] = useState(products);

const handleSort = (size) => {
if (size === 'all') {
setFilteredProducts(products);
} else {
setFilteredProducts(products.filter(product => product.size === size));
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

CartPage.js
jsx
import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, onUpdateQuantity }) => {
return <Cart cartItems={cartItems} onUpdateQuantity={onUpdateQuantity} />;
};

export default CartPage;

### 5. Управление маршрутизацией

App.js
jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CartPage from './pages/CartPage';

const App = () => {
const [cartItems, setCartItems] = useState([]);
const products = [/ массив товаров с id, title, description, price и т.д. /];

const handleAddToCart = (product) => {
setCartItems(prevItems => {
const existingProduct = prevItems.find(item => item.id === product.id);
if (existingProduct) {
return prevItems.map(item =>
item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
);
}
return [...prevItems, { ...product, quantity: 1 }];
});
};

const handleUpdateQuantity = (id, quantity) => {
setCartItems(prevItems =>
prevItems.map(item =>
item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
).filter(item => item.quantity > 0)
);
};

return (
<Router>
<Header />
<Switch>
<Route exact path="/" component={Home} />
<Route path="/catalog">
<Catalog products={products} onAddToCart={handleAddToCart} />
</Route>
<Route path="/cart">
<CartPage cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} />
</Route>
</Switch>
</Router>
);
};

export default App;

### 6. Запуск приложения

Теперь вы можете запустить ваше приложение, используя команду:
bash
npm start
``

### Заключение

В этом примере вы создали базовую структуру для React приложения, которая включает компоненты для товаров, их каталог, корзину и фильтр по размеру. Вы можете расширять его, добавлять стиль, а также интегрировать API в зависимости от ваших потребностей.
