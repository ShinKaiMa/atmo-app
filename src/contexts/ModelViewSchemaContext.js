import React, { createContext, useReducer } from "react";
import { ModelViewSchemaReducer } from "../reducers/ModelViewSchemaReducer";

export const ModelViewShemaContext = createContext();

const ModelViewShemaContextProvider = props => {
  const [ modelViewSchema, dispatchModelViewSchema ] = useReducer(ModelViewSchemaReducer);

  return (
    <ModelViewShemaContext.Provider
      value={{ modelViewSchema, dispatchModelViewSchema }}
    >
      {props.children}
    </ModelViewShemaContext.Provider>
  );
};

export default ModelViewShemaContextProvider;
