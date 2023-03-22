import React from "react";
import { Route, Routes } from "react-router-dom";
import { Blog } from "./components/Screens/Blog";
import { Home } from "./components/Screens/Home";
import { Store } from "./components/Screens/Store";
import { Contact } from "./components/Screens/Contact";
// import { Layout } from './components/Layout/Layout'
import { Navigation } from "./components/Navigation/Navigation";
import { Footer } from "./components/Footer/Footer";

export const Router = () => {
  return (
    <div className="flex flex-col justify-between ">
      <Navigation />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/blogpage" element={<Blog />} />
        <Route path="/storepage" element={<Store />} />
        <Route path="/contactpage" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};
