import React from 'react';
import whole from '../assets/Landing Main Image.png';

const Wholesalers = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center p-4 md:p-12">
      {/* Left side */}
      <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center md:items-start md:pr-12">
  <h2 className="text-2xl font-bold mb-4 text-center md:text-left">FOR WHOLESALERS</h2>
  <p className="text-gray-600 mb-4 text-center md:text-left">
    We offer loose tea leaves of the best quality for your business. With a choice of more than 450 different kinds
    of loose tea, we can make a sophisticated selection that fits exactly in your kind of establishment.
  </p>
  <button className="border px-4 py-2">Get A Free Consultation</button>
</div>


      {/* Right side */}
      <div className="w-full md:w-1/2 p-4">
        <img src={whole} alt="Tea" className="w-full h-full object-cover md:h-auto" />
      </div>
    </div>
  );
};

export default Wholesalers;
