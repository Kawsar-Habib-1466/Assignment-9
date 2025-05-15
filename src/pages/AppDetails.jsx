// src/pages/AppDetails.jsx
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import appsData from '../data/apps_data.json';
import { AuthContext } from '../providers/AuthProvider';

const AppDetails = () => {
  const { id } = useParams();
  const app = appsData.find((a) => a.id === id);
  const { user } = useContext(AuthContext);

  const [isInstalled, setIsInstalled] = useState(false);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);
  const [localReviews, setLocalReviews] = useState(app?.reviews || []);

  if (!app) return <div>App not found</div>;

  const handleInstallToggle = () => setIsInstalled((prev) => !prev);

  const handleSubmitReview = () => {
    if (!isInstalled) return alert("Please install the app before reviewing.");

    const newReview = {
      user: user?.displayName || 'Anonymous',
      rating,
      comment: review,
    };

    setLocalReviews([...localReviews, newReview]);
    setReview('');
    setRating(5);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
  {/* Banner */}
  <div className="rounded-lg overflow-hidden shadow-md mb-6">
    <img
      src={app.banner}
      alt={app.name}
      className="w-full h-64 object-cover"
    />
  </div>

  {/* Title & Meta */}
  <div className="mb-6">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{app.name}</h1>
    <p className="text-gray-500 text-sm mb-4">By {app.developer}</p>
    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
      <span className="flex items-center gap-1"><i className="ri-star-fill text-yellow-400" /> {app.rating}</span>
      <span className="flex items-center gap-1"><i className="ri-download-line" /> {app.downloads.toLocaleString()} downloads</span>
      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">{app.category}</span>
    </div>
  </div>

  {/* Description */}
  <div className="mb-8">
    <p className="text-gray-700 leading-relaxed">{app.description}</p>
  </div>

  {/* Install Button */}
  <div className="mb-8">
    <button
      onClick={handleInstallToggle}
      className={`px-6 py-2 font-semibold text-white rounded-md shadow-md transition ${
        isInstalled ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
      }`}
    >
      {isInstalled ? 'Uninstall' : 'Install'}
    </button>
  </div>

  {/* Review Submission */}
  {isInstalled && (
    <div className="bg-gray-50 p-6 rounded-lg shadow mb-10">
      <h2 className="text-xl font-semibold mb-4">Submit a Review</h2>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Your review..."
        className="w-full border border-gray-300 rounded p-3 mb-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={4}
      />
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(Math.max(1, Math.min(5, Number(e.target.value))))}
        className="w-full border border-gray-300 rounded p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Rating (1 to 5)"
      />
      <button
        onClick={handleSubmitReview}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded font-medium"
      >
        Submit
      </button>
    </div>
  )}

  {/* Review List */}
  <div className="mt-10">
    <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
    {localReviews.length > 0 ? (
      localReviews.map((r, i) => (
        <div key={i} className="bg-white border border-gray-200 p-4 rounded mb-3 shadow-sm">
          <p className="font-semibold text-gray-800 mb-1">{r.user}</p>
          <p className="text-yellow-500 mb-1">Rating: {r.rating} ⭐</p>
          <p className="text-gray-700">{r.comment}</p>
        </div>
      ))
    ) : (
      <p className="text-gray-500">No reviews yet.</p>
    )}
  </div>
</div>

  );
};

export default AppDetails;
