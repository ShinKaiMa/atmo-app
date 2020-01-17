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
export const useLazyLoadingOrderForWeathermap = (weathermapsResponse, currentWeathermapIdx) => {
    // const [loadingQueue, updateLoadingQueue] = useState([]);
    const queueLength = 3;
    const { weathermapContext, dispatchWeathermapInfo } = useContext(WeathermapInfoContext);
    const [ queue, setQueue ] = useState([]);


    // Step 1: initialize isStartLoading status for each available weathermap when got new weathermapsResponse
    useEffect(() => {
        if (weathermapsResponse) {
            // initialize isStartLoadingStatus and isLoadingCompleteStatus status array
            if (weathermapsResponse.availableFcstHour && weathermapsResponse.availableFcstHour.length > 0) {
                let newLoadingStatus = Array(weathermapsResponse.availableFcstHour.length).fill(false);
                let newCompleteStatus = Array(weathermapsResponse.availableFcstHour.length).fill(false);
                dispatchWeathermapInfo({ type: "SET_START_LOADING_STATUS", payload: newLoadingStatus });
                dispatchWeathermapInfo({ type: "SET_LOADING_COMPLETE_STATUS", payload: newCompleteStatus });
            }
        }
    }, [weathermapsResponse]);

    // Step 2: dispatch new loading status from "loadingStatus" and "currentWeathermapIdx"
    useEffect(() => {
        // ensure be initialized
        if (weathermapContext.isStartLoadingStatus.length > 0 && weathermapContext.isLoadingCompleteStatus.length > 0) {

        }
    }, [weathermapContext.isStartLoadingStatus, weathermapContext.isLoadingComplete])



    const getQueueOrderBylatestStatus = (isStartLoadingStatus, currentWeathermapIdx) => {

    }
    return loadingQueue;
}