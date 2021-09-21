import React, {useState, useContext} from 'react'
import {AuthContext} from '../../contexts/auth';
import cadastrando from '../../contexts/auth';
import * as S from './styles'
import Header from '../../components/Header';
import firebase from '../../services/firebaseConnection';
import 'firebase/auth'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Cadastrar(){
    const[user, setUser] = useState({
        nome:'',
        email: '',
        senha: '',
        error: '',
    })       

    // Submit function (Create account)
    const entrando = async(e) => {
        const auth = getAuth();        
        createUserWithEmailAndPassword(auth, user.email, user.password)   
        .then((userCredential) => {            
            const user = userCredential.user;
            alert("Cadastrado com sucesso!")            
          })     
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const handleChange = e =>{
        setUser({            
            ...user,
            [e.target.name]: e.target.value,
            error:'',
        })
    }

    return(
        <S.Container>
            <Header/>
                <h1>Tela de Cadastro</h1>                
                <S.CaixaTxt
                        type="text"
                        placeholder="Nome"
                        name= "nome"                                                
                        onChange={handleChange}
                    >                
                    </S.CaixaTxt>
                    <S.CaixaTxt
                        placeholder="Email"
                        name="email"
                        type="text"                        
                        onChange={handleChange}
                    >                
                    </S.CaixaTxt>
                    <S.CaixaTxt
                        placeholder="Senha"
                        name="password"
                        type='password'
                        onChange={handleChange}
                    >       
                    </S.CaixaTxt>
                <button onClick={entrando}>Cadastrar</button>
        </S.Container>
    )
}

export default Cadastrar;