import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { withRouter } from "react-router-dom";

class Navbar extends React.Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }

  render() {
    return (
      <div className="sideNavBar">
        <nav>
          <div class="nav-wrapper">
            <a href="#" data-target="slide-out" class="left sidenav-trigger show-on-large">
              <i class="material-icons">menu</i>
            </a>
            <a href="#" class="brand-logo left" >
              Logo
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down ">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
        </nav>
        <ul id="slide-out" class="sidenav">
          <li>
            <div class="user-view">
              <div class="background" />
              <a href="#user" />
              <a href="#name">
                <span class="white-text name">John Doe</span>
              </a>
              <a href="#email">
                <span class="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <li>
            <a href="#!">
              <i class="material-icons">cloud</i>First Link With Icon
            </a>
          </li>
          <li>
            <a href="#!">Second Link</a>
          </li>
          <li>
            <div class="divider" />
          </li>
          <li>
            <a class="subheader">Subheader</a>
          </li>
          <li>
            <a class="waves-effect" href="#!">
              Third Link With Waves
            </a>
          </li>
        </ul>
        {/* <a href="#" data-target="slide-out" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a> */}
      </div>
    );
  }
}
export default withRouter(Navbar);
