import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const ModelViewBreadcrumbs = (props) => {
    const [breadcrumbs, setBreadcrumbs] = useState();

    useEffect(() => {
        if (
            !props.match &&
            !props.match.params &&
            !props.match.params.area &&
            !props.match.params.type &&
            !props.match.params.model
        ) {
            props.history.push("/");
        } else {
            let newBreadcrumbs = [];

            if (props.match.params.area === "global") {
                newBreadcrumbs.push("Global Model");
            } else if (props.match.params.area === "regional") {
                newBreadcrumbs.push("Regional Model");
            }

            if (props.match.params.model === "GFS") {
                newBreadcrumbs.push("GFS");
            } else if (props.match.params.model === "ECMWF") {
                newBreadcrumbs.push("ECMWF");
            } else if (props.match.params.model === "CWBWRF") {
                newBreadcrumbs.push("CWB WRF");
            }

            if (newBreadcrumbs.length !== 2) {
                props.history.push("/");
            } else {
                setBreadcrumbs(newBreadcrumbs);
            }
        }
    }, [props]);


    return (
        <nav className="z-depth-0 col s12" style={{ height: "20px", lineHeight: "20px", marginBottom:"20px" }}>
            <div className="nav-wrapper" style={{ height: "20px", paddingTop: "10px" }}>
                <div style={{ height: "20px" }}>
                    <a className="breadcrumb pointer" onClick={() => props.history.push('/')}>
                        <i className="material-icons" style={{ color: "rgba(50,50,50,0.4)", lineHeight: "20px", fontSize: "21px" }}>home</i>
                    </a>
                    <a className="breadcrumb" style={{ fontSize: "18px" }}>
                        {breadcrumbs ? breadcrumbs[0] : ""}
                    </a>
                    <a className="breadcrumb active" style={{ fontSize: "18px" }}>
                        {breadcrumbs ? breadcrumbs[1] : ""}
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default withRouter(ModelViewBreadcrumbs)