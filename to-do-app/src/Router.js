import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Navigation from "./components/Layout/Navigation/Navigation";
import { Alltasks } from "./Screens/Alltasks";
import { Edittasks } from "./Screens/Edittasks";
import { Home } from "./Screens/Home";
import Notfound from "./Screens/Notfound";
import Register from "./Screens/Register";
import { Tasks } from "./Screens/Tasks";

export const Router = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Alltasks />} />
        <Route path="/task/:id" element={<Tasks />} />
        <Route path="/task/:id/edit" element={<Edittasks />} />
        <Route path="/register" element={<Register />} />
        <Route path="/not-found" element={<Notfound />} />

        {/* <Route path='*'  */}
      </Routes>
    </div>
  );
};
