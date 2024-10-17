import { submitForm, validateEmail } from "../utils";
import "./SignupForm.css";
import { useState } from "react";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitForm(username, email, password, passwordConfirm, clearForm);
  };
  const clearForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  };

  const isFormValid = () => {
    return username.length > 4 && validateEmail(email);
  };
  return (
    <div className="FormContainer">
      <form onSubmit={handleSubmit}>
        <h2>Signup Form</h2>
        <fieldset>
          <div className="Field">
            <label forhtml="username">
              Username <sup>*</sup>
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="Field">
            <label forhtml="email">
              Email <sup>*</sup>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Field">
            <label forhtml="password">
              Password <sup>*</sup>
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="Field">
            <label forhtml="passwordConfirm">
              Password Confirm <sup>*</sup>
            </label>
            <input
              id="passwordConfirm"
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit} disabled={!isFormValid()}>
            Sign In
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignupForm;
