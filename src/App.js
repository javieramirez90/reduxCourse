import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Login from "./components/Login/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Login /> */}
        <Profile />
      </header>
    </div>
  );
}

export default App;
