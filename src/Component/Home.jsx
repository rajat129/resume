import React, { Component } from 'react';
import img from "../images/resume.png";
import '../css/home.css';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

const Home = () => {
    return ( <div className="home">
        <div className="d1">
            <h1>Build Your Resume</h1>
            <h3>we help you stand out from others and get your dream job</h3>
            <img src={img} alt="" />
            <Link to="/template" className="btn">Lets get Started</Link>
        </div>
        <div className="d2"></div>
    </div> );
}
 
export default Home;