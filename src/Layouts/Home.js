import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="row mainLayout container" id="container">
        <div className="col s6" style={{color:'white'}}>Grid 1</div>
        <div className="col s6" style={{color:'white'}}>Grid 2</div>
      </div>
    );
  }
}

export default Home;
