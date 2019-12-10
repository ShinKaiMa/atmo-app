import React from "react";
import Navbar from "./layouts/Navbar";
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './layouts/Home'
import ModelView from './layouts/ModelView'
import UserSelectedModelViewContextProvider from './contexts/UserSelectedModelViewContext';
import ModelViewShemaContextProvider from './contexts/ModelViewSchemaContext';
import AppStatusContextProvider from './contexts/AppStatusContext';
import WeathermapContextProvider from './contexts/WeathermapContext';
import 'materialize-css/dist/css/materialize.min.css';
import Test from "./layouts/test";

function App() {
  return (
    <AppStatusContextProvider>
      <WeathermapContextProvider>
        <ModelViewShemaContextProvider>
          <UserSelectedModelViewContextProvider>
            <BrowserRouter>
              <div className="App">
                <Navbar />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/model/:area/:type/:model' component={ModelView} />
                  <Route path='/test' component={Test} />
                </Switch>
              </div>
            </BrowserRouter>
          </UserSelectedModelViewContextProvider>
        </ModelViewShemaContextProvider>
      </WeathermapContextProvider>
    </AppStatusContextProvider>
  );
}

export default App;
