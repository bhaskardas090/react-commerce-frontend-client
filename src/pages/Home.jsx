import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Productlist from '../components/Productlist'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Slider />
      <Categories/>
      <Productlist/>  
    </div>
  )
}

export default Home