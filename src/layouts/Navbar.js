import React, { useState, useContext, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom'
import { SideNavContext } from '../contexts/SideNavContext';
import M from "materialize-css/dist/js/materialize.min.js";
// import M from "materialize-css";

const Navbar = (props) => {
  console.log(`props: ${JSON.stringify(props.location.pathname)}`);
  // const [collapsibleItem, setCollapsibleItem] = useState();
  const { sideNavOptions, dispatch } = useContext(SideNavContext);
  useEffect(() => {
    let elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });

    let collapsibleElem = document.querySelectorAll('.collapsible');
    let collapsible = M.Collapsible.init(collapsibleElem, {
      accordion: false
    });
    // let collapsible = M.Collapsible.getInstance(elem);
    var instance = M.Collapsible.getInstance(collapsibleElem);
    // instance.open();
    // console.log("collapsible: " + collapsible)
    // setCollapsibleItem(M.Collapsible.init(collapsibleElem, {
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
      <ul
        id="slide-out"
        className="sidenav sidenav-fixed hide-on-large-only collection"
        style={{ width: "150px" }}
      >
        <li>
          <a href="#!" className="collection-item">
            <span className="badge">1</span>Alan
          </a>
        </li>
        <li>
          <a href="#!" className="collection-item">
            <span className="badge">1</span>Alan
            </a>
        </li>
      </ul>
      {/* desk-top sidenav */}
      <ul
        id="slide-out"
        className="sidenav sidenav-fixed hide-on-med-and-down"
        style={{ width: "200px" }}>
        <ul className="collapsible collapsible-accordion">
          <li className="active">
            <div className="collapsible-header waves-effect waves-gray" style={{ fontSize: "12px", fontWeight: "bold" }}>
              <i className="material-icons" style={{ fontSize: "16px" }}>language</i>
              Global Model
              {/* <span class="new badge red">4</span> */}
            </div>
            <div className="collapsible-body">
              <Link to="/model/global/forcast/GFS">
                <li>
                  <a className="collection-item" style={{ fontSize: "12px" }}><span style={{ fontSize: "1px", backgroundColor: "#0ACAF5" }} data-badge-caption="-hourly" className="new badge">6</span>GFS</a>
                </li>
              </Link>
              <Link to="/model/global/analysis/ECMWF">
                <li>
                  <a className="collection-item" style={{ fontSize: "12px" }}><span style={{ fontSize: "1px", backgroundColor: "#0ACAF5" }} data-badge-caption="Analysis Only" className="new badge"></span>ECMWF</a>
                </li>
              </Link>
            </div>
          </li>
          <li className="active">
            <div className="collapsible-header waves-effect waves-gray" style={{ fontSize: "12px", fontWeight: "bold" }}>
              <i className="material-icons" style={{ fontSize: "16px" }}>gps_fixed</i>
              Regional Model
              {/* <span class="new badge red">4</span> */}
            </div>
            <div className="collapsible-body">
              <Link to="/model/regional/forcast/CWBWRF">
                <li>
                  <a className="collection-item" style={{ fontSize: "12px" }}><span style={{ fontSize: "1px", backgroundColor: "#0ACAF5" }} data-badge-caption="-hourly" className="new badge">6</span>CWB WRF</a>
                </li>
              </Link>
            </div>
          </li>
          {/* {console.log(`props.location.pathname === '/obsevation': ${props.location.pathname === '/obsevation'}`)} */}
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
      </ul>
    </div>
  )
};

export default withRouter(Navbar);
