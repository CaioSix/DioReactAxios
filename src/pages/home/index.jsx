import React from "react"
import Imagem from '../../assets/image 1.png'

import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Header from '../components/Header'
import {Container,TextContent,Title,TitleHighLight} from './styles'


const Home = () => {
    return (<>
        <Header />
        <Container>
            <div>
                <Title> 
                    <TitleHighLight>
                    Implemente <br />
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias que voce gosta, curte compartilha e se inscreve no nosso canal crushi
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={() => null}></Button>
            </div>
            <div>
                <img src={Imagem} alt="Imagem" />
            </div>
        </Container>
    
    </>
    )
}

export default Home