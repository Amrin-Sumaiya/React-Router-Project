import React from 'react';

const Item = (props) => {
  return (
    <div className='item p-4 bg-red-100 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
      <img src={props.image} alt="" className='w-56 h-56 object-cover rounded-lg' />
      <p className='mt-2 text-lg font-medium text-gray-800'>{props.name}</p>
      <div className="item-prices mt-2 flex items-center space-x-2">
        <div className="item-prices-new text-lg font-semibold text-cyan-700">${props.new_price}</div>
        <div className="item-prices-old text-sm line-through text-rose-500">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;

