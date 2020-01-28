import { WeathermapInfoContext } from "../contexts/WeathermapContext";
import { useEffect, useContext } from "react";

/**
 * Hook for dispatching "loading order" (lazy loading) for each weathermap components,
 */
export const useLazyLoadingOrderForWeathermap = (
  weathermapsResponse,
  currentWeathermapIdx
) => {
  const { weathermapContext, dispatchWeathermapInfo } = useContext(
    WeathermapInfoContext
  );

  // Step 1: initialize isStartLoading status for each available weathermap when got new weathermapsResponse
  useEffect(() => {
    if (weathermapsResponse) {
      // initialize isStartLoadingStatus and isLoadingCompleteStatus status array
      if (
        weathermapsResponse.availableFcstHour &&
        weathermapsResponse.availableFcstHour.length > 0
      ) {
        let newShouldStartLoading = Array(
          weathermapsResponse.availableFcstHour.length
        ).fill(false);
        let newIsLoaded = Array(
          weathermapsResponse.availableFcstHour.length
        ).fill(false);
        dispatchWeathermapInfo({
          type: "INIT_SHOULD_START_LOADING",
          payload: newShouldStartLoading
        });
        dispatchWeathermapInfo({
          type: "INIT_LOADED_STATUS",
          payload: newIsLoaded
        });
      }
    }
  }, [weathermapsResponse]);

  // Step 2: dispatch new loading status from "loadingStatus" and "currentWeathermapIdx"
  useEffect(() => {
    // ensure weathermapContext was initialized
    if (
      weathermapContext.shouldStartLoading.length > 0 &&
      weathermapContext.isLoaded.length > 0
    ) {
      // initialize (triger) lazy loading
      if (!weathermapContext.shouldStartLoading.includes(true)) {
        dispatchWeathermapInfo({
          type: "DO_LAZY_LOADING",
          currentIdx: currentWeathermapIdx
        });
      }
    }
  }, [weathermapContext.shouldStartLoading, weathermapContext.isLoaded]);


  //Step 3: re-triger inactive lazy loading
  useEffect(() => {
    if (
      weathermapsResponse.availableFcstHour &&
      weathermapsResponse.availableFcstHour.length > 0 &&
      !weathermapContext.islazyloadingActivated
    ) {
      dispatchWeathermapInfo({
        type: "DO_LAZY_LOADING",
        currentIdx: currentWeathermapIdx
      });
    }
  }, [currentWeathermapIdx]);


  return {shouldStartLoading: weathermapContext.shouldStartLoading};
};
