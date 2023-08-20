import React from 'react';
import home from '../assets/Landing Main Image.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate()

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen">
      <div className="w-full md:w-1/2 p-4">
        <img src={home} alt="Tea" className="w-full h-full object-cover md:h-auto" />
      </div>
      <div className="w-full md:w-1/2 p-4 text-center md:text-left">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Every day is unique, just like our tea</h1>
        <p className="text-sm md:text-base lg:text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt nam dicta unde iste odio odit.
        </p>
        <p className="text-sm md:text-base lg:text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse numquam possimus dolores cum, aperiam pariatur officia?
        </p>
        <button onClick={()=>navigate("/collectionpage")} className="bg-black text-white py-2 px-6 md:py-3 md:px-10 rounded hover:bg-blue-600">
          Browse Teas
        </button>
      </div>
    </div>
  );
};

export default Home;
