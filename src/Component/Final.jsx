import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import Preview from './Preview';
import  jsPDF  from "jspdf";
import html2canvas from 'html2canvas';
import { connect } from 'react-redux';
import "../css/final.css";
import {Link} from "react-router-dom";

const Final = (props) => {

    const downloadResume=()=> {
        const input = document.getElementById('resumePreview');
       console.log(document)
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF("p", "mm", "a4");
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'JPEG', 0, 0,width,height);
            
            pdf.save("resume.pdf");
          }).catch(function(error){
            console.log(error)
          })
      }

    return ( <div className="final">
        <div className="left" id="resumePreview">
            <Preview contact={props.contact} education={props.education} experience={props.experience} skin={props.document.skinCode}></Preview>
        </div>
        <div className="right">
            <p>Download Resume As PDF</p>
            <a className="download" onClick={downloadResume}>download Resume</a>
            <Link className="btn back" to="/experience">Back</Link>
        </div>
    </div>);
}
 
function mapStateToProps(store){
    return store;
}

export default connect(mapStateToProps)(Final);