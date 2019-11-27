import React, { createContext, useReducer } from "react";
import { UserSelectedModelViewReducer } from "../reducers/UserSelectedModelViewReducer";

export const UserSelectedModelViewContext = createContext();

const ModelViewContextProvider = props => {
  const [
    selectedModelViewInfo,
    dispatchSelectedModelViewInfo
  ] = useReducer(UserSelectedModelViewReducer, {
    model: null,
    area: null,
    dataTypes: null,
    detailType: null,
    startDate: null
  });

  return (
    <UserSelectedModelViewContext.Provider
      value={{ selectedModelViewInfo, dispatchSelectedModelViewInfo }}
    >
      {props.children}
    </UserSelectedModelViewContext.Provider>
  );
};

export default ModelViewContextProvider;
