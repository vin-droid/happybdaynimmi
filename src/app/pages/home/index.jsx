import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
        };
    }
    render() {
        return (
           <div>
               Hello react with node js
           </div>
        );
    }
}