import { useContext, useState, useEffect } from "react";
import { fetchAreas } from "../api/atmoAPI"
import { constants } from "../config/constant"
import { UserSelectedModelViewContext } from '../contexts/ModelViewContext'
import { AppStatusContext } from '../contexts/AppStatusContext'

export const useAreasFromAtmo = queryModel => {
    const { selectedModelViewInfo, dispatchSelectedModelViewInfo } = useContext(UserSelectedModelViewContext);
    const { appStatus, dispatchAppStatus } = useContext(AppStatusContext);
    const [areas, setAreas] = useState();

    useEffect(() => {
        async function fetchAndSetAreas(queryModel){
            try {
                dispatchAppStatus({type: 'SET_IS_LOADING', payload:true });
                if (queryModel) {
                    let response = await fetchAreas({ model: mapRouterModelParamToRequestModel(queryModel) });
                    let newAreas = response.data;
                    if(newAreas && newAreas.length > 0){
                        setAreas(newAreas);
                        dispatchSelectedModelViewInfo({ type: 'SET_AREA', payload:newAreas[0]});
                    }
                } else {
                    return null;
                }
            } catch (err) {
                console.error(err);
                return null;
            } finally{
                dispatchAppStatus({type: 'SET_IS_LOADING', paylaod:false });
            }
        }
        fetchAndSetAreas(queryModel);
    }, [queryModel])

    return areas;
}

const mapRouterModelParamToRequestModel = (modelFromRouter) => {
    if (modelFromRouter === 'CWBWRF') {
        return constants.CWB_WRF_3KM_REQUEST_MODEL_NAME;
    } else {
        // TODO other model
        return constants.CWB_WRF_3KM_REQUEST_MODEL_NAME;
    }
}