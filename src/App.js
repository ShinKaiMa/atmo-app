import React from "react";
import Navbar from "./Components/Navbar";
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './Layouts/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
