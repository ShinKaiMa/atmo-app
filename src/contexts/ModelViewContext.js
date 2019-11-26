import React, { createContext, useReducer } from 'react';
import { ModelViewReducer } from '../reducers/ModelViewReducer';

export const ModelViewContext = createContext();

const ModelViewContextProvider = (props) => {
  const [modelViewInfo, dispatchModelViewInfo] = useReducer(ModelViewReducer,{selected:undefined} );

  return (
    <ModelViewContext.Provider value={{ modelViewInfo, dispatchModelViewInfo }}>
      {props.children}
    </ModelViewContext.Provider>
  );
}
 
export default ModelViewContextProvider;