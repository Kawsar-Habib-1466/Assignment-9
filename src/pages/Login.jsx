import React, { useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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
      alert("Login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      alert(err.message);
    }
  };
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in with Google!");
      navigate(from, { replace: true });
    } catch (error) {
      alert(error.message);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="w-full mb-2 p-2 border" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required className="w-full mb-4 p-2 border" />
      <button type="submit" className="w-full bg-green-500 text-white py-2 mb-2">Login</button>
      <button
  type="button"
  onClick={handleGoogleLogin}
  className="w-full bg-red-500 text-white py-2 mb-2"
>
  Continue with Google
</button>

      <Link to="/register" className="text-blue-500 text-sm">Don't have an account? Register</Link>
    </form>
  );
};

export default Login;
