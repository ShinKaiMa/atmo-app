import React, { useState, useContext, useEffect } from "react";
import { className } from "postcss-selector-parser"
import M from "materialize-css/dist/js/materialize.min.js";
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton';

const Test = () => {

    useEffect(()=>{

    },[])


    return(
    <div className="mainLayout container" id="container">
        <SkeletonTheme color="rgba(220,220,220,1)" highlightColor="rgba(240,240,240,1)" duration={1}>
            <Skeleton width={"50%"}/>
            <Skeleton width={"100%"} count={50}/>
        </SkeletonTheme>
    </div>
    )
}

export default Test;