import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Accomdations from "./pages/Accomdations";


function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
