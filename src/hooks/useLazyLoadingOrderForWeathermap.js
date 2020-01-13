import { WeathermapInfoContext } from '../contexts/WeathermapContext'


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
export const useLazyLoadingOrderForWeathermap = (weathermapsResponse, currentWeathermapIdx ) => {
    // const [loadingQueue, updateLoadingQueue] = useState([]);
    const [isStartLoadingStatus, updateIsStartLoadingStatus] = useState([]);
    const { weathermapInfo, dispatchWeathermapInfo } = useContext(WeathermapInfoContext);


    // Step 1: initialize isStartLoading status when got new weathermapsResponse
    useEffect(() => {

        if(weathermapsResponse){
            // initialize isStartLoading status array
            if(weathermapsResponse.totalFcstHour && weathermapsResponse.fcstHourIncrement && weathermapsResponse.iniFcstHour){
                let length = ((totalFcstHour - iniFcstHour) / fcstHourIncrement) + 1;
                let newStartLoading = Array(length).fill(false);
                updateIsStartLoadingStatus(newStartLoading);
            }
            
        }
    }, [weathermapsResponse])

    // Step 2: dispatch loading cmd from "loadingStatus" and "currentWeathermapIdx"
    useEffect(() => {

    }, [isStartLoadingStatus])



    const getQueueOrder = ()
    return loadingQueue;
}