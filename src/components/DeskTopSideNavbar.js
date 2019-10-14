import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const DeskTopSideNavbar = (props) => {
    // const [collapsibles, setCollapsibles] = useState();

    useEffect(() => {
        let elem = document.querySelectorAll(".sidenav");
        let sidenavs = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250,
            draggable: true
        });

        // setTimeout(()=>sidenavs[1].close(),2000)

        let collapsibleElem = document.querySelectorAll('.collapsible');
        let collapsibles = M.Collapsible.init(collapsibleElem, {
            accordion: false
        });
    }, []);

    return (
        <ul
            id="slide-out"
            className="sidenav sidenav-fixed hide-on-med-and-down"
            style={{ width: "200px" }}>
            <ul className="collapsible collapsible-accordion">
                <li className="active">
                    <div className="collapsible-header waves-effect waves-gray" style={{ fontSize: "12px", fontWeight: "bold" }}>
                        <i className="material-icons" style={{ fontSize: "16px" }}>language</i>
                        Global Model
            </div>
                    <div className="collapsible-body">
                        <li onClick={() => props.history.push('/model/global/forcast/GFS')}>
                            <a className="collection-item" style={{ fontSize: "12px" }}><span style={{ fontSize: "10px", backgroundColor: "#0ACAF5" }} data-badge-caption="-hourly" className="new badge">6</span>GFS</a>
                        </li>
                        <li onClick={() => props.history.push('/model/global/analysis/ECMWF')}>
                            <a className="collection-item" style={{ fontSize: "12px" }}><span style={{ fontSize: "10px", backgroundColor: "#0ACAF5" }} data-badge-caption="Analysis Only" className="new badge"></span>ECMWF</a>
                        </li>
                    </div>
                </li>
                <li className="active">
                    <div className="collapsible-header waves-effect waves-gray" style={{ fontSize: "12px", fontWeight: "bold" }}>
                        <i className="material-icons" style={{ fontSize: "16px" }}>gps_fixed</i>
                        Regional Model
                    </div>
                    <div className="collapsible-body">
                        <li onClick={() => props.history.push('/model/global/forcast/CWBWRF')}>
                            <a className="collection-item" style={{ fontSize: "12px" }}><span style={{ fontSize: "10px", backgroundColor: "#0ACAF5" }} data-badge-caption="-hourly" className="new badge">6</span>CWB WRF</a>
                        </li>
                    </div>
                </li>
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
    )
}

export default withRouter(DeskTopSideNavbar);