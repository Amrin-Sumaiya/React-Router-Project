import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const { id } = useParams(); 
  const { products } = useContext(ShopContext); 

  const product = products.find(p => p.id === parseInt(id)); 

  if (!product) {
    return <div>Product not found!</div>; 
  }

  return (
    <div className="product-detail p-4">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-lg ">{product.Body}</p>
      <p className="text-base text-rose-800">{product.make}</p>
      <h1 className="text-sm font-bold">{product.size}</h1>
      <h1 className="text-sm text-sky-950 ">{product.clubName}</h1>
      <p className="text-gray-500 line-through">${product.oldPrice}</p>
      <p className="text-gray-900 font-bold">${product.newPrice}</p>
    </div>
  );
};

export default Product;

