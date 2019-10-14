import React, { useState, useContext, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom'
import { SideNavContext } from '../contexts/SideNavContext';
import M from "materialize-css/dist/js/materialize.min.js";
import MobileSideNavbar from "../components/MobileSideNavbar";
import DeskTopSideNavbar from "../components/DeskTopSideNavbar";
// import M from "materialize-css";

const Navbar = (props) => {
  const [collapsibles, setCollapsibles] = useState();

  console.log(`props: ${JSON.stringify(props.location.pathname)}`);
  // const [collapsibleItem, setCollapsibleItem] = useState();
  const { sideNavOptions, dispatch } = useContext(SideNavContext);
  useEffect(() => {
    // let elem = document.querySelectorAll(".sidenav");
    // let sidenavs = M.Sidenav.init(elem, {
    //   edge: "left",
    //   inDuration: 250,
    //   draggable: true
    // });

    // let collapsibleElem = document.querySelectorAll('.collapsible');
    // setCollapsibles(M.Collapsible.init(collapsibleElem, {
    //   accordion: false
    // }));
  }, []);

  return (
    <div className="sideNavBar">
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: "#14293D" }}>
          <a
            href="#"
            data-target="slide-out"
            className="sidenav-trigger show-on-medium-and-down"
          >
            <i className="material-icons ">menu</i>
          </a>
          <Link to="/">
            <div
              className="brand-logo left"
              style={{ marginLeft: "40px", fontSize: "20px" }}
            // onClick={(e) => handleClick(e)}
            >
              <i
                className="material-icons show-on-medium-and-up"
                style={{ color: "#0ACAF5", fontSize: "40px" }}
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
              <a href="collapsible.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
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
          <div class="progress" style={{ backgroundColor: "#bef2fe", height: "7px", display: "none" }}>
            <div class="indeterminate" style={{ backgroundColor: "#0da3c5" }}></div>
          </div>
        </div>
      </nav>
      {/* mobile sidenav */}
      {/* <ul
        id="slide-out"
        className="sidenav sidenav-fixed hide-on-large-only collection"
        style={{ width: "350px" }}
      >
        <ul className="collapsible collapsible-accordion">
          <li className="active">
            <div className="collapsible-header waves-effect waves-gray" style={{ fontSize: "12px", fontWeight: "bold" }}>
              <i className="material-icons" style={{ fontSize: "16px" }}>language</i>
              Global Model
            </div>
            <div className="collapsible-body">
                <li>
                  <a className="collection-item" style={{ fontSize: "12px", color:"black", lineHeight:"45px" }}><span style={{ fontSize: "10px", backgroundColor: "#0ACAF5"}} data-badge-caption="-hourly" className="new badge">6</span>GFS</a>
                </li>
                <li>
                  <a className="collection-item" style={{ fontSize: "12px", color:"black", lineHeight:"45px" }}><span style={{ fontSize: "10px", backgroundColor: "#0ACAF5" }} data-badge-caption="Analysis Only" className="new badge"></span>ECMWF</a>
                </li>
            </div>
          </li>
          <li className="active">
            <div className="collapsible-header waves-effect waves-gray" style={{ fontSize: "12px", fontWeight: "bold" }}>
              <i className="material-icons" style={{ fontSize: "16px" }}>gps_fixed</i>
              Regional Model
            </div>
            <div className="collapsible-body">
                <li>
                  <a className="collection-item" style={{ fontSize: "12px", color:"black", lineHeight:"45px" }}><span style={{ fontSize: "10px", backgroundColor: "#0ACAF5" }} data-badge-caption="-hourly" className="new badge">6</span>CWB WRF</a>
                </li>
            </div>
          </li>
          <li className={props.location.pathname === '/overview' ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              if (props.location.pathname !== '/overview')
                props.history.push('/overview');
            }}>
            <div className="collapsible-header waves-effect waves-gray" style={{ fontSize: "12px", fontWeight: "bold", color: "black" }} >
              <i className="material-icons" style={{ fontSize: "16px" }}>apps</i>
              Weather Overview
            </div>
            <div className="collapsible-body">
            </div>
          </li>
        </ul>
      </ul> */}
      <MobileSideNavbar props/>
      {/* desk-top sidenav */}
      <DeskTopSideNavbar props/>
      {/* <ul
        id="slide-out"
        className="sidenav sidenav-fixed hide-on-med-and-down"
        style={{ width: "200px" }}>
        <ul className="collapsible collapsible-accordion">
          <li className="active">
            <div className="collapsible-header waves-effect waves-gray" style={{ fontSize: "12px", fontWeight: "bold" }}>
              <i className="material-icons" style={{ fontSize: "16px" }}>language</i>
              Global Model
            </div>
            <div className="collapsible-body">
                <li onClick={()=>props.history.push('/model/global/forcast/GFS')}>
                  <a className="collection-item" style={{ fontSize: "12px" }}><span style={{ fontSize: "10px", backgroundColor: "#0ACAF5"}} data-badge-caption="-hourly" className="new badge">6</span>GFS</a>
                </li>
                <li onClick={()=>props.history.push('/model/global/analysis/ECMWF')}>
                  <a className="collection-item" style={{ fontSize: "12px" }}><span style={{ fontSize: "10px", backgroundColor: "#0ACAF5" }} data-badge-caption="Analysis Only" className="new badge"></span>ECMWF</a>
                </li>
            </div>
          </li>
          <li className="active">
            <div className="collapsible-header waves-effect waves-gray" style={{ fontSize: "12px", fontWeight: "bold" }}>
              <i className="material-icons" style={{ fontSize: "16px" }}>gps_fixed</i>
              Regional Model
              <span class="new badge red">4</span>
            </div>
            <div className="collapsible-body">
                <li  onClick={()=>props.history.push('/model/global/forcast/CWBWRF')}>
                  <a className="collection-item" style={{ fontSize: "12px" }}><span style={{ fontSize: "10px", backgroundColor: "#0ACAF5" }} data-badge-caption="-hourly" className="new badge">6</span>CWB WRF</a>
                </li>
            </div>
          </li>
          <li className={props.location.pathname === '/overview' ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              if (props.location.pathname !== '/overview')
                props.history.push('/overview');
            }}>
            <div className="collapsible-header waves-effect waves-gray" style={{ fontSize: "12px", fontWeight: "bold", color: "black" }} >
              <i className="material-icons" style={{ fontSize: "16px" }}>apps</i>
              Weather Overview
            </div>
            <div className="collapsible-body">
            </div>
          </li>
        </ul>
      </ul> */}
    </div>
  )
};

export default withRouter(Navbar);
