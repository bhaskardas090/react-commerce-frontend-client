import React from 'react'
import {BsArrowBarRight,BsArrowBarLeft} from 'react-icons/bs';
import {sliderItems} from '../data';
import { useState } from 'react';
import styled from 'styled-components';
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
    <SliderContainer>
      <Icon direction="left">
          <BsArrowBarLeft style={{fontSize:"30px"}} onClick={() => handleArrow("left")}/>
      </Icon>
          <Slide style={{backgroundColor:`#${sliderItems[counter].bg}`}}>
            <Image src={sliderItems[counter].img} alt="SlideImage"/>
            <SlideDetails>
              <Title>{sliderItems[counter].title}</Title>
              <Description>{sliderItems[counter].desc}</Description>
              <Button>SHOP NOW</Button>
            </SlideDetails>
          </Slide>
      <Icon direction="right">  
        <BsArrowBarRight style={{fontSize:"30px"}} onClick={() => handleArrow("right")}/>
      </Icon>
    </SliderContainer>
  )
}

export default Slider;

const SliderContainer = styled.div`
  width: 100vw;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2,auto);
`;
const Icon = styled.div`
  position: absolute;
  font-size: 3rem;
  top: 50%;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};
  cursor: pointer;
`;
const Slide = styled.div`
  width: 100vw;
  height:calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content:center;
`
const Image = styled.img`
  height: 600px;
  object-fit: cover;
`
const SlideDetails = styled.div`
  width: 50%;
`;
const Title = styled.div`
  font-size: 6rem;
  padding-bottom: 3rem;
`;
const Description = styled.p`
  font-size: 2.3rem;
  word-spacing: 3px;
  padding-bottom: 3rem;
`;
const Button = styled.button`
  width:20rem;
  height: 5rem;
  background-color: transparent;
  border: 2px solid black;
  font-size: 2.3rem;
  cursor: pointer;
`;
