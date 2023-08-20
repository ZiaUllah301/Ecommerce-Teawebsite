import React from 'react';
import blogImage1 from '../assets/Image Holder (2).png';
import blogImage2 from '../assets/Image Holder (3).png';

const Blog = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="p-4">
        <h2 className="text-2xl font-semibold pt-8">Last Blog Posts</h2>
      </div>
      <div className="flex flex-col md:flex-row py-8 md:py-16">
        <div className="w-full md:w-1/2 p-4">
          <img src={blogImage1} alt="Tea Aromas" className="w-full h-auto md:max-w-md mx-auto md:mx-0" />
        </div>
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">All about tea aromas</h2>
          <p className="text-sm md:text-base text-justify mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
        <div className="w-full md:w-1/2 p-4 mt-8 md:mt-0">
          <img src={blogImage2} alt="Steeping Tea" className="w-full h-auto md:max-w-md mx-auto md:mx-0" />
        </div>
        <div className="w-full md:w-1/2 p-4 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">How to steep tea like a pro</h2>
          <p className="text-sm md:text-base text-justify mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
