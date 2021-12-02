import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/misc/Navbar";
import Home from "./components/home/Home";
import TopBar from "./components/TopBar";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/admin" element={<TopBar />}></Route>
      </Routes>
      <NavBar />
      <Home />
    </BrowserRouter>
  );
}

export default Router;
// {/* <Route exact path="/" element={<Home />}></Route> */}
// {/* <Route path="/login">Login</Route> */}
// {/* <Route path="/register">Register</Route> */}
