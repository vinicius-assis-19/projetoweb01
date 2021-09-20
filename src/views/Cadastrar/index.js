import React, {useState, useContext} from 'react'
import {AuthContext} from '../../contexts/auth';
import cadastrando from '../../contexts/auth';
import * as S from './styles'
import Header from '../../components/Header';
import firebase from '../../services/firebaseConnection';
import 'firebase/auth'

function Cadastrar(){
    const[user, setUser] = useState({
        nome:'',
        email: '',
        senha: '',
        error: '',
    })   



    

    // Submit function (Create account)
    const entrando = async(e) => {
      e.preventDefault();
      // Sign up code here.
      await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(result => {
          // Update the nickname
          result.user.updateProfile({
            displayName: user.nickname,
          })
        }).catch(error => {
          // Update the error
          console.log(error);
          setUser({
            ...user,
            error: error.message,
          })
        })
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
                        //autoCorrect={false}
                        //autoCapitalize="none"
                        //value = {nome}
                        onChange={handleChange}
                    >                
                    </S.CaixaTxt>
                    <S.CaixaTxt
                        placeholder="Email"
                        name="email"
                        type="text"
                        //autoCorrect={false}
                        //autoCapitalize="none"
                        //value ={email}
                        onChange={handleChange}
                    >                
                    </S.CaixaTxt>
                    <S.CaixaTxt
                        placeholder="Senha"
                        name="senha"
                        //autoCorrect={false}
                        //autoCapitalize="none"
                        //value ={senha}
                        type='password'
                        onChange={handleChange}
                    >       
                    </S.CaixaTxt>
                <button type="submit" onClick={entrando}>Cadastrar</button>
        </S.Container>
    )
}

export default Cadastrar;