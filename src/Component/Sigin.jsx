import React ,{useState} from 'react';
import {Card,CardContent,TextField,Button,CardActions,makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom"; 
import {connect} from "react-redux";
import {signin} from "../authActions";

const Sigin = (props) => {

    let useStyles = makeStyles({
        centerDivs : {
            height : "100vh",
            display : "flex",
            justifyContent : "center",
            width : "100vw"
        },
        crousal : {
            height : "10rem",
            backgroundColor : "lightgrey"
        },
        centerElem : {
            display:"flex",
            flexDirection : "column",
        },
        margin : {
            marginBottom : "0.5rem",
        },
        textalign : {
            textAlign : "center",
        },
        margintop : {
            margin : "25px",
        },
        card : {
            height : "450px",
            width : "400px",
            margin : "50px",
            textAlign : "center"
        }
    });
    let classes = useStyles();

    const [email,setemail] = useState("");
    const [pass,setpass] = useState("");    

    const handleSignin = async (e) => {
        let user = {
            email : email,
            pass : pass,
        }
        props.signin(user);
        props.history.push("/template");
    }


    return ( <div className={classes.centerDivs}>
        <Card className={classes.card}>
            <h2 className={classes.textalign , classes.margintop}>Create an account !</h2>
            <CardContent className={classes.centerElem} style={{marginLeft:"15px" , marginRight:"15px"}}>
                <TextField className={classes.margintop} label="Email" type="email" variant="outlined" value={email} onChange={(e) => setemail(e.target.value)} size="small"></TextField>
                <TextField className={classes.margintop} label="Password" type="password" variant="outlined" value={pass} onChange={(e) => setpass(e.target.value) } size="small"></TextField>
            </CardContent>
            <CardActions className={classes.centerElem}>
                <Button variant="contained" color="primary" onClick={handleSignin}>Sign in</Button>
            </CardActions>
            <p className={classes.margintop}>Already have an account ? <Link to="/login ">Login</Link></p>
        </Card>
    </div> );
}
 
function mapDispatchToProps(dispatch){
    return{
        signin : (user) => { dispatch(signin(user)) }
    }
}



export default connect(null,mapDispatchToProps)(Sigin);