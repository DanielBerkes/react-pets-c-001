import React from "react";
import GithubUserInfo from "./GithubUserInfo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GithubUserInfo username="facebook" />
      <GithubUserInfo username="colt" />
      <GithubUserInfo username="DanielBerkes" />
    </div>
  );
}

export default App;
