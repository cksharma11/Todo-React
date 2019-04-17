import React from "react";

const SignUpForm = () => {
  return (
    <div>
      <div>Sign Up</div>
      <form method="POST" action="/signUp">
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignUpForm;
