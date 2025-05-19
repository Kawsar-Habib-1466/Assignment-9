// src/pages/EditorsChoice.jsx
import React from 'react';
import appsData from '@/data/apps_data.json';
import { Link } from 'react-router-dom';

const EditorsChoice = () => {
   // You can manually tag editor's picks in JSON too
   const topApps = appsData.filter(app => app.editorsChoice);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Editor’s Choice</h1>
      <p className="mb-8 text-gray-600 text-sm">
        These apps are handpicked by our editors for their quality, performance, and user satisfaction.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topApps.map(app => (
          <div key={app.id} className="bg-white border rounded shadow-sm hover:shadow-md transition">
            <img src={app.thumbnail} alt={app.name} className="h-40 w-full object-cover rounded-t" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{app.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{app.description.slice(0, 80)}...</p>
              <div className="text-sm text-gray-500 mb-2">
                ⭐ {app.rating} | ⬇ {app.downloads}
              </div>
              <Link
                to={`/app/${app.id}`}
                className="inline-block mt-2 text-blue-600 hover:underline text-sm"
              >
                View App →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsChoice;
