import React, { createContext, useReducer } from "react";
import { WeathermapInfoReducer } from "../reducers/WeathermapInfoReducer";

export const WeathermapInfoContext = createContext();

const WeathermapInfoContextProvider = props => {
  const [
    weathermapContext,
    dispatchWeathermapInfo
  ] = useReducer(WeathermapInfoReducer, {
    weathermapsResponse: {},
    shouldStartLoading: [],
    isLoaded: [],
    islazyloadingActivated:true,
    wmRwdSize:{height:300, width:300} // calculated RWD weathermap size
  });

  return (
    <WeathermapInfoContext.Provider
      value={{ weathermapContext, dispatchWeathermapInfo }}
    >
      {props.children}
    </WeathermapInfoContext.Provider>
  );
};

export default WeathermapInfoContextProvider;
