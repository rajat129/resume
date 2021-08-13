import React, { Component } from 'react';
import "../css/preview.css";

const Preview = (props) => {

    const getContact = (key) => {
        if(props.contact){
            return props.contact[key] ? props.contact[key] : "";
        }
        return "";
    }

    const getEducation = (key) => {
        if(props.education){
            return props.education[key] ? props.education[key] : "";
        }
        return "";
    }

    const getExp = (key) => {
        if(props.experience){
            return props.experience[key] ? props.experience[key] : "";
        }
        return "";
    }

    return ( <div className={props.skin +" preview"}>
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
                <div className="phone">{getContact('number')}</div>
                <div className="email">{getContact('email')}</div>
            </div>
            <div className="p-div2">
                <div className="address">{getContact('address')}</div>
                <div className="city">{getContact('city')}</div>
                <div className="state">{getContact('state')}</div>
                <div className="country">{getContact('country')}</div>
                <div className="pincode">{getContact('pinCode')}</div>
            </div>

            <div className="summary">
                <div className="head1">
                    <h4>Professional Summary</h4>
                </div>
                <hr style={{width: " 90% " , textAlign: " left ", marginLeft:"0"}}></hr>
                <div className="profession">{getContact('profession')}</div>

            </div>

        </div>  
        
        <div className="education">
            <div className="head2">
                <h4>Education</h4>
            </div>
            <hr style={{width: " 90% " , textAlign: " left ", marginLeft:"0"}}></hr>
            <div className="div">
                <div className="cllg">
                    <div className="cllgName">{getEducation("cllgName")}</div>
                    <div className="div1">
                        <div className="degree">{getEducation("degree")} | </div>
                        <div className="city">{getEducation("city")}</div>
                    </div>
                    <div className="duration">
                        <div className="from">{getEducation("from")} - </div>
                        <div className="to">{getEducation("to")}</div>
                    </div>
                    <div className="cgpa">{getEducation("cgpa")}</div>
                </div>
                <div className="school">
                    <div className="schoolName">{getEducation("schoolName")}</div>
                    <div className="div2">
                        <div className="state">{getEducation("state")} | </div>
                        <div className="perc">{getEducation("perc")}</div>
                    </div>
                    <div className="year">{getEducation("year")}</div>
                </div>
            </div>
        
        </div>
        <div className="experience">
            <div className="head3">
                <h4>Experience</h4>
            </div>
            <hr style={{width: " 90% " , textAlign: " left ", marginLeft:"0"}}></hr>
            <div className="div3">
                <div className="one">
                    <div className="div1">
                        <div className="exp1">{getExp("exp1")} - </div>
                        <div className="duration1">{getExp("duration1")}</div>
                    </div>
                    <div className="discription1">{getExp("discription1")}</div>
                </div>
                <div className="two">
                    <div className="div1">
                        <div className="exp2">{getExp("exp2")} - </div>
                        <div className="duration2"> {getExp("duration2")}</div>
                    </div>
                    <div className="discription2">{getExp("discription2")}</div>
                </div>
            </div>
        </div>
    </div> );
}
 
export default Preview;