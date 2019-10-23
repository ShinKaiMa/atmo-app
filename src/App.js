import React from "react";
import Navbar from "./layouts/Navbar";
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './layouts/Home'
import ModelView from './layouts/ModelView'
import ModelViewContextProvider from './contexts/ModelViewContext';
import 'materialize-css/dist/css/materialize.min.css';
import Test from "./layouts/test";

function App() {
  return (
    <ModelViewContextProvider>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/model/:area/:type/:model' component={ModelView}/>
            <Route path='/test' component={Test}/>
        </Switch>
      </div>
    </BrowserRouter>
    </ModelViewContextProvider>
  );
}

export default App;
