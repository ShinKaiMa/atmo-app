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
    trigerBy:[],
    islazyloadingActivated:{
      right:true,
      left:true
    }
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
