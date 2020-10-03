import React, { Component } from "react";
import axios from "axios";
import "./JokeList.css";
//box-shadow: 0 19px 38px rgba(0,0,0,0.3), 0 15px 12px rgba(0,0,0,0.5) inset 0 0 25px #7e557c2)
export default class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };
  constructor(props) {
    super();
    this.state = { jokes: [] };
  }
  async componentDidMount() {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com", {
        headers: { Accept: "application/json" },
      });
      jokes.push(res.data.joke);
    }
    this.setState({ jokes: jokes });
  }
  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span> Dad</span> Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt=""
          />
          <button className="JokeList-getmore">New Jokes</button>
        </div>
        <div className="JokeList-jokes">
          {this.state.jokes.map((j) => (
            <div>{j}</div>
          ))}
        </div>
      </div>
    );
  }
}
