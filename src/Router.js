import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import NavBar from "./components/misc/Navbar";
import Home from "./components/home/Home";
// import TopBar from "./components/TopBar";
// import Register from "./components/auth/Register";

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route exact path="/register" element={<Register />}></Route> */}
        {/* <Route exact path="/" element={<TopBar />}></Route> */}
      </Routes>
      {/* <Home /> */}
    </BrowserRouter>
  );
}

export default Router;
// {/* <Route exact path="/" element={<Home />}></Route> */}
// {/* <Route path="/login">Login</Route> */}
// {/* <Route path="/register">Register</Route> */}
