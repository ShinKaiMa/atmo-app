import React, { createContext, useReducer } from "react";
import { WeathermapInfoReducer } from "../reducers/WeathermapInfoReducer";

export const WeathermapInfoContext = createContext();

const WeathermapInfoContextProvider = props => {
  const [ weathermapInfo, dispatchWeathermapInfo ] = useReducer(WeathermapInfoReducer);

  return (
    <WeathermapInfoContext.Provider
      value={{ weathermapInfo, dispatchWeathermapInfo }}
    >
      {props.children}
    </WeathermapInfoContext.Provider>
  );
};

export default WeathermapInfoContextProvider;
