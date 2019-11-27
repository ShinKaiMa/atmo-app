import React, { createContext, useReducer } from 'react';
import { AppStatusReducer } from '../reducers/AppStatusReducer';

export const AppStatusContext = createContext();

const AppStatusContextProvider = (props) => {
  const [appStatus, dispatchAppStatus] = useReducer(AppStatusReducer, { isLoading: false });

  return (
    <AppStatusContext.Provider value={{ appStatus, dispatchAppStatus }}>
      {props.children}
    </AppStatusContext.Provider>
  );
}

export default AppStatusContextProvider;