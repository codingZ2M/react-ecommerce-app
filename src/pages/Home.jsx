import React from 'react'
import HeroBanner from '../components/HeroBanner'
import ProductSearch from '../components/ProductSearch'
import PromotionalBanner from '../components/PromotionalBanner'


const Home = () => {
  
  return (
    <div>
      <HeroBanner/>
        <ProductSearch/> 
        <PromotionalBanner/>  
    </div>
  )
}

export default Home

