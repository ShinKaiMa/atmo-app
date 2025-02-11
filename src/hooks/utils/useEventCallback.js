import React, {  useEffect,  useRef, useCallback } from "react";

const useEventCallback = (fn, dependencies) => {
    const ref = useRef(() => {
      throw new Error('Cannot call an event handler while rendering.');
    });
  
    useEffect(() => {
      ref.current = fn;
    }, [fn, ...dependencies]);
  
    return useCallback(() => {
      const fn = ref.current;
      return fn();
    }, [ref]);
}

export default useEventCallback;