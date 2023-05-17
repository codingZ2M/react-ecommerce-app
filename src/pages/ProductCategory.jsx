import React, {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Product from '../components/Product'
import allProducts from '../data/products'
import { useParams } from 'react-router-dom'

const ProductCategory = () => {
  const {category} = useParams();

  const [selectedProducts, setSelectedProducts] = useState([]);
  let bgImg="";
  let promoText="";

  useEffect( () => {
     const products = allProducts.filter((product)=> product.category === category)
            setSelectedProducts(products);
           }, [category] 
   )

   switch (category) {
    case "Women Dresses":
       bgImg = "https://images.pexels.com/photos/8386657/pexels-photo-8386657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
       promoText="25% Off on Casual Women Dresses";
       break;
    case "Watches":
      bgImg = "https://images.pexels.com/photos/9878174/pexels-photo-9878174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      promoText="20% Off on Men Watches";
      break;
      case "Shoes":
      bgImg = "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      promoText="30% Off on Casual Shoes";
      break;
    case "sunglass":
      bgImg = "/featured-banner.jpg";
      promoText="20% Off on Sun Glasses";
      break;
    default:
      return null;
  }

  return (
    <div className='container mx-auto '>
        <div className="relative h-96 container mx-auto  ">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="relative flex flex-col items-center justify-center text-justify px-4 w-full h-full bg-gray-900 bg-opacity-50">
          <h1 className="text-3xl font-medium text-white sm:text-7xl">{promoText}</h1>
          <p className="mt-4 text-lg sm:text-xl text-white">Browse our shoe collection & find the perfect one.</p>
          <a href="/products" className="mt-8 text-lg font-semibold text-gray-900 bg-white rounded-full px-8 py-3 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out">Shop Now</a>
        </div>
      </div>
    </div>

        <ProductsGrid >
       {
         selectedProducts.map( (product) => (
            <Product key={product.id} product = {product}/> 
         ))      
       }
     </ProductsGrid>
    </div>
  )
}

export default ProductCategory;

const ProductsGrid = tw.div`
  mt-4 sm:mt-12 mb-12
  flex items-center justify-center px-0 grid grid-cols-1 gap-x-6 sm:gap-x-6
  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3
`;