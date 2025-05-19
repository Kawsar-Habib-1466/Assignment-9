// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 text-center mt-[-100px]">
      <img src="/Untitled design.svg" alt="App Logo" className="w-[200px] h-[200px] mb-4" />
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-2">Oops! Page not found.</p>
      <p className="text-gray-500 mb-6">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
