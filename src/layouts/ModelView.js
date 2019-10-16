import React, { useState, useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { SideNavContext } from "../contexts/SideNavContext";
import M from "materialize-css/dist/js/materialize.min.js";
import { unaryExpression } from "@babel/types";
import ModelViewBreadcrumbs from "../components/ModelViewBreadcrumbs";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";
import ModelViewSlider from "../components/ModelViewSlider";

const ModelView = props => {
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
    var tabs = document.querySelectorAll(".tabs");
    var instance = M.Tabs.init(tabs);
  }, []);

  return (
    <div>
      <div className="mainLayout container" id="container">
        <div className="row">
          <ModelViewBreadcrumbs props />
        </div>
        {/* <div>
        <div
          id="slider"
          // style={{ height: "6px", marginTop: "10px", marginLeft: "32px", width:"300px" }}
          style={{
            height: "6px",
            marginTop: "10px",
            marginLeft: "16px",
            marginBottom: "50px",
            width: "270px"
          }}
        ></div>
      </div> */}
        <ModelViewSlider />
        {/* <div class="row" style={{margin:"0px", padding:"0px"}}>
        <nav class="nav-extended col s12">
          <div class="nav-content">
            <ul class="tabs tabs-transparent">
              <li class="tab">
                <a href="#test1">Test 1</a>
              </li>
              <li class="tab">
                <a class="active" href="#test2">
                  Test 2
                </a>
              </li>
              <li class="tab">
                <a href="#test4">Test 4</a>
              </li>
            </ul>
          </div>
        </nav>
      </div> */}
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti praesentium illo ut, esse exercitationem nulla sunt natus dignissimos tenetur? Fuga ipsum repudiandae neque dicta temporibus harum. Facilis impedit iusto consectetur?</p>
      </div>
      <div
        class="mainLayout container"
        id="container"
        style={{
          position: "fixed",
          bottom: "0",
          margin: "0px",
          width: "100%"
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
      </div>
    </div>
  );
};

export default withRouter(ModelView);
