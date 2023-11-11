import React from "react";
import GlobalStyle from "./globalStyles";
import AboutUs from "./pages/AboutUs";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work">
          <Route index element={<Work />} />
          <Route path=":id" element={<MovieDetail />} />
        </Route>
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
