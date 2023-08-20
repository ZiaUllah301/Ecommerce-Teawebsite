import React from 'react';
import { FaLeaf, FaTruck } from 'react-icons/fa';
import { RiCupLine } from 'react-icons/ri';
import { BsCup } from 'react-icons/bs';

const AboutInformation = () => {
  const teaItems = [
    { icon: <RiCupLine />, name: '450+ KINDS OF LOOSE TEA' },
    { icon: <FaLeaf />, name: 'CERTIFICATED ORGANIC TEAS' },
    { icon: <FaTruck />, name: 'FREE DELIVERY' },
    { icon: <BsCup />, name: 'SAMPLE FOR ALL TEAS' },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-16 bg-gray-100">
      <div className="flex flex-col md:flex-row md:justify-center lg:justify-between md:space-x-8 w-full max-w-4xl mx-auto">
        {teaItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-lg">{item.icon}</span>
            <p className="text-sm text-gray-600">{item.name}</p>
          </div>
        ))}
      </div>
      <button className="mt-6 md:mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        LEARN MORE
      </button>
    </div>
  );
};

export default AboutInformation;
