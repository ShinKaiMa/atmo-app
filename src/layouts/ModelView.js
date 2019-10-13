import React, { useState, useContext, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom'
import { SideNavContext } from '../contexts/SideNavContext';
import M from "materialize-css/dist/js/materialize.min.js";
import { unaryExpression } from "@babel/types";

const ModelView = (props) => {
    const [breadcrumbs, setBreadcrumbs] = useState();

    useEffect(() => {
        if (!props.match && !props.match.params && !props.match.params.area && !props.match.params.type && !props.match.params.model) {
            props.history.push('/');
        } else {
            let newBreadcrumbs = [];

            if (props.match.params.area === 'global') {
                newBreadcrumbs.push('Global Model');
            } else if (props.match.params.area === 'regional') {
                newBreadcrumbs.push('Regional Model');
            }

            if (props.match.params.model === 'GFS') {
                newBreadcrumbs.push('GFS');
            } else if (props.match.params.model === 'ECMWF') {
                newBreadcrumbs.push('ECMWF');
            } else if (props.match.params.model === 'CWBWRF') {
                newBreadcrumbs.push('CWB WRF');
            }

            if(newBreadcrumbs.length !== 2){
                props.history.push('/');
            } else {
                setBreadcrumbs(newBreadcrumbs);
            }
        }
    }, [])

    return (
        <div className="nav-wrapper row mainLayout container" id="container">
            <nav className="z-depth-0">
                <div class="nav-wrapper">
                    <div class="col s12">
                        <a class="breadcrumb">{breadcrumbs? breadcrumbs[0] : ""}</a>
                        <a class="breadcrumb">{breadcrumbs? breadcrumbs[1] : ""}</a>
                    </div>
                </div>
            </nav>
            <code>{JSON.stringify(props)}</code>
        </div>
    )
};

export default withRouter(ModelView);