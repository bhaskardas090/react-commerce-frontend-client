import React from 'react'
import {popularProducts as products} from '../data';
import Product from './Product';
import styled from 'styled-components';
const Productlist = () => {
  return (
    <ProductList>
      {products.map(product => (
        <Product product={product} key={product.id}/>
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