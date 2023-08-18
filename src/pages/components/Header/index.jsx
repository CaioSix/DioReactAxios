import React from 'react'
import Logo from '../../../assets/logo-dio 1.png';
import Button from '../Button'
import { BuscarInputContainer,Container,Column,Input,Menu,MenuRight,Row,UserPicture,Wrapper } from './styles'

const Header = () => {
  return (
    <Wrapper>
        <Container>
          <Row>
            <img src={Logo} alt="Logo da Dio" />
            <BuscarInputContainer>
              <Input placeholder='Buscar...' />
              <Menu>Live Code</Menu>
              <Menu>Global </Menu>
            </BuscarInputContainer>
            
          </Row>
          <Row>
            <MenuRight href="#">Home</MenuRight>
            <Button title="Entrar"/>
            <Button title="Cadastrar"/>
          </Row>
        </Container>
    </Wrapper>
  )
}

export default Header