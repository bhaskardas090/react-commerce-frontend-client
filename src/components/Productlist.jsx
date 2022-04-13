import React, { useState } from 'react'
import {popularProducts} from '../data';
import Product from './Product';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
const Productlist = ({filters, sort, category}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async() => {
      try {
        const {data} = await axios.get(category ? `http://localhost:5000/api/products?category=${category}` : "http://localhost:5000/api/products");
        setProducts(data);
        console.log("products api call",data)
        
      } catch (err) {
        console.log(err)
      }
    }
    getProducts()
  }, [])
  
  return (
    <ProductList>
      {products.map(product => (
        <Product product={product} key={product._id}/>
      ))}
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