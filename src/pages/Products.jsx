import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Announcement from '../components/Announcement'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Productlist from '../components/Productlist'

const Products = () => {
  const {category} = useParams();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");

  console.log("Products Page",filters)
  console.log("Products Page",sort)
  console.log(category);
  return (
    <>
      <Navbar/>
      <Announcement/>
      <Filter filters={filters} setFilters={setFilters} setSort={setSort}/>
      <Productlist filters={filters} sort={sort} category={category}/>
      <Footer/>
    </>
  )
}

export default Products