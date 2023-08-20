import React from 'react';

const GuestCheckout = () => {
  return (
    <div className="flex justify-end px-4">
      <div className="w-full md:w-1/2 mb-8 bg-[#F4F4F4] px-4 py-6">
        <div className="md:ml-auto text-center md:max-w-[420px]">
          <h2 className="text-xl font-semibold">Checkout as a guest</h2>
          <p className="mt-2 text-gray-600">Not ready to become a customer?</p>
          <button className="bg-black text-white py-2 px-4 mt-4">Guest Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default GuestCheckout;
