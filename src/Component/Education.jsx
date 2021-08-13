import React, { Component, useState } from 'react';
import { TextField ,makeStyles} from '@material-ui/core';
import {Link} from "react-router-dom";
import Preview from './Preview';
import { connect } from 'react-redux';
import "../css/education.css";

const Education = (props) => {

    let useStyle = makeStyles({
        text : {
            marginTop:"30px",
            marginLeft:"40px",
            width:"250px"
        }
    })
    let classes = useStyle();

    let [education,setEducation] = useState(props.education);

    const helper = (e) => {
        let key = e.target.name;
        let val = e.target.value;

        setEducation({...education , [key] : val});
        // console.log(contact);
    }

    const getVal = (key) => {
        if(education && education[key]){
            return education[key];
        }
        return "";
    }

    const onToNext = () => {
        props.setEducation(education);
    }

    return ( <div className="education">
        <div className="form">
            
            <div className="left">
                <h1>Education Details</h1>
                <TextField className={classes.text} size="small" id="filled-basic" label="College Name" variant="filled" name="cllgName" onChange={ (e) => {helper(e)}} value={getVal("cllgName")}></TextField>
                <TextField className={classes.text} size="small" id="filled-basic" label="Degree" variant="filled" name="degree" onChange={ (e) => {helper(e)}} value={getVal("degree")}></TextField>
                <TextField className={classes.text} size="small"  id="filled-basic" label="CGPA" variant="filled" name="cgpa" onChange={ (e) => {helper(e)}} value={getVal("cgpa")}></TextField>
                <TextField className={classes.text} size="small" id="filled-basic" label="City/State" variant="filled" name="city" onChange={ (e) => {helper(e)}} value={getVal("city")}></TextField>
                <TextField className={classes.text} size="small" id="filled-basic" label="From" variant="filled" name="from" onChange={ (e) => {helper(e)}} value={getVal("from")}></TextField>
                <TextField className={classes.text} size="small" id="filled-basic" label="To" variant="filled" name="to" onChange={ (e) => {helper(e)}} value={getVal("to")}></TextField>
                <h3>School details</h3>
                <TextField className={classes.text} size="small" id="filled-basic" label="School Name" variant="filled" name="schoolName" onChange={ (e) => {helper(e)}} value={getVal("schoolName")}></TextField>
                <TextField className={classes.text} size="small" id="filled-basic" label="State" variant="filled" name="state" onChange={ (e) => {helper(e)}} value={getVal("state")}></TextField>
                <TextField className={classes.text} size="small" id="filled-basic" label="Perc" variant="filled" name="perc" onChange={ (e) => {helper(e)}} value={getVal("perc")}></TextField>
                <TextField className={classes.text} size="small" id="filled-basic" label="Year" variant="filled" name="year" onChange={ (e) => {helper(e)}} value={getVal("year")}></TextField>

                <div className="actions">
                    <Link className="btn" to="/experience" onClick={() =>{onToNext()}}>Next</Link>
                    <Link className="btn1" to="/contact" onClick={() => {onToNext()}}>Back</Link>
                </div>
            </div>

            <div className="right">
                <Preview education={education} experience={props.experience} contact={props.contact} skin={props.document.skinCode}></Preview>
            </div>
        </div>
    </div> );
}
 

function mapStateToProps(store){
    return store;
}

function mapDispatchToProps(dispatch){
    return {
        setEducation : (education) => dispatch({type:"SET_EDUCATION" , payload:education})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Education);