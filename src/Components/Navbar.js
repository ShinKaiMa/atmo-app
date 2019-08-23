import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { withRouter } from "react-router-dom";

class Navbar extends React.Component {
  componentDidMount() {
    let elem = document.querySelector(".sidenav");
    let instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }

  render() {
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

            <a href="#!" class="brand-logo left" style={{marginLeft:'40px'}}>
              <i class="material-icons show-on-medium-and-up" style={{color:'#0ACAF5', fontSize: '40px'}}>cloud_queue</i>ATMO IO
            </a>

            {/* desk-top navbar icon */}
            <ul
              id="nav"
              className="right hide-on-small-only show-on-medium-and-up"
            >
              <li>
                <a>Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
            {/* mobile navbar icon */}
            <ul id="nav-mobile" className="right hide-on-med-and-up">
              <li>
                <a
                  class="btn-flat waves-effect waves-light"
                  style={{ margin: "0px" }}
                >
                  <i class="material-icons" style={{ color: "white" }}>
                    person
                  </i>
                </a>
              </li>
              <li>
                <a
                  class="btn-flat waves-effect waves-light"
                  style={{ margin: "0px" }}
                >
                  <i class="material-icons" style={{ color: "white" }}>
                    person
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <ul
          id="slide-out"
          className="sidenav sidenav-fixed hide-on-large-only"
          style={{ width: "65%" }}
        >
          <li>
            <a href="#!">1 Sidebar Link</a>
          </li>
          <li>
            <a href="#!">2 Sidebar Link</a>
          </li>
        </ul>
        <ul
          id="slide-out"
          className="sidenav sidenav-fixed hide-on-med-and-down"
          style={{ width: "300px" }}
        >
          <li>
            <a href="#!">1 Sidebar Link</a>
          </li>
          <li>
            <a href="#!">2 Sidebar Link</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default withRouter(Navbar);
