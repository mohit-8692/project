import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/navbar/home/Home";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
          <Routes>
            {""}
            <Route exact path="/Login" element={<Signin />}>in sign in page</Route>
            <Route exact path = "/signup" element = {<Signup/>}>in sign up page </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
