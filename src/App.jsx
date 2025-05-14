import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from './pages/Register';
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import AppDetails from "./pages/AppDetails"; // 👈 create this if not yet
import PrivateRoute from "./components/PrivateRoute"; // 👈 fixed path

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* ✅ Protected route for app details */}
          <Route
            path="/app/:id"
            element={
              <PrivateRoute>
                <AppDetails />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
