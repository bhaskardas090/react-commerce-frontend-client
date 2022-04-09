import React from 'react'
import styled from 'styled-components';
import { IoMdSend } from "react-icons/io";

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <Container>
        <Title>Newsletter</Title>
        <SubTitle>Get timely updates from your favorate products.</SubTitle>
        <Form>
          <Input type="text" placeholder='Your email'/>
          <Button><IoMdSend style={{fontSize:'2rem'}}/></Button>
        </Form>
      </Container>
    </NewsletterContainer>
  )
}

export default Newsletter;

const NewsletterContainer = styled.div`
  width: 100vw;
  height: 400px;
  background-color: #fbf0f4;
  position: relative;
`;
const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: grid;
  gap: 30px;
`
const Title = styled.h1`
  font-size: 6em;
  font-weight: 900;
  text-align: center;
`
const SubTitle = styled.p`
  font-size: 3rem;
  text-align: center;
  font-weight: 100;
`
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Input = styled.input`
  width: 50%;
  /* display: flex;
  justify-content: center; */
  height: 4rem;
  border: none;
  outline: none;
  font-size: 2rem;
  padding-left: 1.5rem;
  border: 1px solid #C4C8CA;
`
const Button = styled.button`
  width:5rem;
  height: 4rem;
  border: 1px solid #C4C8CA;
  cursor: pointer;
`
