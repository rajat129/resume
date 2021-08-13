import React, { Component, useEffect } from 'react';
import logo1 from "../images/download.png";
import {Link} from "react-router-dom";
import "../css/header.css";
import { connect } from 'react-redux';
import {signOut} from "../authActions";

const Header = (props) => {

    useEffect(() => {
        console.log("here");
    } , [props]);

    const handleSignOut = () => {
        props.signOut();
    }

    return ( <div className="header">
        <Link to="/">
            <img src={logo1} alt="" />
        </Link>

        <div className="nav-items">
            <Link to="/template">templates</Link>
            {props.email == null ? <>
                <Link to="login">Log in</Link>
                <Link to="/signin"> signin</Link>
            </> : <>
                Logged in as {props.email}
                <button className="logout" onClick={handleSignOut}>Log out</button>
            </>}
        </div>
    </div> );
}
 
function mapStateToProps(store){
    return store.firebase.auth;
}

function mapDispatchToProps(dispatch){
    return {
        signOut : () => {dispatch(signOut())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);