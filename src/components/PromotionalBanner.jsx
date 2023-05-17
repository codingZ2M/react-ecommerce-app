import React from 'react';

const PromotionalBanner = () => {
  return (
    <div className="relative h-96 container mx-auto my-12 ">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/6438290/pexels-photo-6438290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}>
        <div className="relative flex flex-col items-center justify-center text-justify px-4 w-full h-full bg-gray-900 bg-opacity-50">
          <h1 className="text-3xl font-medium text-white sm:text-7xl">30% Off on Casual Shoes</h1>
          <p className="mt-4 text-lg sm:text-xl text-white">Browse our shoe collection & find the perfect one.</p>
          <a href="/products" className="mt-8 text-lg font-semibold text-gray-900 bg-white rounded-full px-8 py-3 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out">Shop Now</a>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
