import React, {useContext} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {UserContext} from './context/UserContext';
import Inicio from './pages/public/inicio';
import Qsomos from './pages/public/qsomos';
import Product from './pages/public/producto';
import Contact from './pages/public/contacto';

import Login from './pages/private/login';
import Panel from './pages/private/panel';
import Solicitud from './pages/private/solicitud';

function App() {  
  const {user} = useContext(UserContext);
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/quienes-somos" component={Qsomos} />
        <Route exact path="/productos" component={Product} />
        <Route exact path="/contacto" component={Contact} />
      
        <Route
          exact
          path="/login"
          component={
            user ? Panel : Login
          }
        />
        <Route 
          exact
          path="/panel"
          component={
            user ? Panel : Inicio
          }
        />
        <Route 
          exact
          path="/solicitar"
          component={
            user ? Solicitud : Inicio
          }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
