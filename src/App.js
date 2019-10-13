import React from "react";
import Navbar from "./layouts/Navbar";
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './layouts/Home'
import ModelView from './layouts/ModelView'
import SideNavContextProvider from './contexts/SideNavContext';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <SideNavContextProvider>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/model/:area/:type/:model' component={ModelView}/>
        </Switch>
      </div>
    </BrowserRouter>
    </SideNavContextProvider>
  );
}

export default App;
