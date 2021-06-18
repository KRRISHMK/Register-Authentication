import React from "react";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/pages/Nav";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import NewLogin from "./components/pages/NewLogin";
import Job from "./components/pages/Job";


import Dropdownn from "./components/pages/Dropdown";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/newlogin" exact render={(props) => <NewLogin />} />
        <Route exact path="/nav" component={Nav} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={SignIn} />
        <Route exact path="/jobs" component={Job} />
        <Route exact path="/drop" component={Dropdownn} />
      </Switch>
    </Router>
  );
}
export default App;
