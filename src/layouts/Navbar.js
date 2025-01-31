import React, { useContext, useRef, useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import MobileSideNavbar from "../components/MobileSideNavbar";
import DeskTopSideNavbar from "../components/DeskTopSideNavbar";
import { AppStatusContext } from "../contexts/AppStatusContext";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useWindowSize from "../hooks/useWindowSize";

const Navbar = () => {
  useWindowSize();
  const { appStatus, dispatchAppStatus } = useContext(AppStatusContext);
  const nav = useRef(null);
  let [width, height] = appStatus.windowSize;

  // handling all "hidable" component while onScoll
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isNavShow = currPos.y < prevPos.y && currPos.y < -30;
      if (isNavShow !== appStatus.isNavHide)
        dispatchAppStatus({ type: "SET_IS_NAV_HIDE", payload: isNavShow });

      const isBotNavShow = currPos.y > prevPos.y && currPos.y < -45;
      if (isBotNavShow !== appStatus.isBotNavHide)
        dispatchAppStatus({
          type: "SET_IS_BOT_NAV_HIDE",
          payload: isBotNavShow
        });
    },
    [appStatus.isNavHide, appStatus.isBotNavHide]
  );

  return (
    <div>
      <div className="navbar-fixed">
        <nav ref={nav} style={{ top: appStatus.isNavHide && appStatus.isMobile? "-64px" : "0px" }}>
          <div className="nav-wrapper" style={{ backgroundColor: "#14293D" }}>
            <a
              href={null}
              data-target="slide-out"
              className="sidenav-trigger show-on-medium-and-down"
            >
              <i className="material-icons ">menu</i>
            </a>
            <Link to="/">
              <div
                className="brand-logo left"
                style={{
                  marginLeft: "40px",
                  fontSize: "20px",
                  display: appStatus.isMobile ? "none" : "",
                }}
                // onClick={(e) => handleClick(e)}
              >
                <i
                  className="material-icons show-on-medium-and-up"
                  style={{
                    color: "#0ACAF5",
                    fontSize: "40px",
                  }}
                >
                  cloud_queue
                </i>
                ATMO IO
              </div>
            </Link>
            {/* desk-top navbar icon */}
            <ul
              id="nav"
              className="right hide-on-small-only show-on-medium-and-up"
            >
              <li>
                <a href="collapsible.html">About</a>
              </li>
              <li>
                <a href="collapsible.html">Contact Us</a>
              </li>
            </ul>
            {/* mobile navbar icon */}
            <ul id="nav-mobile" className="right hide-on-med-and-up">
              <li>
                <a
                  className="btn-flat waves-effect waves-light"
                  style={{ margin: "0px" }}
                >
                  <i className="material-icons" style={{ color: "white" }}>
                    person
                  </i>
                </a>
              </li>
              <li>
                <a
                  className="btn-flat waves-effect waves-light"
                  style={{ margin: "0px" }}
                >
                  <i className="material-icons" style={{ color: "white" }}>
                    language
                  </i>
                </a>
              </li>
            </ul>

            {/* preloader */}
            {appStatus.isLoading ? (
              <div
                class="progress"
                style={{
                  backgroundColor: "#0ACAF5",
                  height: "6px",
                  display: ""
                }}
              >
                <div
                  class="indeterminate"
                  style={{ backgroundColor: "white" }}
                ></div>
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>
      </div>
      {/* <div class="progress" style={{padding:0,margin:0}}>
          <div class="indeterminate"></div>
        </div> */}
      <MobileSideNavbar props />
      <DeskTopSideNavbar props />
    </div>
  );
};

export default withRouter(Navbar);
