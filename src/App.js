import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import OurEmployess from "./components/OurEmployees/OurEmployess";
import SingleEmployee from "./components/SingleEmployee/SingleEmployee";
import MainNav from "./components/WebNav/MainNav";

function App() {
  return (
    <div>
      <Router>
        <MainNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/employees" component={OurEmployess} />
          <Route exact path="/employees/:id" component={SingleEmployee} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
