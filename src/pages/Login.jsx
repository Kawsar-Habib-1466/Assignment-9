import React, { useState } from 'react';
import { auth } from '../firebase/firebase.config';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import logo from '/public/Logo.svg';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      alert('Login successful!');
      navigate(from, { replace: true });
    } catch (err) {
      alert(err.message);
    }
  };

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert('Logged in with Google!');
      navigate(from, { replace: true });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <form className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl" onSubmit={handleSubmit}>
        {/* Logo + App Name */}
        <div className="flex flex-col items-center mb-6">
        <h2 className="text-lg font-semibold text-center text-gray-700 mb-4">Welcome Back </h2>
        <h1 className="text-xl font-bold text-gray-800 mb-[-1px]">AppHub</h1>
          <img src={logo} alt="App Logo" className="w-[100px] h-[100px]" />
          
        </div>

        

        <div className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold mt-6 transition"
        >
          Login
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-white border text-gray-700 font-medium py-2 mt-3 rounded flex items-center justify-center gap-2 hover:shadow-md transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline font-medium">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
