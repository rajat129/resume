import React, { Component } from 'react';
import img1 from '../images/skin1.svg';
import img2 from '../images/skin2.svg';
import img3 from '../images/skin3.svg';
import img4 from '../images/skin4.svg';
import '../css/template.css';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import uuid from "react-uuid";

const Templates = (props) => {

    const onSelect = (skin) => {
        if(props.id==null){
            let doc = {
                id : uuid(),
                skinCode : skin
            }
            props.setSkin(doc);
        }else{
            props.updateSkin(skin);
        }
        props.history.push("/contact");
    }

    return ( <div className="templates">
        <h1>Chose a template!!!</h1>
        <div className="options">
            <div className="a1">
                <img src={img1} alt="" />
                <Button color="primary" variant="contained" onClick={() =>{onSelect("skin1")}}>Select</Button>
            </div>
            <div className="a1">
                <img src={img3} alt="" />
                <Button color="primary" variant="contained" onClick={() =>{onSelect("skin2")}}>Select</Button>
            </div>
            <div className="a1">
                <img src={img2} alt="" />
                <Button color="primary" variant="contained" >Buy Premium</Button>
            </div>
            <div className="a1">
                <img src={img4} alt="" />
                <Button color="primary" variant="contained" >Buy Premium</Button>
            </div>
        </div>
    </div> );
}
 
function mapStateToProps(store){
    console.log(store);
    return store.document;
}

function mapDispatchToProps(dispatch){
    // console.log(dispatch);
    return {
        setSkin : (document) => {dispatch({type : "SET_SKIN" , payload : document})},
        updateSkin: (skin) => {dispatch({type : "UPDATE_SKIN" , payload : skin})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Templates);