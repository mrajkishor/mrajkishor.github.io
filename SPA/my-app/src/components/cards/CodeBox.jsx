
import React from 'react';
import PropTypes from 'prop-types';
import "./CodeBox.css";

CodeBox.propTypes = {

};

function CodeBox(props) {
    return (
        <div class="code-card">
            <div class="tools">
                <div class="circle">
                    <span class="red box"></span>
                </div>
                <div class="circle">
                    <span class="yellow box"></span>
                </div>
                <div class="circle">
                    <span class="green box"></span>
                </div>
            </div>
            <div class="card__content">
                {props}
            </div>
        </div>
    );
}

export default CodeBox;