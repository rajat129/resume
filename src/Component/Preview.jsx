import React, { Component } from 'react';
import "../css/preview.css";

const Preview = (props) => {

    const getContact = (key) => {
        if(props.contact){
            return props.contact[key] ? props.contact[key] : "";
        }
        return "";
    }

    return ( <div className="preview">
        <div className="personal-info">
            <div className="name">
                <div className="f-name">
                    {getContact('firstName')}
                </div>
                <div className="l-name">
                    {getContact('lastName')}
                </div>
            </div>
            <div className="p-div1">
                <div className="phone">{getContact('phone')}</div>
                <div className="email">{getContact('email')}</div>
                <div className="profession">{getContact('profession')}</div>
            </div>
            <div className="p-div2">
                <div className="address">{getContact('address')}</div>
                <div className="city">{getContact('city')}</div>
                <div className="state">{getContact('state')}</div>
                <div className="country">{getContact('country')}</div>
                <div className="pincode">{getContact('pinCode')}</div>
            </div>

        </div>  
        <h1>Education</h1>
        <h1>Projects</h1>
        <h1>Experience</h1>
        <h2>Achievements</h2>
    </div> );
}
 
export default Preview;