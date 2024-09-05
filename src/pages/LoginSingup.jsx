import React from 'react'

const LoginSingup = () => {
  return (
    <div className='loginsignup flex items-center justify-center min-h-screen  bg-sky-200'>
  <div className="loginsignup-container  bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h1 className="text-2xl font-semibold mb-6 text-center">Sign up</h1> 
    <div className="loginsighnup-feilds space-y-4">
      <input 
        type="text" 
        placeholder="Your Name" 
        className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <input 
        type="email" 
        placeholder="Email Address" 
        className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
    </div>
    <button className="w-full bg-blue-500 text-white py-3 mt-6 rounded-lg hover:bg-blue-600 transition duration-300">
      Continue
    </button>
    <p className="loginsignup-agree text-center text-sm mt-4">
      Already have an account? <span className="text-blue-900 cursor-pointer hover:underline">Log in here</span>
    </p>
    <div className="loginsignup-agree flex items-start space-x-2 mt-4 text-sm">
      <input type="checkbox" className="w-4 h-4 mt-1 text-blue-500 focus:ring-blue-500 border-gray-300 rounded" />
      <p>By continuing, I agree to the <span className="text-blue-900 cursor-pointer hover:underline">terms of use</span> & <span className="text-blue-900 cursor-pointer hover:underline">privacy policy</span>.</p>
    </div>
  </div>     
</div>


  )
}

export default LoginSingup
