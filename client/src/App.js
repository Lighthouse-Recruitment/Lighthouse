import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./pages/Users";
import Recruiters from "./pages/Recruiters";
import NoMatch from "./pages/NoMatch";
import UserDetail from "./pages/UserDetail";
import HomePage from "./pages/HomePage";
import Studentlogin from "./pages/StudentLoginPage";
import Recruiterlogin from "./pages/RecruiterLoginPage";



const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/studentlogin" component={Studentlogin} />
        <Route exact path="/recruiterlogin" component={Recruiterlogin} />
        <Route exact path="/recruiters" component={Recruiters} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/:id" component={UserDetail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
