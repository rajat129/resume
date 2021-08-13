import React, { Component, useState } from 'react';
import Preview from './Preview';
import "../css/contact.css";
import { TextField ,makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const Contact = (props) => {

    let useStyle = makeStyles({
        text : {
            marginTop:"30px",
            marginLeft:"40px",
            width:"250px"
        }
    })
    let classes = useStyle();


    let [contact,setContact] = useState(props.contact); 

    const helper = (e) => {
        let key = e.target.name;
        let val = e.target.value;

        setContact({...contact , [key] : val});
        // console.log(contact);
    }

    const getVal = (key) => {
        if(contact && contact[key]){
            return contact[key];
        }
        return "";
    }

    const onToNext = () => {
        props.setContact(contact);
        // console.log("here");
    }

    return (<div className="contact">
        
        <div className="form">
            
            <div className="left">
                <h1>Personal Details</h1>
                <TextField className={classes.text} size="small" id="filled-basic" label="First Name" variant="filled" type="text" name="firstName" onChange={ (e) => {helper(e)}} value={getVal("firstName")}></TextField>
                <TextField className={classes.text} size="small" id="filled-basic" label="Last Name" variant="filled" type="text" name="lastName" onChange={ (e) => {helper(e)}} value={getVal("lastName")}></TextField>
                <TextField className={classes.text} size="small"  id="filled-basic" label="Phone No" variant="filled" type="number" name="number" onChange={ (e) => {helper(e)}} value={getVal("number")}></TextField>
                <TextField className={classes.text} size="small" id="filled-basic" label="email" variant="filled" type="email" name="email" onChange={ (e) => {helper(e)}} value={getVal("email")}></TextField>
                <TextField className={classes.text} size="small" id="filled-basic" label="professional summary" variant="filled" type="text" name="profession" onChange={ (e) => {helper(e)}} value={getVal("profession")}></TextField>
                <TextField className={classes.text} size="small" id="filled-basic" label="City" variant="filled" type="text" name="city" onChange={ (e) => {helper(e)}} value={getVal("city")}></TextField>
                <TextField className={classes.text} size="small" id="filled-basic" label="State" variant="filled" type="text" name="state" onChange={ (e) => {helper(e)}} value={getVal("state")}></TextField>
                <TextField className={classes.text} size="small" id="filled-basic" label="Country" variant="filled" type="text" name="country" onChange={ (e) => {helper(e)}} value={getVal("country")}></TextField>
                <TextField className={classes.text} size="small" id="filled-basic" label="pin Code" variant="filled" type="text" name="pinCode" onChange={ (e) => {helper(e)}} value={getVal("pinCode")}></TextField>
                <TextField className={classes.text} margin="normal" size="small" id="filled-basic" label="address" variant="filled" type="text" name="address" onChange={ (e) => {helper(e)}} value={getVal("address")}></TextField>

                <div className="actions">
                    <Link className="btn" to="/education" onClick={() => {onToNext()}}>Next</Link>
                    <Link className="btn1" to="/template" onClick={() => {onToNext()}}>Back</Link>
                </div>
            </div>

            <div className="right">
                <Preview contact={contact} education={props.education} experience={props.experience} skin={props.document.skinCode}></Preview>
            </div>
        </div>
       
    </div>  );
}
 
function mapStateToProps(store){
    return store;
}

function mapDispatchToProps(dispatch){
    return {
        setContact: (contact) => {dispatch({type:"SET_CONTACT" , payload :contact})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);