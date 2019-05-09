import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import Profile from "./components/Profile";
import Users  from './components/Users'
import { Route } from 'react-router-dom' //Redirect
import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Login /> */}
        {/* <Redirect exact path="/" push="/login" /> */}
        <Route path="/profile" component={Profile}></Route>
        <Route path="/users" component={Users}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/characters" component={CharacterList}></Route>
      </header>
    </div>
  );
}

export default App;
