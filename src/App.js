import React from "react";
import Navbar from "./layouts/Navbar";
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './layouts/Home'
import SideNavContextProvider from './contexts/SideNavContext';

function App() {
  return (
    <SideNavContextProvider>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
    </SideNavContextProvider>
  );
}

export default App;
