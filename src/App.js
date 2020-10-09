import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";
import Hater from "./Hater";

export default class App extends Component {
  render() {
    return (
      <div>
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
