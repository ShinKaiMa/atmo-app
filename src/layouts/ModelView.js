import React, { useState, useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { SideNavContext } from "../contexts/SideNavContext";
import M from "materialize-css/dist/js/materialize.min.js";
import { unaryExpression } from "@babel/types";
import ModelViewBreadcrumbs from "../components/ModelViewBreadcrumbs";

const ModelView = props => {
    return (
        <div >
            <div className="row mainLayout container" id="container">
                <ModelViewBreadcrumbs props/>
                <div>
                    <p className="col s12" style={{ overflow: "auto" }}>{JSON.stringify(props)}</p>
                </div>
            </div>
        </div>
    );
};

export default withRouter(ModelView);
