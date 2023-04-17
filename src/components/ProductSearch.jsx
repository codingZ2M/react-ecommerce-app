import React, { useState } from 'react';
import {BiShoppingBag} from "react-icons/bi";
import products from '../data/products';
import tw from 'tailwind-styled-components';
import FilteredProducts from './FilteredProducts';

const ProductSearch = () => {

  const [productTitle, setProductTitle] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [category, setCategory] = useState("");
  
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredProducts = products.filter(product => {
        const categoryMatch = product.category === category;
        const priceRangeMatch =  product.priceRange === priceRange;
        return categoryMatch && priceRangeMatch;
      });
    

    // Set the search results in state
    setSearchResults(filteredProducts);
    console.log(filteredProducts)
  };
 
  return (
    <section className='flex justify-center mt-8 mb-4 text-gray-900'>
      <div className="bg-white border-none container mx-auto px-4">
        <div className='flex gap-2 items-center mb-4'>
          <h3 className='text-xl font-medium p-2 mb-2'>Find Products</h3>
          <BiShoppingBag className='w-10 h-10 text-gray-900 '/>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <select 
                value={productTitle}  
                onChange={(event) => setProductTitle(event.target.value)}
                className="p-2 border border-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="default" selected>Discount</option>
                <option value="10% Off & More">10% Off & More</option>
                <option value="20% Off & More">10% Off & More</option>
                <option value="30% Off & More">10% Off & More</option>
              </select>
              <select 
                value={priceRange}  
                onChange={(event) => setPriceRange(event.target.value)}
                className="p-2 border border-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="default" selected>Price Range</option>
                <option value="$25 to $50">$25 to $50</option>
                <option value="$50 to $100">$50 to $100</option>
                <option value="$100 to $150">$100 to $150</option>
                <option value="$150 to $200">$150 to $200</option>
                
                
              </select>
              <select 
                value={category}  
                onChange={(event) => setCategory(event.target.value)}
                className="p-2 border border-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="default" selected>Category</option>
                <option value="Women Dresses">Women Dresses</option>
                <option value="Shoes">Shoes</option>
                <option value="sunglass">Sun Glass</option>
                <option value="Watches">Watches</option>
              </select>
            
              <button
                type="submit"
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <span>Search</span>
            </button>
          </div>
        </form>

        <ProductsGrid >
       {
            searchResults.length === 0 ? (
                <h2 className="font-bold text-lg">No Products Found</h2>
            )
         : searchResults.map( (product) => (
             <FilteredProducts key={product.id} product = {product}/> 
           ))      
       }
     </ProductsGrid>
      </div>
    </section>
  );
};
  

export default ProductSearch;

const ProductsGrid = tw.div`
  mt-0 sm:mt-12 mb-12
  flex items-center justify-center grid grid-cols-1 gap-x-12 sm:gap-8 
  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3
`;