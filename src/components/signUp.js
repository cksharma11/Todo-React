import React from "react";

const SignUpForm = () => {
  return (
    <div className="box">
      <div className="heading">Sign Up</div>
      <div>
        <form method="POST" action="/signUp">
          <input type="text" name="username" />
          <input type="password" name="password" />
          <input className="submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
