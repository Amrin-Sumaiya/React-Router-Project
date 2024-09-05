import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Assets/Navbar';
import ShopCatagory from './pages/ShopCatagory.jsx';
import Product from './pages/Product.jsx';
import LoginSingup from './pages/LoginSingup.jsx';
import Cart from './pages/Cart.jsx';
import Footer from './components/Footer/Footer.jsx';
import food_banner from './components/Assets/Images/Banner11.jpg';
import device_banner from './components/Assets/Images/Banner22.jpg';
import jersey_banner from './components/Assets/Images/Banner3.jpg';
import Shop from './pages/Shop.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/food" element={<ShopCatagory banner={food_banner} category="food"/>}/>
          <Route path="/device" element={<ShopCatagory banner={device_banner} category="device"/>}/>
          <Route path="/jersey" element={<ShopCatagory banner={jersey_banner} category="jersey"/>}/>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSingup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;





