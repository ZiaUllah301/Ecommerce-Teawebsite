import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Collections */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold mb-2">Collections</h4>
          <ul className="pl-6">
            <li>Black teas</li>
            <li>Green teas</li>
            {/* ... Other list items */}
          </ul>
        </div>
        
        {/* Learn */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold mb-2">Learn</h4>
          <ul className="pl-6">
            <li>About us</li>
            <li>About our teas</li>
            {/* ... Other list items */}
          </ul>
        </div>

        {/* Customer Service */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold mb-2">Customer Service</h4>
          <ul className="pl-6">
            <li>Ordering and payment</li>
            <li>Delivery</li>
            {/* ... Other list items */}
          </ul>
        </div>

        {/* Contact */}
        <div   >
          <h4 className="text-xl font-semibold mb-2">Contact us</h4>
          <p className="text-justify p-4  mb-2">
            <FaMapMarkerAlt className="inline-block mr-2" />
            3 Falahi, Falahi St, Pasdaran Ave, Shiraz, Fars Province, Iran
          </p>
          <p className="text-justify p-4 mb-2">
            <FaEnvelope className="inline-block mr-2" />
            Email: amoopur@gmail.com
          </p>
          <p className="text-justify p-4">
            <FaPhone className="inline-block mr-2" />
            Tel: +98 9173038406
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
