import React, { useState, useEffect, useContext } from "react";

const Weathermap = ({info, idx, isLandScapeMode, currentIMGIdx, height, width}) => {
    return(<img
        className="left"
        style={{
          display: idx === currentIMGIdx? "":"none",
          height: isLandScapeMode ? height / 1.4 : "",
          width: isLandScapeMode ? "" : width / 1.2
        }}
        src={
          info.url
        }
      />)
}

export default Weathermap;
