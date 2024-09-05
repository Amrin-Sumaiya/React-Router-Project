import React from 'react';
import facebook_icon from '../Assets/Images/facebook2.png';
import instagram_icon from '../Assets/Images/instagram.png';
import linkdin_icon from '../Assets/Images/linkedin.png';
import footer_logo from '../Assets/Images/gift.png'; // Add this line to import the footer logo

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white py-8 px-4 w-full'>
  
      <div className='flex flex-col items-center md:flex-row md:justify-between'>
        <div className='flex items-center mb-6 md:mb-0'>
          <img src={footer_logo} alt="Footer Logo" className='w-12 h-12 mr-2' />
          <p className='text-xl font-bold'>SHOPPER</p>
        </div>
        
        <ul className='flex flex-col md:flex-row md:space-x-6 mb-6 md:mb-0'>
          <li className='hover:text-blue-800 cursor-pointer'>Company</li>
          <li className='hover:text-blue-800 cursor-pointer'>Products</li>
          <li className='hover:text-blue-800 cursor-pointer'>Offices</li>
          <li className='hover:text-blue-800 cursor-pointer'>About</li>
          <li className='hover:text-blue-800 cursor-pointer'>Contact</li>
        </ul>

        <div className='flex space-x-4 mb-6 md:mb-0'>
          <div className='w-8 h-8'>
            <img src={facebook_icon} alt="Facebook Icon" className='w-full h-full object-contain' />
          </div>
          <div className='w-8 h-8'>
            <img src={instagram_icon} alt="Instagram Icon" className='w-full h-full object-contain' />
          </div>
          <div className='w-8 h-8'>
            <img src={linkdin_icon} alt="LinkedIn Icon" className='w-full h-full object-contain' />
          </div>
        </div>
      </div>
      
      <div className='border-t border-gray-600 pt-4 text-center'>
        <p className='text-sm'>Copyright @ 2024 - All Rights Reserved. <br />Thank you for shopping with us! we’re committed to providing you with the best products and an exceptional shopping experience.  </p>

      </div>
    </div>
  );
};

export default Footer;



