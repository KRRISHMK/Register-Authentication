import React from "react";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/pages/Login";

import Nav from "./components/pages/Nav"
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import LoginNew from "./components/pages/LoginNew";
import NewLogin from "./components/pages/NewLogin";
import HomeIco from "./components/pages/HomeIco";
import LogNew from './components/pages/LogNew';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
         <Route exact path="/login" component={Login} />
         <Route  path="/newlogin" exact render={(props) => <NewLogin/>} />
        <Route exact path="/nav" component={Nav} />
         <Route exact path="/home" component={Home} />
         <Route exact path="/homeico" component={HomeIco} />
        <Route exact path="/signin" component={SignIn} /> 
        <Route exact path="/loginnew" component={LoginNew} />
        <Route exact path="/lognew" component={LogNew} />
      </Switch>
    </Router>
  );
}
export default App;
