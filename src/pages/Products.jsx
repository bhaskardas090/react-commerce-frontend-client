import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Announcement from '../components/Announcement'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Productlist from '../components/Productlist'
import axios from 'axios';


const Products = () => {
  const {category} = useParams();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
    const getCategoryProducts = async() => {
      try {
        const {data} = await axios.get(`http://localhost:5000/api/products?category=${category}`);
        setCategoryProducts(data);  
      } catch (err) {
        console.log(err)
      }
    }
    getCategoryProducts()
    console.log("Category Products", categoryProducts);
  }, [category])


  // console.log("Products Page",filters)
  // console.log("Products Page",sort)
  // console.log(category);
  return (
    <>
      <Navbar/>
      <Announcement/>
      <Filter filteredProducts={filteredProducts} setCategoryProducts={setCategoryProducts} categoryProducts={categoryProducts} filters={filters} setFilters={setFilters} setSort={setSort} sort={sort} category={category} setFilteredProducts={setFilteredProducts}/>
      <Productlist categoryProducts={categoryProducts} filteredProducts={filteredProducts}/>
      <Footer/>
    </>
  )
}

export default Products