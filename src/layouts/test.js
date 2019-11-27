import React, { useState, useContext, useEffect } from "react";
import { className } from "postcss-selector-parser"
import M from "materialize-css/dist/js/materialize.min.js";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Test = () => {

    useEffect(() => {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    }, [])


    return (
        <div className="mainLayout container" id="container">
            <div className="row">

                <div class="input-field col s1">
                    <select>
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                    <label>Materialize Select</label>
                </div>
            </div>
            <Skeleton width={100}/>
        </div>
    )
}

export default Test;