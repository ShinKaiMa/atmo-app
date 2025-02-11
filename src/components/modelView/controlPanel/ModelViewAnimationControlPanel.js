import React, { useEffect } from "react";

const ModelViewAnimationControlPanel = props => {
  return (
    <div>
      <div
        className="tight card-panel grey lighten-5 z-depth-1 waves-effect waves-gray"
        style={{ width: "100%" }}
        // style={{ width: "100%", maxHeight:"10px", overflowY: "scroll" }}
      >
        <div
          className="row valign-wrapper"
          style={{
            marging: "0px",
            padding: "0px",
            margin: "0"
          }}
        >
          {/* play button */}
          <div className="col s7 tight">
              <a
                className="btn btn-flat btn-floating  waves-effect waves-gray"
                style={{ backgroundColor: "transparent",border: "1px gray solid" }}
                title="speed down"
              >
                <i className="material-icons" style={{ color: "gray" }}>
                  skip_previous
                </i>
              </a>
              <a
                title="play"
                className="btn btn-flat btn-floating  waves-effect waves-gray"
                style={{
                  backgroundColor: "transparent",
                  border: "1px gray solid"
                }}
              >
                <i className="material-icons" style={{ color: "gray" }}>
                  play_arrow
                </i>
              </a>
              <a
                className="btn btn-flat btn-floating  waves-effect waves-gray"
                style={{ backgroundColor: "transparent", border: "1px gray solid" }}
                title="speed up"
              >
                <i className="material-icons" style={{ color: "gray" }}>
                  skip_next
                </i>
              </a>
              <a
                className="btn-flat btn-floating waves-effect"
                style={{ backgroundColor: "transparent", marginLeft: "0px" }}
                title="loop"
              >
                <i
                  className="material-icons"
                  style={{ color: "rgb(190, 190, 190)" }}
                >
                  repeat
                </i>
              </a>
              </div>

              <div className="col s5 tight">
              <span
                className="right"
                style={{
                  color: "gray",
                  fontSize: "15px",
                  lineHeight: "35px",
                  marginLeft: "5px"
                }}
              >
                FPS
              </span>
              <a
                className="btn-floating btn-flat btn-small  waves-effect waves-light right"
                style={{
                  backgroundColor: "rgb(200, 200, 200)",
                  fontSize: "20px"
                }}
                title="speed down"
              >
                <i
                  className="material-icons small"
                  style={{ color: "white", fontSize: "20px" }}
                >
                  remove
                </i>
              </a>
              <span
                className="right"
                style={{
                  color: "gray",
                  fontSize: "20px",
                  lineHeight: "30px",
                  marginRight: "5px",
                  marginLeft: "5px"
                }}
              >
                9
              </span>
              <a
                className="btn-floating btn-flat btn-small waves-effect waves-light right"
                style={{ backgroundColor: "rgb(200, 200, 200)" }}
                title="speed down"
              >
                <i className="small material-icons" style={{ color: "white" }}>
                  add
                </i>
              </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ModelViewAnimationControlPanel;
