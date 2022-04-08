import React from 'react'
import styles from './slider.module.css';
import {BsArrowBarRight,BsArrowBarLeft} from 'react-icons/bs';
import {sliderItems} from '../data';
import { useState } from 'react';
const Slider = () => {
  const [counter, setCounter] = useState(0)

  const handleArrow = (direction) => {
    if(direction === "left"){
      if(counter === 0){
        setCounter(prevCounter => prevCounter + 1);
      } else {
        setCounter(prevCounter => prevCounter - 1)
      }
    }
    if(direction === "right"){
      if(counter === 1){
        setCounter(prevCounter => prevCounter - 1);
      } else {
        setCounter(prevCounter => prevCounter + 1)
      }
    }
  }
  return (
    <div className={styles.slider}>
      {/* <div className={styles.slider__container} >   */}
      <BsArrowBarLeft className={styles.slider__leftarrow} onClick={() => handleArrow("left")}/>
      <div className={styles.slider__container}>
          <div className={styles.slider__container__slide} style={{backgroundColor:`#${sliderItems[counter].bg}`}}>
            <img src={sliderItems[counter].img} alt={sliderItems[counter].title} className={styles.slider__conatiner__image}/>
            <div className={styles.slider__container__details}>
              <h1 className={styles.slider__container__details__title}>{sliderItems[counter].title}</h1>
              <p className={styles.slider__container__details__desc}>{sliderItems[counter].desc}</p>
              <button className={styles.slider__container__details__button}>SHOP NOW</button>
            </div>
          </div>
      </div>
      <BsArrowBarRight className={styles.slider__rightarrow} onClick={() => handleArrow("right")}/>
      {/* </div>   */}
    </div>
  )
}

export default Slider