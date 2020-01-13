/**
 * Hook for update loading status for each weathermap components,
 * should cooperate with useLazyLoadingForWeathermap hook.
 * 
 * flux concept:
 * Step 1:
 * weathermap component <=== dispatch "loading command" and get "loading status" by useLazyLoadingOrderForWeathermap hook ===> weathermapInfo context
 * 
 * Step 2:
 * weathermap component <=== dispatch "loading status" and get "loading command" by        t    h    i    s          hook ===> weathermapInfo context
 */

export const useWeathermapLoadingStatus = (weathermapsResponse, currentWeathermapIdx ) => {
    const [loadingQueue, updateLoadingQueue] = useState([]);


    useEffect(() => {

    }, [weathermapsResponse])

    return loadingQueue;
}