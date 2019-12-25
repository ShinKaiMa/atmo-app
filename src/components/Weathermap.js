import React, { useState, useEffect, useContext } from "react";

const Weathermap = ({
  info,
  idx,
  isLandScapeMode,
  currentIMGIdx,
  height,
  width
}) => {
  const [imgDOM, setImgDom] = useState();
  useEffect(() => {
    let img = document.getElementsByClassName(`left ${idx}`);
    setImgDom(img);
    console.log(img);
  },[])

  useEffect(() => {
    console.log(imgDOM);
  },[info])

  return (
    <img
      className={`left ${idx}`}
      style={{
        display: idx === currentIMGIdx ? "" : "none",
        height: isLandScapeMode ? height / 1.4 : "",
        width: isLandScapeMode ? "" : width / 1.2
      }}
      src={info.url}
    />
  );
};

export default Weathermap;
