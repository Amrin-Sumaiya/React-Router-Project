import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shopping from '../Assets/Images/shopping-icon.png';
import order from '../Assets/Images/order-icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');

  return (
    <div className="flex justify-between items-center p-4 bg-lime-300 text-black">
      <div className="flex items-center space-x-2">
        <img src={shopping} alt="shopping" className="h-8 w-8" />
        <h4 className="text-lg font-semibold">SHOPPER</h4>
      </div>
      <ul className="flex space-x-6">
        <li>
          <button
            className={`hover:bg-red-400 p-2 rounded ${menu === 'shop' ? 'text-emerald-600' : ''}`}
            onMouseEnter={() => setMenu('shop')}
          >
            <Link to="/shop">Shop</Link>
          </button>
        </li>
        <li>
          <button
            className={`hover:bg-red-400 p-2 rounded ${menu === 'food' ? 'text-emerald-600' : ''}`}
            onMouseEnter={() => setMenu('food')}
          >
            <Link to="/food">Food</Link>
          </button>
        </li>
        <li>
          <button
            className={`hover:bg-red-400 p-2 rounded ${menu === 'device' ? 'text-emerald-600' : ''}`}
            onMouseEnter={() => setMenu('device')}
          >
            <Link to="/device">Device</Link>
          </button>
        </li>
        <li>
          <button
            className={`hover:bg-red-400 p-2 rounded ${menu === 'jersey' ? 'text-emerald-600' : ''}`}
            onMouseEnter={() => setMenu('jersey')}
          >
            <Link to="/jersey">Jersey</Link>
          </button>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <Link to="/login">
          <button className="px-4 py-2 bg-neutral-50 hover:bg-sky-500  rounded">Login</button>
        </Link>
        <Link to="/cart" className="relative">
          <img src={order} alt="Order" className="h-7 w-7" />
          <div className="absolute top-0 right-0 h-3 w-3 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">
            0
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

