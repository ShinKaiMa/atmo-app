import { useContext, useState, useEffect } from "react";
import { fetchWeathermaps } from "../api/atmoAPI"
import { constants } from "../config/constant"
import { WeathermapInfoContext } from '../contexts/WeathermapContext'
import { AppStatusContext } from '../contexts/AppStatusContext'
import { UserSelectedModelViewContext } from '../contexts/UserSelectedModelViewContext'

export const useWeathermapsFromAtmo = ({queryModel, queryArea, queryDetailType, queryStartDateString}) => {
    const { selectedModelViewInfo, dispatchSelectedModelViewInfo } = useContext(UserSelectedModelViewContext);
    const { weathermapContext, dispatchWeathermapInfo } = useContext(WeathermapInfoContext);
    const { appStatus, dispatchAppStatus } = useContext(AppStatusContext);
    const [weathermaps, setWeathermaps] = useState();

    useEffect(() => {
        async function fetchWeathermapsFromAtmo(queryModel, queryArea, queryDetailType, queryStartDateString){
            try {
                dispatchAppStatus({type: 'SET_IS_LOADING', payload:true });
                if (queryModel && queryArea && queryDetailType && queryStartDateString) {
                    console.log(`going to fetch weathermap`);
                    let response = await fetchWeathermaps({ model: mapRouterModelParamToRequestModel(queryModel), area:queryArea, detailType:queryDetailType, startDateString:queryStartDateString });
                    let newWeathermapsInfo = response.data;
                    if(newWeathermapsInfo && !newWeathermapsInfo.error && newWeathermapsInfo.availableFcstHour.length > 0){
                        // must dispatch slider fcst hour first
                        //TODO: get nearest idx
                        if(!newWeathermapsInfo.availableFcstHour.includes(selectedModelViewInfo.fcstHour)){
                            dispatchSelectedModelViewInfo({ type: 'SET_FCST_HOUR', payload:newWeathermapsInfo.weathermapsInfo[0].fcstHour});
                            dispatchSelectedModelViewInfo({ type: 'SET_SLIDER_FCST_HOUR', payload:newWeathermapsInfo.weathermapsInfo[0].fcstHour});
                        } else {
                            dispatchSelectedModelViewInfo({ type: 'SET_SLIDER_FCST_HOUR', payload:selectedModelViewInfo.fcstHour});
                        }
                        dispatchWeathermapInfo({ type: 'SET_INFO', payload:newWeathermapsInfo});
                    } else {
                        // TODO: handle error
                        dispatchWeathermapInfo({ type: 'SET_INFO', payload:{availableFcstHour:[]}});
                    }
                } else {
                    // TODO: handle error
                }
            } catch (err) {
                console.error(err);
                // TODO: handle error
            } finally{
                dispatchAppStatus({type: 'SET_IS_LOADING', payload:false });
            }
        }
        fetchWeathermapsFromAtmo(queryModel, queryArea, queryDetailType, queryStartDateString);
    }, [queryModel, queryArea, queryDetailType, queryStartDateString])

    return weathermapContext.weathermapsResponse
}

const mapRouterModelParamToRequestModel = (modelFromRouter) => {
    if (modelFromRouter === 'CWBWRF') {
        return constants.CWB_WRF_3KM_REQUEST_MODEL_NAME;
    } else {
        // TODO other model
        return constants.CWB_WRF_3KM_REQUEST_MODEL_NAME;
    }
}