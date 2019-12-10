import React, { createContext, useReducer } from "react";
import { UserSelectedModelViewReducer } from "../reducers/UserSelectedModelViewReducer";

export const UserSelectedModelViewContext = createContext();

const UserSelectedModelViewContextProvider = props => {
  const [
    selectedModelViewInfo,
    dispatchSelectedModelViewInfo
  ] = useReducer(UserSelectedModelViewReducer, {
    model: null,
    area: null,
    dataTypes: null,
    detailType: null,
    startDate: null,
    bottomNavIdx: 0,
    fcstHour: null,
  });

  return (
    <UserSelectedModelViewContext.Provider
      value={{ selectedModelViewInfo, dispatchSelectedModelViewInfo }}
    >
      {props.children}
    </UserSelectedModelViewContext.Provider>
  );
};

export default UserSelectedModelViewContextProvider;
