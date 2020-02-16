import React, { createContext, useReducer } from "react";
import { AppStatusReducer } from "../reducers/AppStatusReducer";

export const AppStatusContext = createContext();

const AppStatusContextProvider = props => {
  const [appStatus, dispatchAppStatus] = useReducer(AppStatusReducer, {
    windowSize:[0, 0], //width, height
    isLoading: false,
    isNavHide: false,
    isBotNavHide: false,
    isMobile: false,
    isLandscape: true
  });

  return (
    <AppStatusContext.Provider value={{ appStatus, dispatchAppStatus }}>
      {props.children}
    </AppStatusContext.Provider>
  );
};

export default AppStatusContextProvider;
