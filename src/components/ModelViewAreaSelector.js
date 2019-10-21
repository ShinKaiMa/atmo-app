import React, { useState, useContext, useEffect } from "react";
import { className } from "postcss-selector-parser"
import M from "materialize-css/dist/js/materialize.min.js";

const ModelViewAreaSelector = () => {

    useEffect(() => {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {
            hover: false,
            dropdownOptions:{
                alignment: 'right',
                constrainWidth: true,
                coverTrigger: false,
            }

        });
    }, [])


    return (
        <div class="input-field col s3 l1" style={{ position:"absolute", top:"60px", right:"0"}}>
            <select style={{fontSize:"5px"}}>
                <option value="" disabled selected  style={{fontSize:"2px"}}>Area</option>
                <option value="1"  style={{fontSize:"2px"}}>Near TW</option>
                <option value="2"  style={{fontSize:"2px"}}>TW</option>
            </select>
            <label style={{fontSize:"15px"}}>Area</label>
        </div>
    )
}

export default ModelViewAreaSelector;