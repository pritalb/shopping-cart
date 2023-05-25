import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home.js';
import Products from '../Products/Products.js';
import AboutUs from '../AboutUs/AboutUs.js';
import ContactPage from '../Contact/Contact.js';
import Cart from '../Cart/Cart.js';
import { useState } from 'react';

function App() {
  const [cartProduct, setCartProduct] = useState({});

  const addToCart = (product) => {
    setCartProduct(product);
  }

  const emptyCart = () => {
    setCartProduct({});
  }

  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products/' element={<Products addToCart={addToCart} />} />
        <Route path='/about-us/' element={<AboutUs />} />
        <Route path='/contact/' element={<ContactPage />} />
        <Route path='/cart/' element={<Cart product={cartProduct} emptyCart={emptyCart} />} />
      </Routes>
  );
}

export default App;
