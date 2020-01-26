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
        let trigerBy = Array(
          weathermapsResponse.availableFcstHour.length
        );
        dispatchWeathermapInfo({
          type: "INIT_SHOULD_START_LOADING",
          payload: newShouldStartLoading
        });
        dispatchWeathermapInfo({
          type: "INIT_LOADED_STATUS",
          payload: newIsLoaded
        });
        dispatchWeathermapInfo({
          type: "INIT_TRIGER_BY",
          payload: trigerBy
        });
      }
    }
  }, [weathermapsResponse]);

  // Step 2: dispatch new loading status from "loadingStatus" and "currentWeathermapIdx"
  useEffect(() => {
    // ensure weathermapContext was initialized
    if (
      weathermapContext.shouldStartLoading.length > 0 &&
      weathermapContext.isLoaded.length > 0 &&
      weathermapContext.trigerBy.length > 0
    ) {
      // initialize (triger) lazy loading
      if (!weathermapContext.shouldStartLoading.includes(true)) {
        dispatchWeathermapInfo({
          type: "LOAD_RIGHT_DIR",
          currentIdx: currentWeathermapIdx
        });
        dispatchWeathermapInfo({
          type: "LOAD_LEFT_DIR",
          currentIdx: currentWeathermapIdx
        });
      }
    }
  }, [weathermapContext.shouldStartLoading, weathermapContext.isLoaded]);


  //Step 3: re-triger inactive lazy loading
  useEffect(() => {
    if (
      weathermapsResponse.availableFcstHour &&
      weathermapsResponse.availableFcstHour.length > 0
    ) {
      if (!weathermapContext.islazyloadingActivated.right) {
        //try to re start right-direction LZ
        dispatchWeathermapInfo({
          type: "LOAD_RIGHT_DIR",
          currentIdx: currentWeathermapIdx
        });
      }
      if (!weathermapContext.islazyloadingActivated.left) {
        //try to re start left-direction LZ
        dispatchWeathermapInfo({
          type: "LOAD_LEFT_DIR",
          currentIdx: currentWeathermapIdx
        });
      }

    }
  }, [currentWeathermapIdx]);


  return {shouldStartLoading: weathermapContext.shouldStartLoading};
};
