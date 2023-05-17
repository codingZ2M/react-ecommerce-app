import React from 'react';
import { Link } from 'react-router-dom';
import category from '../data/category';

const HeroBanner = () => {
  return (
    <div className="relative h-96 container mx-auto mt-6 ">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}>
        <div className="flex flex-col items-center justify-center text-justify px-4 w-full h-full bg-gray-900 bg-opacity-50">
          <h1 className="text-3xl font-medium text-white sm:text-7xl">Welcome To Our Store</h1>
          <p className="mt-4 text-lg sm:text-xl text-white">Browse our collection of premium products and find the perfect gift for any occasion.</p>
          <div className="mt-8 text-lg font-semibold text-gray-900 bg-white rounded-full px-8 py-3 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out">
              <Link to ={`/productCategory/${category[1]}`}>Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
