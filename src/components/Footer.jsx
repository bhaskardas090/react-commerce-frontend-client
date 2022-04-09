import React from 'react'
import styled from 'styled-components'
import { AiFillEnvironment, AiFillPhone, AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <About>
        <Title style={{fontSize:'3rem'}}>RECO.</Title>
        <AboutDescription>There are many variation of Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque autem qui odit corrupti iusto ducimus itaque? Incidunt temporibus laborum dolorum mollitia esse, officiis iure dolores, deserunt, similique cum quidem?</AboutDescription>
      </About>
      <Links>
        <Title>Useful Links</Title>
        <LinkList>
          <Link>Home</Link>
          <Link>Cart</Link>
          <Link>Wishlist</Link>
          <Link>My Account</Link>
          <Link>Terms</Link>
          <Link>Order Tracking</Link>
          <Link>Man Fashion</Link>
          <Link>Woman Fashion</Link>
        </LinkList>
      </Links>
      <Contact>
        <Title>Contact</Title>
        <DetailsCotainer>
          <AiFillEnvironment style={{fontSize:'2rem'}}/>
          <Details>662 Unknown Road, Bangalore, Karnataka</Details>
        </DetailsCotainer>
        <DetailsCotainer>
          <AiFillPhone style={{fontSize:'2rem'}}/>
          <Details>+91-9736489374</Details>
        </DetailsCotainer>
        <DetailsCotainer>
          <AiTwotoneMail style={{fontSize:'2rem'}}/>
          <Details>contactme@gmail.com</Details>
        </DetailsCotainer>
        <Image src='https://www.rhodesgraduation.com/wp-content/uploads/cards.png' alt="payment_icons"/>
      </Contact>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  width: 100vw;
  /* height: 400px; */
  display: grid;
  grid-template-columns: repeat(3, 30%);
  justify-content: space-around;
  margin: 4rem 0;
`
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 2.5rem;
`

// TODO About Section
const About = styled.div`
  
`
const AboutDescription = styled.p`
  font-size: 2rem;
`

// TODO Links Section
const Links = styled.div`

`
const LinkList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Link = styled.p`
  font-size: 2rem;
  width: 50%;
  margin-bottom: 1.3rem;
  cursor: pointer;
`


// TODO Contact Section
const Contact = styled.div`
`
const Details = styled.p`
  font-size: 2rem;
  margin-left: 1rem;
`
const DetailsCotainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`
const Image = styled.img`
  width: 80%;
`

