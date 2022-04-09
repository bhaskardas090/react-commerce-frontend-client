import React, { useState } from 'react'
import styles from './productlist.module.css';
import {popularProducts as products} from '../data';
import Product from './Product';

const Productlist = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className={styles.productlist}>
      {products.map(product => (
        <Product product={product} key={product.id}/>
      ))}
    </div>
  )
}

export default Productlist