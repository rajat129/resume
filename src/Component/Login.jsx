import React ,{useState} from 'react';
import {Card,CardContent,TextField,Button,CardActions,makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom"; 
import { connect } from 'react-redux';
import {login} from "../authActions";

const Login = (props) => {

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

    const onLogin = async (e) => {
        let user = {
            email : email,
            pass : pass,
        }
        props.login(user);
        props.history.push("/template");
    }


    return ( <div className={classes.centerDivs}>
        <Card className={classes.card}>
            <h1 className={classes.textalign , classes.margintop}>Login !!!</h1>
            <CardContent className={classes.centerElem} style={{marginLeft:"15px" , marginRight:"15px"}}>
                <TextField className={classes.margintop} label="Email" type="email" variant="outlined" value={email} onChange={(e) => setemail(e.target.value)} size="small"></TextField>
                <TextField className={classes.margintop} label="Password" type="password" variant="outlined" value={pass} onChange={(e) => setpass(e.target.value) } size="small"></TextField>
            </CardContent>
            <CardActions className={classes.centerElem}>
                <Button onClick={onLogin} variant="contained" color="primary">Login</Button>
            </CardActions>
            <p className={classes.margintop}>Dont have an account  ? <Link to="/signin">Signin</Link></p>
        </Card>
    </div> );
}
 
function mapStateToProps(store){
    // console.log(store);
}

function mapDispatchToProps(dispatch){
    return {
        login : (user) => {dispatch(login(user))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);