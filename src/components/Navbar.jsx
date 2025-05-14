import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { AuthContext } from "../providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Navbar = () => {
  const { user, loading } = useContext(AuthContext);
  console.log("🧠 Firebase User:", user);
console.log("📷 Google Photo URL:", user?.photoURL);

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out");
      navigate("/login");
    } catch (err) {
      alert("Logout failed");
    }
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-blue-500 border-b-2 border-blue-500"
                  : "hover:text-blue-500 transition"
              }
            >
              Apps   
            </NavLink>
            
            {!loading && user && (
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
            )}
          </div>

          {/* Profile and Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {!loading && user ? (
              <>
                {/* <img
                  src={user.photoURL || `https://i.pravatar.cc/40?u=${user.uid}`}
                  onError={(e) =>
                    (e.target.src = "https://i.pravatar.cc/40?u=default")
                  }
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                  title={user.displayName || "User"}
                /> */}
                <img
  src={user.photoURL}
  alt="Profile"
  referrerPolicy="no-referrer" // ✅ prevents Google image block
  className="w-8 h-8 rounded-full object-cover"
  title={user.displayName || "User"}
  onError={(e) => {
    e.target.src = "https://i.pravatar.cc/40?u=default";
  }}
/>

                <span className="hidden sm:inline text-sm">
                  {user.displayName}
                </span>
                <Button onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <Button onClick={() => navigate("/login")}>Login</Button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            {!loading && user && (
              <img
                src={user.photoURL || `https://i.pravatar.cc/40?u=${user.uid}`}
                onError={(e) =>
                  (e.target.src = "https://i.pravatar.cc/40?u=default")
                }
                alt="Profile"
                className="w-8 h-8 rounded-full"
                title={user.displayName || "User"}
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

            {!loading && user && (
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
            )}

            {!loading && user ? (
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
