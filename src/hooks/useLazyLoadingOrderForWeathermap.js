import { WeathermapInfoContext } from '../contexts/WeathermapContext'
import React, { useState, useEffect, useContext } from "react";

/**
 * Hook for dispatching "loading order" (lazy loading) for each weathermap components,
 * should cooperate with useWeathermapLoadingStatus hook.
 * 
 * flux concept:
 * Step 1:
 * weathermap component <=== dispatch "loading command" and get "loading status" by      t    h    i    s      hook ===> weathermapInfo context
 * 
 * Step 2:
 * weathermap component <=== dispatch "loading status" and get "loading command" by useWeathermapLoadingStatus hook ===> weathermapInfo context
 */
export const useLazyLoadingOrderForWeathermap = (weathermapsResponse, currentWeathermapIdx) => {
    const [loadingQueue, updateLoadingQueue] = useState([]);
    const { weathermapContext, dispatchWeathermapInfo } = useContext(WeathermapInfoContext);


    // Step 1: initialize isStartLoading status for each available weathermap when got new weathermapsResponse
    useEffect(() => {
        if (weathermapsResponse) {
            // initialize isStartLoadingStatus and isLoadingCompleteStatus status array
            if (weathermapsResponse.availableFcstHour && weathermapsResponse.availableFcstHour.length > 0) {
                let newShouldStartLoading = Array(weathermapsResponse.availableFcstHour.length).fill(false);
                let newIsLoaded = Array(weathermapsResponse.availableFcstHour.length).fill(false);
                dispatchWeathermapInfo({ type: "SET_SHOULD_START_LOADING", payload: newShouldStartLoading });
                dispatchWeathermapInfo({ type: "SET_IS_LOADED", payload: newIsLoaded });
            }
        }
    }, [weathermapsResponse]);

    // Step 2: dispatch new loading status from "loadingStatus" and "currentWeathermapIdx"
    useEffect(() => {
        // ensure be initialized
        if (weathermapContext.shouldStartLoading.length > 0 && weathermapContext.isLoaded.length > 0) {
            // init
            if(!weathermapContext.shouldStartLoading.includes(true)){
                dispatchWeathermapInfo({ type: "LOAD_RIGHT_DIR", payload:{currentIdx:currentWeathermapIdx}});
            }
        }
    }, [weathermapContext.shouldStartLoading, weathermapContext.isLoaded])



    const getQueueOrderBylatestStatus = (shouldStartLoading, currentWeathermapIdx) => {

    }
    return weathermapContext.shouldStartLoading;
}