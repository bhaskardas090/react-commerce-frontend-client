import React from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Left>
        <Language>EN</Language>
        <Form>
        <Input type="text"/>
          <SearchIcon>
            <AiOutlineSearch style={{fontSize:'2.5rem'}}/>
          </SearchIcon>
        </Form>
      </Left>
      <Logo><Link to="/" style={{fontSize:'inherit', color:'inherit', textDecoration:'none'}}>RECO.</Link></Logo>
      <Right>
        <NavLink><Link to="/register" style={{fontSize:'inherit', color:'inherit', textDecoration:'none'}}>REGISTER</Link></NavLink>
        <NavLink><Link to="/login" style={{fontSize:'inherit', color:'inherit', textDecoration:'none'}}>LOG IN</Link></NavLink>
        <CartSection>
          <Link to="/cart" style={{fontSize:'inherit', color:'inherit', textDecoration:'none'}}>
          <AiOutlineShoppingCart style={{fontSize:'2.5rem'}}/>
          <CartCount>7</CartCount>
          </Link>
        </CartSection>
      </Right>
    </NavbarContainer>
  )
}

export default Navbar;

const NavbarContainer = styled.div`
  width: 100vw;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.div`
  font-size:3rem;
  font-weight: 900;
`

// TODO Left Part Styling
const Left = styled.div`
  display: flex;
  align-items: center;
`
const Language = styled.p`
  font-size: 1.8rem;
  margin-left: 2rem;
  margin-right: 2rem;    
`
const Form = styled.form`
  position: relative;  
`
const Input = styled.input`
  width: 25rem;
  height: 3rem;
  outline: none;
  font-size: 1.8rem;
  border: 1px solid #C4C8CA;
  padding-left: 1rem;
`
const SearchIcon = styled.div`
  position: absolute;
  right: 10px;  
  top: 3px;
  color: rgb(100, 100, 100);  
`


// TODO Right Part Styling
const Right = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;  
`
const NavLink = styled.div`
  margin: 0 20px;
  font-size: 1.8rem;
  cursor: pointer;  
`
const CartSection = styled.div`
  margin-right: 20px;
  position: relative;
  cursor: pointer;  
`
const CartCount = styled.span`
  background-color: rgb(75, 75, 241);
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  font-size: 1.4rem;
  position: absolute;
  top: -5px;
  right: -7px;
  color: white;
  text-align: center;  
`