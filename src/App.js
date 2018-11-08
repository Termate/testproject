import React, { Component } from "react";
import People from "./components/people";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <People />
      </main>
    );
  }
}

export default App;
