import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { AuthContext } from "../providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from 'react-toastify';
const Navbar = () => {
  const { user, loading } = useContext(AuthContext);
  console.log("🧠 Firebase User:", user);
console.log("📷 Google Photo URL:", user?.photoURL);

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out");
      navigate("/login");
    } catch (err) {
      toast.error("Logout failed");
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center  text-2xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src="/Untitled design.svg" alt="logo" className="w-[100px] h-[100px]" />
            <span className="hidden sm:inline  ml-[-17px] text-[25px] font-bold text-[#013269]">AppHub</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 text-lg">
          <NavLink
  to="/"
  className={({ isActive }) =>
    `px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ${
      isActive
        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
        : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
    }`
  }
>
  <i className="ri-apps-2-line mr-1" /> Apps
</NavLink>

{!loading && user && (
  <NavLink
    to="/profile"
    className={({ isActive }) =>
      `px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ${
        isActive
          ? "bg-gradient-to-r from-green-500 to-lime-500 text-white shadow-lg"
          : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-lime-500"
      }`
    }
  >
    <i className="ri-user-3-line mr-1" /> My Profile
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
              to="/"
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
