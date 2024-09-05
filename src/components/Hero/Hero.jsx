import React from 'react'
import hand_icon from '../Assets/Images/hand-icon.png'
import arrow_icon from '../Assets/Images/right-arrow.png'
import hero from '../Assets/Images/hero3.png'

const Hero = () => {
  console.log("Hero component is rendering");
  return (
 

<>

<div className='grid grid-cols-2 gap-32 justify-around items-center bg-red-100 py-32 px-20'>
  
   
<div>
<h2 className='text-4xl font-bold'>NEW ARRIVAL ONLY</h2>

<p>New</p>
<img src={hand_icon} alt="hand icon"/>

<p>Our</p>
<p>impressive collection</p>


<div className="flex justify-start gap-2 bg-red-100 rounded-md items-center p-2 max-w-max">
  <button className="flex items-center gap-2 text-white text-sm hover:text-gray-800 px-2 py-1 bg-blue-500 rounded hover:bg-red-400">
    <h2 className="text-sm">Latest Collection</h2>
    <img src={arrow_icon} alt="arrow icon" className="w-6" />
  </button>
</div>


</div>



    <div className="shrink-0">
    <img className=" max-w-full max-h-full object-contain " src={hero} alt="hero" />

    </div>
    
  


</div>

</>
  )
}

export default Hero
