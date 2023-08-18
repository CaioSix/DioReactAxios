import React from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


// import { Form } from 'react-router-dom'

import { api } from '../../services/api';

import Button from '../components/Button'
import Header from '../components/Header'
import Input from '../components/Input'





import {Column,Container,CriarText,Esquecitext,Row,SubTitleLogin,Title,TitleLogin,Wrapper} from './styles'


const schema = yup.object({
    email: yup.string().email('email nao é valido').required(),
    password: yup.string().min(3, 'No minimo 3 caracteres').required(),
  }).required();




const Login = () => {

    const { control, handleSubmit,  formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });


    // console.log(isValid, errors)

    const onSubmit = async FormData => {
        try{
            const { data } = await api.get(`users?email=${FormData.email}&senha=${FormData.password}`)
            console.log("retorno api", data)
        }catch{
         alert('Houve um erro, tente novamente')   
        }

    }






    return (<>
        <Header />
        <Container>
            <Column>
                <Title> 
                    Plataforma Bonita!
                </Title>
      
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" erroMessage={errors?.email?.message} control={control} placeholder="E-mail"/>
                        <Input name="password" erroMessage={errors?.password?.message}  control={control} placeholder="email" type="password"/>
                        <Button title="Entrar" variant="secondary"  type="submit" />
                    </form>
                    <Row>
                        <Esquecitext>Esqueci Minha Senha</Esquecitext>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    
    </>
    )
}

export default Login