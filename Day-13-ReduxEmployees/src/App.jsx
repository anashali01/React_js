import React from "react";
import Header from "./componnets/Header";
import { Route, Routes } from "react-router";
import Add_Emp from "./pages/Add_Emp";
import View_Emp from "./pages/View_Emp";
import Home from "./pages/Home";
import SignUp from "./pages/signUp";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-emp" element={<Add_Emp />} />
        <Route path="/view-emp" element={<View_Emp />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
