import React, { useState } from 'react'
// import {popularProducts} from '../data';
import Product from './Product';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';

const Productlist = ({categoryProducts, filteredProducts}) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProducts = async() => {
      try {
        const {data} = await axios.get("https://react-commerce-backend.herokuapp.com/api/products");
        setProducts(data);     
      } catch (err) {
        console.log(err) 
      }
    }
    getProducts()
  }, [])

  if(filteredProducts?.length) return (
    <ProductList>
      {filteredProducts.map(product => <Product product={product} key={product._id}/>)}
    </ProductList>
  )
   if(categoryProducts?.length) return (
    <ProductList>
      {categoryProducts.map(product => <Product product={product} key={product._id}/>)}
    </ProductList>
  )
  return (
    <ProductList>
      {products.map(product => <Product product={product} key={product._id}/>)}
    </ProductList>
  )
}
export default Productlist;

// ! productlist.module.css

const ProductList = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 20px;
`