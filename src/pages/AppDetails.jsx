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
    <div className="max-w-4xl mx-auto py-8">
      <img src={app.banner} alt={app.name} className="w-full h-64 object-cover rounded mb-6" />
      <h1 className="text-3xl font-bold mb-2">{app.name}</h1>
      <p className="mb-4 text-gray-600">By {app.developer}</p>

      <div className="flex gap-4 text-sm text-gray-700 mb-6">
        <span>⭐ {app.rating}</span>
        <span>⬇ {app.downloads.toLocaleString()} downloads</span>
        <span className="bg-gray-200 px-2 py-1 rounded">{app.category}</span>
      </div>

      <p className="mb-6">{app.description}</p>

      <button
        onClick={handleInstallToggle}
        className={`px-6 py-2 rounded text-white ${isInstalled ? 'bg-red-500' : 'bg-green-500'}`}
      >
        {isInstalled ? 'Uninstall' : 'Install'}
      </button>

      {isInstalled && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Submit a Review</h2>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Your review..."
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(Math.max(1, Math.min(5, Number(e.target.value))))}
            className="w-full p-2 border rounded mb-2"
          />
          <button onClick={handleSubmitReview} className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Reviews</h2>
        {localReviews.length > 0 ? (
          localReviews.map((r, i) => (
            <div key={i} className="border p-3 rounded mb-2">
              <p className="font-semibold">{r.user}</p>
              <p className="text-yellow-500">Rating: {r.rating}</p>
              <p>{r.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default AppDetails;
