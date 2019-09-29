import React, { useState, useContext, useEffect } from "react";
import { SideNavContext } from '../contexts/SideNavContext';
import M from "materialize-css/dist/js/materialize.min.js";

const Navbar = () => {
  const [isInitialized, setIsInitialized] = useState();
  const { sideNavOptions, dispatch } = useContext(SideNavContext);
  useEffect(() => {
    if (!isInitialized) {
      let elem = document.querySelector(".sidenav");
      M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250
      });
    }
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log(`sideNavOptions before: ${JSON.stringify(sideNavOptions)}`);
    dispatch({type:"UPDATE"});
  }

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
          {/* <a
              className="btn-flat left"
              style={{ marginLeft: "20px",marginRight: '10px',paddingBottom:'70px' }}
            >
              <i className="material-icons" style={{ color: "white", fontSize: '40px' }}>
                cloud_queue
              </i>
            </a>
            <a
              href="#"
              className="brand-logo left"
            >
              ATMO IO
            </a> */}

          <a
            href="#!"
            className="brand-logo left"
            style={{ marginLeft: "40px", fontSize: "20px" }}
            onClick={(e) => handleClick(e)}
          >
            <i
              className="material-icons show-on-medium-and-up"
              style={{ color: "#0ACAF5", fontSize: "40px" }}
            >
              cloud_queue
              </i>
            ATMO IO
            </a>

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
        style={{ width: "200px" }}
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
    </div>
  )
};

export default Navbar;
