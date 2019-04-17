import React, { Component } from "react";
import SignUpForm from "./components/signUp";
import LoginForm from "./components/login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/"  component={LoginForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signUp" component={SignUpForm} />
      </Router>
    );
  }
}

export default App;
