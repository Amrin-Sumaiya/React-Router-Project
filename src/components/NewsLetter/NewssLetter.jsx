import ImportedNewsLetter from './NewssLetter.jsx'

const NewsLetter = () => {
  return (
    <div className='newsletter bg-red-100 py-8 px-4 rounded-md shadow-lg w-full mx-auto text-center'>
  <h1 className='text-2xl font-bold mb-4 text-gray-800'>Get Exclusive Offers On Your Email</h1>
  <p className='text-sky-900 mb-6'>Subscribe to our pages and get updates</p>
  <div className='flex justify-center items-center'>
    <input 
      type="email" 
      placeholder='Your Email ID' 
      className='p-2 border border-black rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-100' 
    />
    <button className='p-2 bg-black text-white rounded-r-md hover:bg-green-600 transition duration-300'>
      Subscribe
    </button>
  </div>
</div>


  );
};

export default NewsLetter;



