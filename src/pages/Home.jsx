import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Productlist from '../components/Productlist'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Slider />
      <Categories/>
      <Filter/>
      <Productlist/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home