import React from 'react'
import styles from './categories.module.css';
import {categories} from '../data';
const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.categories__container}>
        {categories.map(cat => (
          <div className={styles.categories__container__category}>
            <img src={cat.image} alt={cat.title} className={styles.categories__container__img}/>
            <h2 className={styles.categories__container__title}>{cat.title}</h2>
            <button className={styles.categories__container__button}>SHOP NOW</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories