import React, { useState } from "react";
import axios from "axios";

function Authenticate({ token, userInfo }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  console.log("calling authenticate");

  async function handleClick() {
    console.log("authenticating...");
    try {
      const result = await axios(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(result);
      if (result.data.success) {
        setSuccess(true);
        console.log(result.data.data.username);
      }
      //jwt malformed is the default message from the browser console
      if (result.data.message === "jwt malformed") {
        throw new Error("invalid token");
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }
  return (
    <div>
      <h2>Authenticate</h2>
      {error && <p>{error}, please try again...</p>}
      {success && <p>Authenticated successfully! <br/>Logged in as: userInfo</p>}
      <button onClick={handleClick}>Authenticate Here</button>
    </div>
  );
}

export default Authenticate;
