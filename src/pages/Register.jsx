import React, { useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', photoURL: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, password, photoURL } = form;

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
      return alert("Password must have uppercase, lowercase, and be at least 6 characters.");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name, photoURL });
      alert("Registration successful!");
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required className="w-full mb-2 p-2 border" />
      <input name="photoURL" placeholder="Photo URL" onChange={handleChange} required className="w-full mb-2 p-2 border" />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full mb-2 p-2 border" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full mb-4 p-2 border" />
      <button type="submit" className="w-full bg-blue-500 text-white py-2">Register</button>
    </form>
  );
};

export default Register;
