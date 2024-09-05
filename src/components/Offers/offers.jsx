import React from 'react';
import offers_image from '../Assets/Images/discount.png';

const Offers = () => {
  return (
    <div className="offers flex flex-col lg:flex-row items-center justify-between p-6 bg-red-100">
      <div className="offers-left lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Exclusive
        </h1>
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Products for Customers
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 mt-4">
          ONLY ON BEST SELLERS FOR PRODUCTS
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-lime-500 transition duration-300">
          Check Now
        </button>
      </div>
      <div className="shrink-0">
  <img
    src={offers_image}
    alt="Exclusive Offers"
    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain max-w-full max-h-full"
  />
</div>



    </div>
  );
};

export default Offers;

