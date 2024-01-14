import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Shop from "./components/pages/Shop";
import Nav from "./components/Nav";
import Login from "./components/pages/Login"
import Startup from "./components/pages/Startup"
import Info from "./components/pages/Info"

function App() {
  return(
  <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Profile" exact element={<Profile />}></Route>
        <Route path="/Shop" exact element={<Shop />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Startup />}></Route>
        <Route path="/info" exact element={<Info />}></Route>

      </Routes>
    </Router>
  </>
  );
}

export default App;
