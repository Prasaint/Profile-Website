import React from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "./Page/All";

function App() {
  return (
    <Router>
      <div className=" font-sans  ">
        <Header />
        <All />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
