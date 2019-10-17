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
  console.log(`width: ${width}`);
  useEffect(() => {
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
    var dropdownsInstances = M.Dropdown.init(dropdowns,{
      alignment:'center',
      inDuration: 500,
    });
  }, []);

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
        {/* <div
        className="mainLayout container"
        id="container"
        style={{
          position: "fixed",
          bottom: "0",
          left:"0px",right:"0px",
          // left:width,
          // marginLeft: "20px",
          // marginBottom:"0px",
          marginTop:"0",
          marginBottom:"0",
          marginLeft:"0",
          marginRight:"0",
          padding:"0px",
          paddingLeft:"180px",
          width: width-180,
          height: "45px",
          zIndex: "999"
        }} */}
      >
        <div class="row"
        style={{
          position: "fixed",
          bottom: "0",
          left:"0px",right:"0px",
          // left:width,
          // marginLeft: "20px",
          // marginBottom:"0px",
          marginTop:"0",
          marginBottom:"0",
          marginLeft:"0",
          marginRight:"0",
          // padding:"0px",
          paddingLeft:"200px",
          width: width,
          height: "45px",
          zIndex: "995"
        }}>
          <a
            class="dropdown-trigger btn col s4"
            data-target="dropdown"
            style={{ height: "45px", backgroundColor:"white", color:"#0ACAF5", borderRadius:"0px", border:"0px" }}
          >
            Drop Me!
          </a>
          <a
            class="dropdown-trigger btn col s4"
            data-target="dropdown"
            style={{ height: "45px", backgroundColor:"white", color:"#0ACAF5", borderRadius:"0px", border:"0px"}}
          >
            Drop Me!
          </a>
          <a
            class="dropdown-trigger btn col s4"
            data-target="dropdown"
            style={{ height: "45px", backgroundColor:"white", color:"#0ACAF5", borderRadius:"0px", border:"0px"}}
          >
            Drop Me!
          </a>
          <ul id="dropdown" class="dropdown-content collection" style={{ zIndex: "999" }}>
            <li className="collection-item">
              <a >one</a>
            </li>
            <li  className="collection-item">
              <a>two</a>
            </li>
            <li  className="collection-item">
              <a>three</a>
            </li>
          </ul>
        </div>
      {/* </div> */}
      </div>
      
      {/* <div
        class="mainLayout container"
        id="container"
        style={{
          position: "fixed",
          bottom: "0",
          margin: "0px",
          width: "100%",
          zIndex:"500"
        }}
      >
          <nav class="nav-extended">
            <div class="nav-content">
              <ul class="tabs tabs-transparent row">
                <li class="tab col s4">
                  <a style={{textTransform:"none"}}>Precipitation</a>
                </li>
                <li class="tab col s4">
                  <a style={{textTransform:"none"}}>
                    Wind
                  </a>
                </li>
                <li class="tab col s4">
                  <a  style={{textTransform:"none"}}>Temperature</a>
                </li>
              </ul>
            </div>
          </nav>
      </div> */}

      {/* <div
        class="mainLayout container"
        id="container"
        style={{
          position: "fixed",
          bottom: "0",
          margin: "0px",
          width: "100%",
          height: "45px",
          zIndex:"999"
        }}
      >
        <div class="row">
          <a
            class="dropdown-trigger btn col s4"
            data-target="dropdown1"
            style={{ height: "45px", padding:"0px" }}
          >
            Drop Me!
          </a>
          <a
            class="dropdown-trigger btn col s4"
            data-target="dropdown1"
            style={{ height: "45px", padding:"0px" }}
          >
            Drop Me!
          </a>
          <a
            class="dropdown-trigger btn col s4"
            data-target="dropdown1"
            style={{ height: "45px", padding:"0px" }}
          >
            Drop Me!
          </a>
        </div>
      </div>

      <div className="mainLayout container" id="container">
      <ul id="dropdown1" class="dropdown-content" style={{zIndex:"999"}}>
        <li>
          <a href="#!">one</a>
        </li>
        <li>
          <a href="#!">two</a>
        </li>
        <li>
          <a href="#!">three</a>
        </li>
      </ul>
      </div> */}
    </div>
  );
};

export default withRouter(ModelView);
