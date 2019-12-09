import { useContext, useState, useEffect } from "react";
import { fetchWeathermaps } from "../api/atmoAPI"
import { constants } from "../config/constant"
import { UserSelectedModelViewContext } from '../contexts/ModelViewContext'
import { AppStatusContext } from '../contexts/AppStatusContext'

export const useWeathermapsFromAtmo = (queryModel, queryArea, queryDetailType, queryStartDateString) => {
    const { selectedModelViewInfo, dispatchSelectedModelViewInfo } = useContext(UserSelectedModelViewContext);
    const { appStatus, dispatchAppStatus } = useContext(AppStatusContext);
    const [weathermaps, setWeathermaps] = useState();

    useEffect(() => {
        async function fetchWeathermaps(queryModel, queryArea, queryDetailType, queryStartDateString){
            try {
                dispatchAppStatus({type: 'SET_IS_LOADING', payload:true });
                if (queryModel && queryArea && queryDetailType && queryStartDateString) {
                    let response = await fetchWeathermaps({ model: mapRouterModelParamToRequestModel(queryModel), area:queryArea, startDateString:queryStartDateString });
                    let newWeathermaps = response.data;
                    if(newWeathermaps && newWeathermaps.length > 0){
                        setWeathermaps(newWeathermaps);
                        dispatchSelectedModelViewInfo({ type: 'SET_WEATHERMAP', payload:newWeathermaps[0]});
                    }
                } else {
                    return weathermaps;
                }
            } catch (err) {
                console.error(err);
                return weathermaps;
            } finally{
                dispatchAppStatus({type: 'SET_IS_LOADING', paylaod:false });
            }
        }
        fetchWeathermaps(queryModel, queryArea, queryDetailType, queryStartDateString);
    }, [queryModel, queryArea, queryDetailType, queryStartDateString])

    return newWeathermaps;
}

const mapRouterModelParamToRequestModel = (modelFromRouter) => {
    if (modelFromRouter === 'CWBWRF') {
        return constants.CWB_WRF_3KM_REQUEST_MODEL_NAME;
    } else {
        // TODO other model
        return constants.CWB_WRF_3KM_REQUEST_MODEL_NAME;
    }
}