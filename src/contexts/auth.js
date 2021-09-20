import React, {useState, createContext, useEffect} from 'react';
import firebase from '../services/firebaseConnection';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext({});

function AuthProvider({children}){
    console.log("chegou até aqui")
    console.log({children})
    //const [usuario, setUsuario] = useState(null);
    //const [loading, setLoading] = useState(true);

    function cadastrando(user){
        console.log('chegou aqui')
        firebase.auth().createUserWithEmailAndPassword(user.email, user.senha)
        .then(async (value) => {
            let uid = value.user.uid;
            firebase.database().ref('usuario').child(uid).set({
                nome:user.nome
            })
            .then(() => {
                let data={
                    uid: uid,
                    nome: user.nome,
                    email: value.user.email,                    
                };
                //setUsuario(data);
                //guardarUsuario(data);
            })
        })
    }    

    return(
        <AuthContext.Provider value={{ cadastrando }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;