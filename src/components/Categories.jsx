import React from 'react'
import {categories} from '../data';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Categories = () => {
  return (
    <CategoriesContainer>
        {categories.map(cat => (
          <Category>
            <Image src={cat.image} alt={cat.title}/>
            <CategoryDetails>
              <Title>{cat.title}</Title>
              <Button><Link to="/products" style={{fontSize:'inherit', color:'inherit', textDecoration:'none'}}>SHOP NOW</Link></Button>
            </CategoryDetails>
          </Category>
        ))}
    </CategoriesContainer>
  )
}

export default Categories;

const CategoriesContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, auto);
`;
const Category = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 32vw;
  height: 500px;
  object-fit: cover;
`;
const CategoryDetails = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 3rem;
  color: white;
  text-align:center;
  margin-bottom: 20px;
`;
const Button = styled.button`
  width: 120px;
  background-color: white;
  border: none;
  font-size:  1.8rem;
  cursor: pointer;
  padding: 10px;
`
