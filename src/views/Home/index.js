import React from 'react'
import * as S from './styles'
import {withRouter} from 'react-router-dom';
import Header from '../../components/Header';

function Home(){
    return(
        <S.Container>            
            <Header/>
                <h1>TELA INICIAL</h1>
        </S.Container>
    )
}

export default Home;