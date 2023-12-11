import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import DetailCourses from "./pages/detail-courses";
import Courses from "./pages/courses";
import Blog from "./pages/blog";
import Account from "./pages/account";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Router = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/detail/courses" element={<DetailCourses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Router;
