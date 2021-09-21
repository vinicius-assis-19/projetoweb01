import React, {useState} from 'react'
import * as S from './styles'
import {withRouter} from 'react-router-dom';
import Header from '../../components/Header';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login(){

    const[user, setUser] = useState({
        nome:'',
        email: '',
        senha: '',
        error: '',
    })       

    const entrar = async(e) => {        
        const auth = getAuth();        
        signInWithEmailAndPassword(auth, user.email, user.password )
        .then((userCredential) => {                        
            const user = userCredential.user;            
            alert("LOGANDO")            
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
                <h1>Login</h1>
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
                <button onClick={ entrar }>Entrar</button>
                <a href="/Cadastrar">Cadastrar</a>
        </S.Container>
    )
}

export default Login;