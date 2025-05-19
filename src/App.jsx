import React from "react";
import { BrowserRouter, Routes, Route, useLocation, matchRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from './pages/Register';
import Home from "./pages/Home";
import Login from "./pages/Login";
import AppDetails from "./pages/AppDetails";
import PrivateRoute from "./components/PrivateRoute";
import CategoryViewAll from "./pages/CategoryViewAll";
import Footer from "./components/Footer";
import MyProfile from "./pages/MyProfile";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import EditorsChoice from "./pages/EditorsChoice";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Define valid route patterns
const routeDefinitions = [
  { path: "/" },
  { path: "/login" },
  { path: "/register" },
  { path: "/profile" },
  { path: "/category/:categoryName" },
  { path: "/app/:id" },
];

const AppRoutes = () => {
  const location = useLocation();

  // Detect if current route is NOT matched (404)
  const is404 = !matchRoutes(routeDefinitions, location);

  // Hide footer on 404 and on login/register
  // const hideFooterRoutes = ["/login", "/register"];
  const hideFooter = is404;

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/app/:id"
            element={
              <PrivateRoute>
                <AppDetails />
              </PrivateRoute>
            }
          />
          <Route path="/category/:categoryName" element={<CategoryViewAll />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/editors-choice" element={<EditorsChoice />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
