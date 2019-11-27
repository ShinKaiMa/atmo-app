import { useContext, useState, useEffect } from "react";
import { fetchModelViewSchema } from "../api/atmoAPI"
import { UserSelectedModelViewContext } from '../contexts/ModelViewContext'
import { AppStatusContext } from '../contexts/AppStatusContext'
import { constants } from "../config/constant"

/**
 * 
 * @param {queryModel} queryModel 
 * @param {queryArea} queryArea 
 */
export const useModelViewSchemaFromAPI = ({queryModel,queryArea}) => {
    const { selectedModelViewInfo, dispatchSelectedModelViewInfo } = useContext(UserSelectedModelViewContext);
    const { appStatus, dispatchAppStatus } = useContext(AppStatusContext);
    const [ modelViewSchema, setModelViewSchema ] = useState();

    useEffect(() => {
        async function fetchAndSetModelViewSchema(){
            try {
                dispatchAppStatus({type: 'SET_IS_LOADING', payload:true });
                console.log(`get queryModel : ${queryModel}`);
                console.log(`get queryArea : ${queryArea}`);
                if (queryModel && queryArea) {
                    console.log(`content : ${JSON.stringify({ model:mapRouterModelParamToRequestModel(queryModel), area:queryArea })}`);
                    let response = await fetchModelViewSchema({ model:mapRouterModelParamToRequestModel(queryModel), area:queryArea });
                    let newModelViewSchema = response.data;
                    console.log(`return newModelViewSchema : ${newModelViewSchema}`);
                    if(newModelViewSchema){
                        setModelViewSchema(newModelViewSchema);
                        // dispatchSelectedModelViewInfo({ type: 'SET_AREA', payload:areas[0]});
                    }
                }
            } catch (err) {
                console.error(err);
            } finally{
                dispatchAppStatus({type: 'SET_IS_LOADING', paylaod:false });
            }
        }
        fetchAndSetModelViewSchema(queryModel);
    }, [queryModel,queryArea])

    return modelViewSchema;
}

const mapRouterModelParamToRequestModel = (modelFromRouter) => {
    if (modelFromRouter === 'CWBWRF') {
        return constants.CWB_WRF_3KM_REQUEST_MODEL_NAME;
    } else {
        // TODO other model
        return constants.CWB_WRF_3KM_REQUEST_MODEL_NAME;
    }
}