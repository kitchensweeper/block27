import React, { useState } from "react";
import axios from "axios";

function SignUpForm({ setToken, setUserInfo }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  async function handelSubmit(e) {
    e.preventDefault();
    try {
      const data = await axios.post(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        { username, password }
      );
      console.log(data.data);
      if (data.data.success) {
        setToken(data.data.token);
        setSuccess(true);
        setUsername("");
        setPassword("");
        setUserInfo({ username });
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error?.message && <p>Error Signing Up</p>}
      {success && <p>Signed Up Successfully</p>}
      <form onSubmit={handelSubmit}>
        <label>
          <p>Username: </p>
          <input
            type="text"
            value={username}
            maxLength={8}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password: </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button style={{ display: "block" }}>Submit</button>
      </form>
    </>
  );
}

export default SignUpForm;

// create a form element with two inputs and a button with the text "submit" nested inside. To keep the application accessible to screen readers, make sure to nest your input tags inside a parent label tag with appropriate text.
// Note: Nesting our inputs in this way helps eliminate the need to write name and for properties on our labels and inputs.
