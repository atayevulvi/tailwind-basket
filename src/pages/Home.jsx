import React from 'react'
import Announce from '../components/Announce'
import SwiperCarousel from '../components/SwiperCarousel'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Products from '../components/Products'
const Home = () => {
  return (
    <div>
      <Announce/>
      <SwiperCarousel/>
      <Categories/>
      <Hero/>
      <Products/>
    </div>
  )
}

export default Home
