import React, { useState } from "react";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Authenticate from "./components/Authenticate/Authenticate";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  return (
    <>
      <div className="container">
        <SignUpForm setToken={setToken} setUserInfo={setUserInfo}></SignUpForm>
        <Authenticate token={token} userInfo={userInfo}></Authenticate>
      </div>
    </>
  );
}

export default App;
