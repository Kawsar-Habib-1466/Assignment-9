import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const Navbar = () => {
  const user = {
    name: "John Doe",
    photoURL: "https://randomuser.me/api/portraits/men/75.jpg",
  }; // Replace with Firebase user
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    alert("Logged out");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 text-2xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src="/vite.svg" alt="logo" className="w-8 h-8" />
            <span className="hidden sm:inline">AppStore</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 text-lg">
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-blue-500 border-b-2 border-blue-500"
                  : "hover:text-blue-500 transition"
              }
            >
              Apps
            </NavLink>
            
          </div>

          {/* Profile + Logout (Desktop/Tablet) */}
          <div className="hidden md:flex items-center gap-4">
            {user && (
              <> 
              <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-blue-500 border-b-2 border-blue-500"
                  : "hover:text-blue-500 transition"
              }
            >
              My Profile
            </NavLink>
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                  title={user.name}
                />
                <Button onClick={handleLogout}>Logout</Button>
              </>
            )}
          </div>

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden flex items-center gap-3">
            {user && (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-8 h-8 rounded-full"
                title={user.name}
              />
            )}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl focus:outline-none"
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 py-4 text-lg">
            <NavLink
              to="/apps"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-blue-500 border-b border-blue-500"
                  : "hover:text-blue-500 transition"
              }
            >
              Apps
            </NavLink>
            <NavLink
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-blue-500 border-b border-blue-500"
                  : "hover:text-blue-500 transition"
              }
            >
              My Profile
            </NavLink>

            {user ? (
              <Button
                className="mx-4"
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
              >
                Logout
              </Button>
            ) : (
              <Button
                className="mx-4"
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/login");
                }}
              >
                Login
              </Button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
