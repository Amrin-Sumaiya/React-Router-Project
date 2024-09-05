import React from 'react';
import data_product from '../Assets/Images/data.jsx';
import Item from '../Item/Item.jsx';

const Popular = (props) => {
  return (
    <div className={`popular p-6 bg-gray-50 ${props.className}`}>
      <b className='text-2xl font-semibold text-gray-800 text-center block'>{props.title || 'Our Snacks Collection'}</b>
      <hr className='my-4 border-gray-300' />
      <div className="popular_item grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data_product.map((item, i) => {
          return (
            <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;


