import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer.js';
import Home from '../Home/Home.js';
import Products from '../Products/Products.js';
import AboutUs from '../AboutUs/AboutUs.js';
import ContactPage from '../Contact/Contact.js';
import Cart from '../Cart/Cart.js';
import { useState } from 'react';

/* 
 add this to package.json before pushing to repo
 
 "homepage": "https://pritalb.github.io/shopping-cart"
*/

function App() {
  const [cartProduct, setCartProduct] = useState({});
  
  const emptyCart = () => {
    setCartProduct({});
  }
  
  const addToCart = (product) => {
    emptyCart();
    setCartProduct(product);
  }


  return (
      <div>
        <Navbar cartProduct={cartProduct}/>
        <Footer />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products/' element={<Products addToCart={addToCart} />} />
          <Route path='/about-us/' element={<AboutUs />} />
          <Route path='/contact/' element={<ContactPage />} />
          <Route path='/cart/' element={<Cart product={cartProduct} emptyCart={emptyCart} />} />
        </Routes>
      </div>
  );
}

export default App;
