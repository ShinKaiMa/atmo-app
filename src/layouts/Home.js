import React, { useState, useContext, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const Home = () => {
  useEffect(() => {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems);
    // instances[0].open();
  }, [])
  return (
    <div >
      <div className="row mainLayout container" id="container">
        <div className="col s6" style={{ color: 'white', backgroundColor:"#0ACAF5", border:"1px white solid" }}>Grid 1</div>
        <div className="col s6" style={{ color: 'white', backgroundColor:"#0ACAF5", border:"1px white solid"  }}>Grid 2</div>
      </div>
    </div>
  );
}

export default Home;
