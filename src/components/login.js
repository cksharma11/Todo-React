import React from "react";

const LoginForm = () => {
  return (
    <div>
      <div>Login</div>
      <form method="POST" action="/login">
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;