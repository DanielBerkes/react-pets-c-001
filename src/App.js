import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";
import Hater from "./Hater";

export default class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">About</Link>
          <Link to="/dog">Dog</Link>
          <Link to="/contact">Contact</Link>
          <a href="/dog"> Dog </a>
          <a href="/contact"> Contact </a>
          <a href="/"> About </a>
        </nav>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/dog" component={Dog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/dog/hater" component={Hater} />
        </Switch>
      </div>
    );
  }
}
