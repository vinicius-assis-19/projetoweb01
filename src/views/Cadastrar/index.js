import React from 'react'
import * as S from './styles'
import Header from '../../components/Header';

function Cadastrar(){
    return(
        <S.Container>
            <Header/>
                <h1>Tela de Cadastro</h1>
                <input placeholder="Nome"></input>                
                <input placeholder="Email de cadastro"></input>
                <input placeholder="Senha"></input>
                <button>Cadastrar</button>
        </S.Container>
    )
}

export default Cadastrar;