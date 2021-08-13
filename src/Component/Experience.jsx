import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextField ,makeStyles} from '@material-ui/core';
import Preview from './Preview';
import "../css/exp.css";

const Experience = (props) => {

    let [exp,setExp] = useState(props.experience);

    let useStyle = makeStyles({
        text : {
            marginTop:"30px",
            marginLeft:"40px",
            width:"250px"
        }
    })
    let classes = useStyle();

    const helper = (e) => {
        let key = e.target.name;
        let val = e.target.value;

        setExp({...exp , [key] : val});
        // console.log(contact);
    }

    const getVal = (key) => {
        if(exp && exp[key]){
            return exp[key];
        }
        return "";
    }

    const onToNext = () => {
        // console.log(exp);
        props.setExp(exp);
    }

    return ( <div className="exp">
        <div className="form">
            
            <div className="left">
                <h1>Experience</h1>
                <div className="exp1">
                <TextField className={classes.text} size="small" id="filled-basic" label="Experience 1" variant="filled" name="exp1" onChange={ (e) => {helper(e)}} value={getVal("exp1")}></TextField>
                <TextField className={classes.text} size="small" id="filled-basic" label="Duration" variant="filled" name="duration1" onChange={ (e) => {helper(e)}} value={getVal("duration1")}></TextField>
                <TextField className={classes.text} size="small"  id="filled-multiline-static" multiline rows={4} label="Discription" variant="filled" name="discription1" onChange={ (e) => {helper(e)}} value={getVal("discription1")}></TextField>
                </div>
                <div className="exp2">
                <TextField className={classes.text} size="small" id="filled-basic" label="Experience 1" variant="filled" name="exp2" onChange={ (e) => {helper(e)}} value={getVal("exp2")}></TextField>
                <TextField className={classes.text} size="small" id="filled-basic" label="Duration" variant="filled" name="duration2" onChange={ (e) => {helper(e)}} value={getVal("duration2")}></TextField>
                <TextField className={classes.text} size="small"  id="filled-multiline-static" multiline rows={4} label="Discription" variant="filled" name="discription2" onChange={ (e) => {helper(e)}} value={getVal("discription2")}></TextField>
                </div>
                <div className="actions">
                    <Link className="btn" to="/final" onClick={() => {onToNext()}}>Next</Link>
                    <Link className="btn1" to="/education" onClick={() => {onToNext()}}>Back</Link>
                </div>
            </div>
            <div className="right">
                <Preview contact={props.contact} education={props.education} experience={exp} skin={props.document.skinCode}></Preview>
            </div>
        </div>
    </div> );
}
 
function mapStateToProps(store){
    return store;
}

function mapDispatchToProps(dispatch){
    return {
        setExp : (exp) => dispatch({type : "SET_EXP" , payload : exp})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Experience);