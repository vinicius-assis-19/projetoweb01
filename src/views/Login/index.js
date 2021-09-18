import React from 'react'
import * as S from './styles'
import {withRouter} from 'react-router-dom';
import Header from '../../components/Header';

function Login(){
    return(
        <S.Container>
            <Header/>
                <input placeholder='E-mail'></input>
                <input placeholder='Senha'></input>
                <button>Entrar</button>
                <a href="/Cadastrar">Cadastrar</a>
        </S.Container>
    )
}

export default Login;