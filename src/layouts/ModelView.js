import React, { useState, useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { SideNavContext } from "../contexts/SideNavContext";
import M from "materialize-css/dist/js/materialize.min.js";
import { unaryExpression } from "@babel/types";
import ModelViewBreadcrumbs from "../components/ModelViewBreadcrumbs";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";
import ModelViewSlider from "../components/ModelViewSlider";
import useWindowSize from "../hooks/useWindowSize";

const ModelView = props => {
  const [width, height] = useWindowSize();
  useEffect(() => {
    console.log(`width: ${width}`);
    console.log(`height: ${height}`);
    // let slider = document.getElementById("slider");
    // noUiSlider.create(slider, {
    //   connect: true,
    //   // range: {
    //   //   min: 0,
    //   //   max: 78
    //   // },
    //   range: {
    //     min: 0,
    //     "13%": 6,
    //     "26%": 12,
    //     "39%": 18,
    //     max: 78
    //   },
    //   pips: {
    //     mode: "values",
    //     values: [0, 6, 12, 18, 78],
    //     density: 100
    //   },
    //   snap: true,
    //   start: 0,
    //   step: 6,
    //   tooltips: [
    //     {
    //       to: value => {
    //         let result = Math.round(parseInt(value)).toString();
    //         return result + " Hour";
    //       }
    //     }
    //   ]
    // });
    // var tabs = document.querySelectorAll(".tabs");
    // var instance = M.Tabs.init(tabs);
    var dropdowns = document.querySelectorAll(".dropdown-trigger");
    console.log(`width: ${width}`)
    console.log(`hover: ${width >= 1024}`)
    if (width !== 0) {
      var dropdownsInstances = M.Dropdown.init(dropdowns, {
        hover: width > 1080 ? true : false,
        inDuration: 500,
        constrainWidth: true
      });

      var tabs = document.querySelectorAll(".tabs");
      var instance = M.Tabs.init(tabs);
    }
  }, [width, height]);

  return (
    <div>
      <div className="mainLayout container" id="container">
        <div className="row">
          <ModelViewBreadcrumbs props />
        </div>
        <ModelViewSlider />
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
        <div class="row"
          style={{
            position: "fixed",
            bottom: "0",
            left: "0px", right: "0px",
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
          }}>
          <div className="bottomNav" style={{ height: "45px" }}>


            <a
              class="dropdown-trigger btn col s4"
              data-target="dropdown1"
              style={{ height: "45px", backgroundColor: "white", color: "#0ACAF5", borderRadius: "0px", border: "90px" }}
            >
              Drop Me!
          </a>
            <a
              class="dropdown-trigger btn col s4"
              data-target="dropdown2"
              style={{ height: "45px", backgroundColor: "white", color: "#0ACAF5", borderRadius: "0px", border: "0px" }}
            >
              Drop Me!
          </a>
            <a
              class="dropdown-trigger btn col s4"
              data-target="dropdown3"
              style={{ height: "45px", backgroundColor: "white", color: "#0ACAF5", borderRadius: "0px", border: "0px" }}
            >
              Drop Me!
          </a>
          </div>
        </div>
        <ul id="dropdown1" class="dropdown-content collection" style={{ zIndex: "990" }}>
          <li className="collection-item">
            <a >one</a>
          </li>
          <li className="collection-item">
            <a>two</a>
          </li>
          <li className="collection-item">
            <a>three</a>
          </li>
        </ul>
        <ul id="dropdown2" class="dropdown-content collection" style={{ zIndex: "990" }}>
          <li className="collection-item">
            <a >one</a>
          </li>
          <li className="collection-item">
            <a>two</a>
          </li>
          <li className="collection-item">
            <a>three</a>
          </li>
        </ul>
        <ul id="dropdown3" class="dropdown-content collection" style={{ zIndex: "990" }}>
          <li className="collection-item">
            <a >one</a>
          </li>
          <li className="collection-item">
            <a>two</a>
          </li>
          <li className="collection-item">
            <a>three</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(ModelView);
