import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const ShopCatagory = ({ banner, category }) => {
  const { products } = useContext(ShopContext);
  const navigate = useNavigate(); 

  const filteredProducts = products?.filter(product => 
    category === 'device' ? product.name.includes('Mouse') || product.name.includes('HeadPhone') || product.name.includes('Keyboard') || product.name.includes('Blutooth_MobileStand') || product.name.includes('Sound Box') || product.name.includes('Table-Clock')
    : category === 'jersey' ? product.name.includes('Jersey')
    : category === 'food' ? product.name.includes('Pringles') || product.name.includes('Swiss-Roll') || product.name.includes('Horlicks') || product.name.includes('Lays') || product.name.includes('Lexus') || product.name.includes('Wafer')
    : []
  );

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); 
  };

  return (
    <div className='shop-catagory'>
      <img 
        src={banner} 
        alt="Shop Banner" 
        className="w-full h-48 object-cover rounded-lg shadow-lg md:h-72 lg:h-80 xl:h-96 mb-4" 
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts?.map(product => (
          <div 
            key={product.id} 
            onClick={() => handleProductClick(product.id)} // Handle click event
            className="p-4 border rounded-lg shadow-sm bg-red-200 transition-colors duration-300 hover:bg-gray-200 cursor-pointer"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-40 object-cover rounded-lg mb-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500 line-through">${product.oldPrice}</p>
            <p className="text-gray-900 font-bold">${product.newPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCatagory;









