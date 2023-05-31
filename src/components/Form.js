import React from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  return (
    <div className="forms">
      <div className="left-form">
        <h1>Board.</h1>
      </div>
      <div className="right-form">
        <div className="container">
          <h1>Sign In</h1>
          <p className="singin">sign in to your account</p>
          <br />
          <div className="logo">
            <div className="google">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <p>Sign in with Google</p>
            </div>
            <div className="Apple">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <p>Sign in with Apple</p>
            </div>
          </div>
          <br />
          <div className="main-form">
            <p>Email address</p>
            <input type="text" />
            <p>Password</p>
            <input type="password" />
            <br />
            <button className="submit" onClick={() => navigate("/All")}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
