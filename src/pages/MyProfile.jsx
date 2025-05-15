// src/pages/MyProfile.jsx
import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      setMessage('Profile updated successfully ✅');
    } catch (err) {
      setMessage('❌ Error updating profile: ' + err.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-md p-6 rounded">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      <div className="mb-4">
        <img
          src={user?.photoURL || 'https://i.pravatar.cc/100?u=default'}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-2"
        />
        <p><strong>Email:</strong> {user?.email}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Photo URL</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={photoURL}
            onChange={e => setPhotoURL(e.target.value)}
          />
        </div>

        <button
          onClick={handleUpdate}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>

        {message && <p className="text-sm text-green-600 mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default MyProfile;
