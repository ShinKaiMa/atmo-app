import React, { useEffect, useRef, useContext } from "react";
import { withRouter } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import { AppStatusContext } from '../contexts/AppStatusContext'

const MobileSideNavbar = (props) => {
    const mobileSideNav = useRef(null);
    const { appStatus } = useContext(AppStatusContext);
    const [width, height] = appStatus.windowSize

    useEffect(() => {
        let elem = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 450,
            draggable: true
        });

        let collapsibleElem = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapsibleElem, {
            accordion: false
        });
    },[]);

    return (
        <ul
            id="slide-out"
            className="sidenav hide-on-large-only"
            style={{ width: width }}
            ref={mobileSideNav}
        >
            <ul className="collapsible collapsible-accordion">
                <li className="sidenav-close" style={{
                    paddingTop: "13px",
                    paddingLeft:"16px",
                    height: "48px",
                }}>
                    <i className="material-icons" style={{ fontSize: "30px" }}>keyboard_arrow_left</i>
                </li>
                <li><div class="divider"></div></li>
                <li className="active">
                    <div className="collapsible-header waves-effect waves-gray" style={{ fontSize: "12px", fontWeight: "bold" }}>
                        <i className="material-icons" style={{ fontSize: "16px" }}>language</i>
                        Global Model
                    </div>
                    <div className="collapsible-body">
                        <ul>
                            {/* <li onClick={() => {
                                props.history.push('/model/global/forcast/GFS');
                            }}> */}
                            <li className="forbidden">
                                {/* <a className="collection-item" style={{ fontSize: "12px", color: "black", lineHeight: "45px" }}><span style={{ fontSize: "10px", backgroundColor: "#0ACAF5" }} data-badge-caption="-hourly" className="new badge">6</span>GFS</a> */}
                                <a className="collection-item" style={{ fontSize: "12px", color: "black", lineHeight: "45px" }}><span style={{ fontSize: "10px", backgroundColor: "rgba(190,190,190,1)" }} data-badge-caption="Coming soon" className="new badge"></span>GFS</a>
                            </li>
                            {/* <li onClick={() => props.history.push('/model/global/analysis/ECMWF')}> */}
                            <li className="forbidden">
                                {/* <a className="collection-item" style={{ fontSize: "12px", color: "black", lineHeight: "45px" }}><span style={{ fontSize: "10px", backgroundColor: "#0ACAF5" }} data-badge-caption="Analysis Only" className="new badge"></span>ECMWF</a> */}
                                <a className="collection-item" style={{ fontSize: "12px", color: "black", lineHeight: "45px" }}><span style={{ fontSize: "10px", backgroundColor: "rgba(190,190,190,1)" }} data-badge-caption="Coming soon" className="new badge"></span>ECMWF</a>
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
                            <li className="sidenav-close" onClick={() => props.history.push('/model/regional/forcast/CWBWRF')}>
                                <a className="collection-item" style={{ fontSize: "12px", color: "black", lineHeight: "45px" }}><span style={{ fontSize: "10px", backgroundColor: "#0ACAF5" }} data-badge-caption="-hourly" className="new badge">6</span>CWB WRF</a>
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

export default withRouter(MobileSideNavbar);