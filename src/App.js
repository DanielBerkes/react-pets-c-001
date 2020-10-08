import React, { Component } from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route path="/dog" component={Dog} />
      </div>
    );
  }
}
