import React, { useState, useEffect, useContext } from "react";
import { UserSelectedModelViewContext } from '../contexts/UserSelectedModelViewContext';
import { useWeathermapsFromAtmo } from '../hooks/useWeathermapsFromAtmo'
import useWindowSize from "../hooks/useWindowSize";


const ModelViewPanel = props => {
    const { selectedModelViewInfo, dispatchSelectedModelViewInfo } = useContext(UserSelectedModelViewContext);
    const [queryWeathermapsInfoParam, setQueryWeathermapsInfoParam] = useState({ queryModel: "", queryArea: "", queryDetailType: "", queryStartDateString: "" });
    const weathermapInfo = useWeathermapsFromAtmo(queryWeathermapsInfoParam);
    const [ width, height ] = useWindowSize();
    const [isLandScapeMode, setIsLandScapeMode] = useState(true);
    // const [isMobileDevice, setIsMobileDevice] = useState(true);
    useEffect(() => {
        if(width > height){
            setIsLandScapeMode(true);
        }else{
            setIsLandScapeMode(false);
        }

        // if(width < 1280 || height < 1280){
        //     setIsMobileDevice(true);
        // } else {
        //     setIsMobileDevice(false);
        // }
    }, [width,height])

    // Weathermap query API effect
    useEffect(() => {
        setQueryWeathermapsInfoParam({
            queryModel: selectedModelViewInfo.model,
            queryArea: selectedModelViewInfo.area,
            queryDetailType: selectedModelViewInfo.detailType,
            queryStartDateString: selectedModelViewInfo.startDate
        })
    }, [selectedModelViewInfo])

    // Component update content effect
    useEffect(() => {

    }, [weathermapInfo])

    return (
        weathermapInfo && !weathermapInfo.error ? weathermapInfo.weathermapsInfo.length > 0 ? <img className="left" style={{height:isLandScapeMode? height/1.3:"", width:isLandScapeMode? "":width/1.2}} src={weathermapInfo.weathermapsInfo[0].url}/> : <span>No available weather map</span>
            : <span>Oops! Something wrong!</span>

    )
}
export default ModelViewPanel;
