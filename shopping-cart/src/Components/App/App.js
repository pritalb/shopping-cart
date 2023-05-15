import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home.js';
import Products from '../Products/Products.js';
import AboutUs from '../AboutUs/AboutUs.js';
import ContactPage from '../Contact/Contact.js';
import Cart from '../Cart/Cart.js';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products/' element={<Products />} />
        <Route path='/about-us/' element={<AboutUs />} />
        <Route path='/contact/' element={<ContactPage />} />
        <Route path='/cart/' element={<Cart />} />
      </Routes>
  );
}

export default App;
