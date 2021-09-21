import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/Login'
import Cadastrar from './views/Cadastrar'
import Home from './views/Home'

ReactDOM.render(
  (
    <Router>      
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/Cadastrar" component={Cadastrar}/>
        <Route path="/Home" component={Home}/>
      </Switch>      
    </Router>
  ),
  document.getElementById('root')
);