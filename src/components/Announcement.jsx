import React from 'react'
import styles from './announcement.module.css';
const Announcement = () => {
  return (
    <div className={styles.announcement}>
      <p className={styles.announcement__title}>Super Deal! Free Shipping on Order Above 50$</p>
    </div>
  )
}

export default Announcement