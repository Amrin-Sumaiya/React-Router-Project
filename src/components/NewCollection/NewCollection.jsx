import React from 'react';
import Item from '../Item/Item.jsx'; 
import sunglass from '../Assets/Images/glass.jpg'
import watch from '../Assets/Images/watch.png'
import Penut from '../Assets/Images/penut2.jpg'
import New_Jersey from '../Assets/Images/jercey.png'
const new_collection = [
  {
    id: 1,
    name: "Sunglass",
    image: sunglass,
    new_price: 200,
    old_price: 250,
  },

  {
    id: 1,
    name: "Watch",
    image: watch,
    new_price: 1000,
    old_price: 1250,
  },

  {
    id: 1,
    name: "Fresh Penut",
    image: Penut,
    new_price: 200,
    old_price: 250,
  },
  {
    id: 4,
    name: "Cricket Jersey",
    image: New_Jersey,
    new_price: 300,
    old_price: 320,
  }

  
];



const NewCollection = () => {
  return (
    <div className='new-collections  p-4 bg-slate-100 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
      <h1 className='text-3xl font-bold mb-6'>NEW COLLECTION</h1>
      <hr className='mb-6'/>
      <div className="collections flex flex-row justify-around space-x-6">
        {new_collection.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollection;
