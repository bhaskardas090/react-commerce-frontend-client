import React from 'react'
import styles from './navbar.module.css';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__left}>
        <p className={styles.navbar__left__language}>EN</p>
        <form className={styles.navbar__left__form}>
        <input type="text" className={styles.navbar__left__search} />
        <AiOutlineSearch className={styles.navbar__left__icon}/>
        </form>
      </div>
      <div className={styles.navbar__logo}>RECO.</div>
      <div className={styles.navbar__right}>
        <p className={styles.navbar__right__link}>REGISTER</p>
        <p className={styles.navbar__right__link}>LOG IN</p>
        <div className={styles.navbar__right__cart}>
          <AiOutlineShoppingCart className={styles.navbar__right__cart__icon}/>
          <span className={styles.navbar__right__cart__item__count}>7</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar