import { useContext, useState, useEffect } from "react";
import { fetchAreas } from "../api/atmoAPI"
import { constants } from "../config/constant"
import { ModelViewContext } from '../contexts/ModelViewContext'

export const useAreasFromAPI = queryModel => {
    const { modelViewInfo, dispatchModelViewInfo } = useContext(ModelViewContext);
    const [areas, setAreas] = useState();

    useEffect(() => {
        async function fetchAreasFromAPI(queryModel){
            try {
                console.log(`get queryModel : ${queryModel}`);
                if (queryModel) {
                    let response = await fetchAreas({ model: mapRouterModelParamToRequestModel(queryModel) });
                    let areas = response.data;
                    console.log(`return areas : ${areas}`);
                    console.log(`return areas[0] : ${areas[0]}`);
                    setAreas(areas);
                    if(!modelViewInfo.selected && areas.length > 0){
                        dispatchModelViewInfo({ type: 'SET_AREA', payload:areas[0]});
                    }
                } else {
                    return null;
                }
            } catch (err) {
                console.error(err);
                return null;
            }
        }
        fetchAreasFromAPI(queryModel);
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