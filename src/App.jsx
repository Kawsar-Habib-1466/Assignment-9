import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages (create these in /pages)
import Home from "./pages/Home";
import Login from "./pages/Login";



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
    
         
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
