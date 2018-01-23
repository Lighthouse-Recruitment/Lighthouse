import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./pages/Users";
import Recruiters from "./pages/Recruiters";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Recruiters} />
        <Route exact path="/recruiters" component={Recruiters} />
        // <Route exact path="/users" component={Users} />
        // <Route exact path="/users/:id" component={Users} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
