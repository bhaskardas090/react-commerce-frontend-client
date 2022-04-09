import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import styled from 'styled-components';
import Footer from '../components/Footer';
const SingleProduct = () => {
  return (
    <>
      <Navbar/>
      <Announcement/>

      <SingleProductContainer>
        <ProductImage src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="product_image"/>
        <ProductDetails>
          <Title name="product_name">Denim Jumpsuit</Title>
          <Description name="product_desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus molestias, in ratione, repellendus reiciendis officia dolorum voluptatum vel, provident vitae id cupiditate omnis pariatur commodi maiores! Voluptate atque laudantium illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nostrum adipisci, nobis at quam alias impedit voluptate in temporibus iure hic omnis nulla voluptatibus nemo nesciunt similique laudantium aperiam consequatur.</Description>
          <Title name="product_price">$ 90</Title>
          <ProductFilter>
            <FilterWrapper>
              <SubTitle>Color: </SubTitle>
                <SelectColor color="black" />
                <SelectColor color="darkblue"/>
                <SelectColor color="gray"/>
            </FilterWrapper>
            <FilterWrapper>
              <SubTitle>Size: </SubTitle>
              <Choice name="size">
                <Select value="m">M</Select>
                <Select value="l">L</Select>
                <Select value="xl">XL</Select>
              </Choice>
            </FilterWrapper>
          </ProductFilter>
          <AddContainer>
            <Count>
              <CountChange>-</CountChange>
              <CountValue>1</CountValue>
              <CountChange>+</CountChange>
            </Count>
            <AddButton>Add To Cart</AddButton>
          </AddContainer>
        </ProductDetails>
      </SingleProductContainer>
    
        <Footer/>
    </>
  )
}

export default SingleProduct

const SingleProductContainer = styled.div`
display: flex;
margin-top: 10vh;
`
const ProductImage = styled.img`
  width: 45%;
  margin-left: 5%;
  height: calc(90vh - 90px);
  object-fit: cover;

`
const ProductDetails = styled.div`
  margin-left: 5%;
  width: 40%;
`
const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 100;
  margin: 3rem 0;
`
const Description = styled.p`
  font-size: 2rem;
`
const ProductFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`
const SubTitle = styled.p`
  font-size: 2.5rem;
  font-weight: 100;
`
const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
const Choice = styled.select`
  width: 120px;
  height: 4.5 rem;
  padding: 1rem;
  padding-right: 1rem;
  font-size: 2rem;
`
const Select = styled.option`
  font-size: 2rem;
`
const SelectColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) =>props.color};
  cursor: pointer;
  &:hover{
    border: 2px solid teal;
    border-radius: 50%;
    transform: scale(1.4);
  }
`
const AddContainer = styled.div`
  display: flex;
  gap: 7rem;
  align-items: center;
  margin-top: 3rem;
`
const Count = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
const CountValue = styled.div`
  font-size: 2.5rem;
  border: 1px solid teal;
  width: 5rem;
  text-align: center;
  border-radius: 1rem;
`
const CountChange = styled.span`
  font-size: 3rem;
  font-weight: 900;
  cursor: pointer;
`
const AddButton = styled.button`
  width: 20rem;
  height: 4rem;
  border: 1px solid teal;
  background-color: transparent;
  border-radius: 1rem;
  font-size: 2rem;
  cursor: pointer;
  &:hover{
    background-color: teal;
    color: white;
    transition: all .3s ease-in;
  }
`