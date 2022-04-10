import React from 'react'
import styled from 'styled-components'
const Register = () => {
  return (
    <RegisterPage>
      <Form>
      <Title>CREATE AN ACCOUNT</Title>
        <InputWrapper>
          <Input type="text" placeholder="first name"/>
          <Input type="text" placeholder="last name"/>
          <Input type="text" placeholder="username"/>
          <Input type="email" placeholder="email"/>
          <Input type="password" placeholder="password"/>
          <Input type="password" placeholder="password"/>
        </InputWrapper>
          <Info>By creating an account, I consent to the processing of my personaldata in accordance with the <strong>PRIVACY POLICY</strong></Info>
        <Button>CREATE</Button>
      </Form>
    </RegisterPage>
  )
}

export default Register

const RegisterPage = styled.div`
  background: url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
  center; 
  width: 100vw;
  height: 100vh;
  position: relative;
`
const Title = styled.h1`
  font-size: 4rem;
  font-weight: 100;
  margin: 2rem 0;
`
const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 50%;
  height: 55%;
  background-color:white;
  padding: 2rem;


`
const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  gap: 1rem;
`
const Input = styled.input`
  height: 4rem;
  padding: 5px;
  border: 1px solid #AFAEAF;
  font-size: 2rem;
  outline: none;
  &::placeholder{
    font-size: 1.5rem;
    font-weight: 100;
  }
`
const Button = styled.button`
  width: 30rem;
  height: 4rem;
  border: none;
  background-color: teal;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
`
const Info = styled.p`
  font-size:1.8rem;
  margin: 2rem 0;
`