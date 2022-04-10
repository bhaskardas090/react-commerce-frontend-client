import React from 'react'
import styled from 'styled-components'
const Login = () => {
  return (
    <LoginPage>
      <Form>
      <Title>SIGN IN</Title>
        <InputWrapper>
          <Input type="text" placeholder="username"/>
          <Input type="password" placeholder="password"/>
        </InputWrapper>
        <Button>CREATE</Button>
        <Info>FORGOT PASSOWRD</Info>
        <Info>CREATE AN ACCOUNT</Info>
      </Form>
    </LoginPage>
  )
}

export default Login

const LoginPage = styled.div`
  background: url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
  center;
  background-size: cover;
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
  width: 30%;
  height: 55%;
  background-color:white;
  padding: 2rem;


`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  margin-top: 2rem;
`
const Info = styled.p`
  font-size:1.6rem;
  margin: 1rem 0;
  font-weight: 100;
  text-decoration: underline;
  word-spacing: 3px;
  color: #757575;
  cursor: pointer;
`