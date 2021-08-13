import Home from "./Component/Home";
import Templates from "./Component/Templates";
import {BrowserRouter as Router,Redirect,Route,Switch} from "react-router-dom";
import Header from './Component/Header';
import Contact from "./Component/Contact";
import Education from "./Component/Education";
import Experience from "./Component/Experience";
import Login from "./Component/Login";
import Sigin from "./Component/Sigin";
import Final from "./Component/Final.jsx";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/template" component={Templates} exact></Route>
          <PrivateRoute path="/contact" component={Contact}></PrivateRoute>
          <PrivateRoute path="/education" component={Education}></PrivateRoute>
          <PrivateRoute path="/experience" component={Experience}></PrivateRoute>
          <Route path="/login" component={Login}></Route>
          <Route path="/signin" component={Sigin}></Route>
          <PrivateRoute path="/final" component={Final}></PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

function PrivateRoute(props){
  const auth = useSelector(state => state.firebase.auth);
    return (
      !isEmpty(auth) && isLoaded(auth) ? <Route component={props.component} path={props.path}></Route> : <Redirect to="/login"></Redirect>

    )
}

export default App;
