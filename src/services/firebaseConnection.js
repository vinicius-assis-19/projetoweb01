import firebase from "firebase/compat/app";
import 'firebase/auth';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyDkO4ODX6l8o1la2a6C7VQIlLD_KaRaA70",
    authDomain: "app-vendedores-277b9.firebaseapp.com",
    databaseURL: "https://app-vendedores-277b9-default-rtdb.firebaseio.com",
    projectId: "app-vendedores-277b9",
    storageBucket: "app-vendedores-277b9.appspot.com",
    messagingSenderId: "823371197539",
    appId: "1:823371197539:web:b2cf33fe84ab565a9c5c56",
    measurementId: "G-WZ4QBMC1E9"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;