// src/pages/ForgotPassword.jsx
import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('✅ Password reset email sent! Check your inbox.');
    } catch (error) {
      setMessage('❌ ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form onSubmit={handleReset} className="bg-white p-8 shadow-md rounded w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Forgot Password?</h2>
        <p className="text-sm text-gray-600 mb-4">Enter your email and we'll send a password reset link.</p>
        <input
          type="email"
          className="w-full mb-4 p-2 border rounded"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-medium"
        >
          Send Reset Link
        </button>
        {message && <p className="mt-4 text-center text-sm text-green-600">{message}</p>}
        <p className="mt-4 text-sm text-center text-gray-600">
          Back to <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
