import React from 'react'
import Announcement from '../components/Announcement'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Productlist from '../components/Productlist'

const ProductList = () => {
  return (
    <>
      <Navbar/>
      <Announcement/>
      <Filter/>
      <Productlist/>
      <Footer/>
    </>
  )
}

export default ProductList