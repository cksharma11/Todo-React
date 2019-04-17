import React from "react";

const LoginForm = () => {
  return (
    <div className="box">
      <div className="heading">Login</div>
      <form method="POST" action="/login">
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;