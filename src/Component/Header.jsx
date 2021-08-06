import React, { Component } from 'react';
import logo1 from "../images/download.png";
import {Link} from "react-router-dom";
import "../css/header.css";

const Header = () => {
    return ( <div className="header">
        <Link to="/">
            <img src={logo1} alt="" />
        </Link>

        <div className="nav-items">
            <Link to="/template">templates</Link>
            <Link to="/signin"> signin</Link>
        </div>
    </div> );
}
 
export default Header;