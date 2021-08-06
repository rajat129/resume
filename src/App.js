import Home from "./Component/Home";
import Templates from "./Component/Templates";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Header from './Component/Header';
import Contact from "./Component/Contact";
import Education from "./Component/Education";
import Experience from "./Component/Experience";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/template" component={Templates} exact></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/education" component={Education}></Route>
          <Route path="/experience" component={Experience}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
