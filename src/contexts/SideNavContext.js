import React, { createContext, useReducer, useEffect } from 'react';
import { sideNavReducer } from '../reducers/sideNavReducer';

export const SideNavContext = createContext();

const SideNavContextProvider = (props) => {
  const [sideNavOptions, dispatch] = useReducer(sideNavReducer, [], () => {
    console.log('sideNavOptions init');
    return [];
  });

  return (
    <SideNavContext.Provider value={{ sideNavOptions, dispatch }}>
      {props.children}
    </SideNavContext.Provider>
  );
}
 
export default SideNavContextProvider;