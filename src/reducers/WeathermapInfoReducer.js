import { LazyLoadingUtils } from "../utils/LazyLoadingUtils";

export const WeathermapInfoReducer = (weathermapContext, action) => {
  switch (action.type) {
    /**
     * update weathermap info from weathermap API
     */
    case "SET_INFO":
      return { ...weathermapContext, weathermapsResponse: action.payload };
    
    /**
     * initialize @param shouldStartLoading in @param WeathermapInfoContext,
     * each boolean in @param shouldStartLoading array represents "should weathermap start loading"
     */
    case "INIT_SHOULD_START_LOADING":
      return { ...weathermapContext, shouldStartLoading: action.payload };
    
    /**
     * initialize @param isLoaded in @param WeathermapInfoContext,
     * each boolean in @param isLoaded array represents "weathermap is loaded complete or not"
     */
    case "INIT_LOADED_STATUS":
      return { ...weathermapContext, isLoaded: action.payload };
    
    /**
     * initialize @param trigerBy in @param WeathermapInfoContext,
     * each boolean in @param trigerBy array represents
     * "weathermap is triger by which (right/left) lazy loading direction"
     */
    case "INIT_TRIGER_BY":
      return { ...weathermapContext, trigerBy: action.payload };

    /**
     * set @param isLoaded in @param WeathermapInfoContext,
     * @see case:'INIT_LOADED_STATUS' in @param WeathermapInfoReducer
     */
    case "SET_IS_LOADED":
      let newIsLoaded = [...weathermapContext.isLoaded];
      newIsLoaded[action.index] = true;
      return { ...weathermapContext, isLoaded: newIsLoaded };

    /**
     * initaialize all param in @param WeathermapInfoContext
     */
    case "CLEAR_LZ_STATUS":
      return {
        ...weathermapContext,
        isLoaded: [],
        islazyloadingActivated: true,
        shouldStartLoading: []
      };

    /**
     * try to fetch next weathermap (right direction) from current index of model view slider,
     * the order is depends on @see LazyLoadingUtils.getNewStartLoadingStatus()
     */
    case "DO_LAZY_LOADING": {
      let {
        newShouldStartLoading,
        changedIdx
      } = LazyLoadingUtils.getNewShouldStartLoadingStatus(
        weathermapContext.isLoaded,
        weathermapContext.shouldStartLoading,
        action.currentIdx,
      );


      if (changedIdx === undefined) {
        return {
          ...weathermapContext,
          islazyloadingActivated: false
        };
      } else {
        return {
          ...weathermapContext,
          shouldStartLoading: newShouldStartLoading,
          islazyloadingActivated:true
        };
      }
    }
    case "SET_WEATHERMAP_RWD_SIZE":
      return {
        ...weathermapContext,
        wmRwdSize: action.payload,
      };
    default:
      return weathermapContext;
  }
};
