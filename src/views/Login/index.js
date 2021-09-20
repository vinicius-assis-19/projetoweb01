import React from 'react'
import * as S from './styles'
import {withRouter} from 'react-router-dom';
import Header from '../../components/Header';

function Login(){
    return(
        <S.Container>            
            <Header/>
                <h1>Login</h1>
                <S.CaixaTxt placeholder='E-mail'></S.CaixaTxt>
                <S.CaixaTxt placeholder='Senha'></S.CaixaTxt>
                <button>Entrar</button>
                <a href="/Cadastrar">Cadastrar</a>
        </S.Container>
    )
}

export default Login;