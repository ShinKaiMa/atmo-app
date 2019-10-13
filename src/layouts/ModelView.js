import React, { useState, useContext, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom'
import { SideNavContext } from '../contexts/SideNavContext';
import M from "materialize-css/dist/js/materialize.min.js";

const ModelView = (props) => {

    return (
        <div className="nav-wrapper row mainLayout container" id="container">
            <nav className="z-depth-0">
                <div class="nav-wrapper ">
                    <div class="col s12">
                        <a href="#!" class="breadcrumb">First</a>
                        <a href="#!" class="breadcrumb">Second</a>
                        <a href="#!" class="breadcrumb">Third</a>
                    </div>
                </div>
            </nav>
            <code>{JSON.stringify(props)}</code>
        </div>
    )
};

export default withRouter(ModelView);