import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import User from './components/User';

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <Switch>

          <Route exact path="/user/:id">
            <User />
          </Route>

          <Route exact path="/contacto">
            <Contacto />
          </Route>

          <Route exact path="/nosotros">
            <Nosotros />
          </Route>

          <Route exact path="/">
            <Inicio />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";