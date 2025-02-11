import { useContext, useEffect } from "react";
import { fetchModelViewSchema } from "../api/atmoAPI"
import { UserSelectedModelViewContext } from '../contexts/UserSelectedModelViewContext'
import { ModelViewShemaContext } from '../contexts/ModelViewSchemaContext'
import { AppStatusContext } from '../contexts/AppStatusContext'
import { constants } from "../config/constant"

/**
 * 
 * @param {queryModel} queryModel 
 * @param {queryArea} queryArea 
 */
export const useModelViewSchemaFromAtmo = ({queryModel,queryArea}) => {
    const { selectedModelViewInfo, dispatchSelectedModelViewInfo } = useContext(UserSelectedModelViewContext);
    const { modelViewSchema, dispatchModelViewSchema } = useContext(ModelViewShemaContext);
    const { dispatchAppStatus } = useContext(AppStatusContext);
    // const [ modelViewSchema, setModelViewSchema ] = useState();

    useEffect(() => {
        async function fetchAndDispatchModelViewSchema(queryModel, queryArea){
            try {
                dispatchAppStatus({type: 'SET_IS_LOADING', payload:true });
                if (queryModel && queryArea) {
                    let response = await fetchModelViewSchema({ model:mapRouterModelParamToRequestModel(queryModel), area:queryArea });
                    let newModelViewSchema = response.data;
                    if(newModelViewSchema && Object.keys(newModelViewSchema.dataTypes).length > 0 && newModelViewSchema.dataTypes[Object.keys(newModelViewSchema.dataTypes)[0]][0]){
                        // setModelViewSchema(newModelViewSchema);
                        if(selectedModelViewInfo && selectedModelViewInfo.bottomNavIdx){
                            dispatchSelectedModelViewInfo({ type: 'SET_DETAIL_TYPE', payload: newModelViewSchema.dataTypes[Object.keys(newModelViewSchema.dataTypes)[selectedModelViewInfo.bottomNavIdx]][0]});
                        } else {
                            dispatchSelectedModelViewInfo({ type: 'SET_DETAIL_TYPE', payload: newModelViewSchema.dataTypes[Object.keys(newModelViewSchema.dataTypes)[0]][0]});
                        }
                        
                        // keep same index when update schema
                        // dispatchSelectedModelViewInfo({type:"SET_BOT_NAV_IDX", payload:0});

                        dispatchModelViewSchema({type:'SET_MODEL_VIEW_SCHEMA', payload:newModelViewSchema});
                        if(newModelViewSchema.startDate && newModelViewSchema.startDate.length > 0 && selectedModelViewInfo && !selectedModelViewInfo.startDate)
                            dispatchSelectedModelViewInfo({type:"SET_START_DATE", payload:newModelViewSchema.startDate[0]})
                    }
                }
                dispatchAppStatus({type: 'SET_IS_LOADING', paylaod:false });
            } catch (err) {
                console.error(err);
            }
        }
        fetchAndDispatchModelViewSchema(queryModel, queryArea);
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