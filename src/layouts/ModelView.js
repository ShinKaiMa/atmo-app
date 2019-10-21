import React, { useState, useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { SideNavContext } from "../contexts/SideNavContext";
import M from "materialize-css/dist/js/materialize.min.js";
import { unaryExpression } from "@babel/types";
import ModelViewBreadcrumbs from "../components/ModelViewBreadcrumbs";
import ModelViewAreaSelector from "../components/ModelViewAreaSelector";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";
import ModelViewSlider from "../components/ModelViewSlider";
import ModelViewBottomNavbar from '../components/ModelViewBottomNavbar'
import useWindowSize from "../hooks/useWindowSize";

const ModelView = props => {


  return (
    <div>
      <div className="mainLayout container" id="container" style={{ marginBottom: "46px" }}>
        <div className="row">
          <ModelViewBreadcrumbs props />
        </div>
        <div className="row">
          <ModelViewSlider />
          {/* <ModelViewAreaSelector/> */}
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          praesentium illo ut, esse exercitationem nulla sunt natus dignissimos
          tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis
          impedit iusto consectetur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          praesentium illo ut, esse exercitationem nulla sunt natus dignissimos
          tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis
          impedit iusto consectetur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          praesentium illo ut, esse exercitationem nulla sunt natus dignissimos
          tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis
          impedit iusto consectetur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          praesentium illo ut, esse exercitationem nulla sunt natus dignissimos
          tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis
          impedit iusto consectetur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          praesentium illo ut, esse exercitationem nulla sunt natus dignissimos
          tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis
          impedit iusto consectetur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          praesentium illo ut, esse exercitationem nulla sunt natus dignissimos
          tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis
          impedit iusto consectetur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          praesentium illo ut, esse exercitationem nulla sunt natus dignissimos
          tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis
          impedit iusto consectetur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          praesentium illo ut, esse exercitationem nulla sunt natus dignissimos
          tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis
          impedit iusto consectetur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          praesentium illo ut, esse exercitationem nulla sunt natus dignissimos
          tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis
          impedit iusto consectetur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          praesentium illo ut, esse exercitationem nulla sunt natus dignissimos
          tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis
          impedit iusto consectetur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          praesentium illo ut, esse exercitationem nulla sunt natus dignissimos
          tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis
          impedit iusto consectetur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          praesentium illo ut, esse exercitationem nulla sunt natus dignissimos
          tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis
          impedit iusto consectetur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          praesentium illo ut, esse exercitationem nulla sunt natus dignissimos
          tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis
          impedit iusto consectetur?
        </p>

      </div>

      <ModelViewBottomNavbar props />
      {/* <div
          class="row"
          style={{
            position: "fixed",
            bottom: "0",
            left: "0px",
            right: "0px",
            // left:width,
            // marginLeft: "20px",
            // marginBottom:"0px",
            marginTop: "0",
            marginBottom: "0",
            marginLeft: "0",
            marginRight: "0",
            // padding:"0px",
            paddingLeft: width > 993 ? "200px" : "0px",
            width: width > 993 ? width : "100%",
            height: "45px",
            zIndex: "998"
          }}
        >
          <div className="bottomNav" style={{ height: "45px" }}>
            <a
              class="dropdown-trigger btn active col s4"
              data-target="dropdown1"
              style={{
                height: "45px",
                backgroundColor: "white",
                color: "#0ACAF5",
                borderRadius: "0px",
                border: "90px"
              }}
            >
              Drop Me!
            </a>
            <a
              class="dropdown-trigger btn col s4"
              data-target="dropdown2"
              style={{
                height: "45px",
                backgroundColor: "white",
                color: "#0ACAF5",
                borderRadius: "0px",
                border: "0px"
              }}
            >
              Drop Me!
            </a>
            <a
              class="dropdown-trigger btn col s4"
              data-target="dropdown3"
              style={{
                height: "45px",
                backgroundColor: "white",
                color: "#0ACAF5",
                borderRadius: "0px",
                border: "0px"
              }}
            >
              Drop Me!
            </a>
          </div>
        </div>
        <ul
          id="dropdown1"
          class="dropdown-content collection"
        >
          <li className="collection-item">
            <a>one</a>
          </li>
          <li className="collection-item">
            <a>two</a>
          </li>
          <li className="collection-item">
            <a>three</a>
          </li>
        </ul>
        <ul
          id="dropdown2"
          class="dropdown-content collection"
        >
          <li className="collection-item">
            <a>one</a>
          </li>
          <li className="collection-item">
            <a>two</a>
          </li>
          <li className="collection-item">
            <a>three</a>
          </li>
        </ul>
        <ul
          id="dropdown3"
          class="dropdown-content collection"
        >
          <li className="collection-item">
            <a>one</a>
          </li>
          <li className="collection-item">
            <a>two</a>
          </li>
          <li className="collection-item">
            <a>three</a>
          </li>
        </ul> */}

    </div>
  );
};

export default withRouter(ModelView);
