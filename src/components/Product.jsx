import React from 'react'
import styled from 'styled-components';
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import {Link} from 'react-router-dom';
const Product = ({product}) => {
  return (
    <>
    <Container>
      <Image src={product.image}/>
      <Actions>
        <Icon><AiOutlineShoppingCart style={{fontSize:'27px'}}/></Icon>
        <Icon><Link to={`/product/${product._id}`} style={{color:"inherit"}}><AiOutlineSearch style={{fontSize:'27px'}}/></Link></Icon>
        <Icon><AiOutlineHeart style={{fontSize:'27px'}}/></Icon>
      </Actions>
    </Container>
    </>
    )
}

export default Product;

// ! product.module.css

const Actions = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  transition: all 0.2s ease;

`;
const Container = styled.div`
  height: 400px;
  background-color: #F5FAFD;
  text-align: center;
  position: relative;
  &:hover ${Actions}{
    visibility: visible;
  }
`;
const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  padding-top: 30px;
  background-color:white;
  border-radius:50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%; 
  padding: 1rem;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    background-color: #F5FAFD;
  }
`;