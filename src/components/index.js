import React from "react";
import { Link } from "react-router-dom";

class Index extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/signUp">Sign Up</Link>
        </div>
      </div>
    );
  }
}

export default Index;
