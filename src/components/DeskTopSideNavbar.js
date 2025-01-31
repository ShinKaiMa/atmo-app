import React, { useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const DeskTopSideNavbar = (props) => {
    const deskSideNav = useRef(null);

    useEffect(() => {
        let elem = document.querySelectorAll(".sidenav");
        M.Sidenav.init(deskSideNav, {
            edge: "left",
            draggable: true
        });

        let collapsibleElem = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapsibleElem, {
            accordion: false
        });
    }, []);

    return (
        <ul
            ref={deskSideNav}
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
                        <ul>
                            {/* <li  onClick={() => props.history.push('/model/global/forcast/GFS')}> */}
                            <li className="forbidden">
                                {/* <a href={null} className="collection-item" style={{ fontSize: "12px" }}><span style={{ fontSize: "10px", backgroundColor: "#0ACAF5", fontWeight:"500" }} data-badge-caption="-hourly" className="new badge">6</span>GFS</a> */}
                                <a href={null} className="collection-item" style={{ fontSize: "12px" }}><span style={{ fontSize: "10px", backgroundColor: "rgba(190,190,190,1)", fontWeight:"500" }} data-badge-caption="Coming soon" className="new badge"></span>GFS</a>
                            </li>
                            {/* <li onClick={() => props.history.push('/model/global/analysis/ECMWF')}> */}
                            <li className="forbidden">
                                {/* <a href={null} className="collection-item" style={{ fontSize: "12px" }}><span style={{ fontSize: "10px", backgroundColor: "#0ACAF5", fontWeight:"500" }} data-badge-caption="Analysis Only" className="new badge"></span>ECMWF</a> */}
                                <a href={null} className="collection-item" style={{ fontSize: "12px" }}><span style={{ fontSize: "10px", backgroundColor: "rgba(190,190,190,1)", fontWeight:"500" }} data-badge-caption="Coming soon" className="new badge"></span>ECMWF</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="active">
                    <div className="collapsible-header waves-effect waves-gray" style={{ fontSize: "12px", fontWeight: "bold" }}>
                        <i className="material-icons" style={{ fontSize: "16px" }}>gps_fixed</i>
                        Regional Model
                    </div>
                    <div className="collapsible-body">
                        <ul>
                            <li onClick={() => props.history.push('/model/regional/forcast/CWBWRF')}>
                                <a href={null} className="collection-item" style={{ fontSize: "12px" }}><span style={{ fontSize: "10px", backgroundColor: "#0ACAF5", fontWeight:"500"  }} data-badge-caption="-hourly" className="new badge">6</span>CWB WRF</a>
                            </li>
                        </ul>
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