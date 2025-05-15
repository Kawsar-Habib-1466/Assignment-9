// src/pages/CategoryViewAll.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import appsData from '@/data/apps_data.json';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const CategoryViewAll = () => {
  const { categoryName } = useParams();
  const filteredApps = appsData.filter(app => app.category === categoryName);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{categoryName} Apps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredApps.map(app => (
          <div key={app.id} className="bg-white rounded-lg shadow-sm border overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="h-40 bg-gray-100 relative">
              <img src={app.thumbnail} alt={app.name} className="w-full h-full object-cover object-top" />
              <div className="absolute top-3 right-3 bg-white/90 text-xs font-medium px-2 py-1 rounded-full">{app.category}</div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">{app.name}</h3>
              <div className="flex items-center mb-2 text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => {
                  const stars = Math.round(app.rating * 2) / 2;
                  return (
                    <i
                      key={i}
                      className={
                        stars >= i + 1
                          ? 'ri-star-fill'
                          : stars === i + 0.5
                          ? 'ri-star-half-fill'
                          : 'ri-star-line'
                      }
                    />
                  );
                })}
                <span className="text-sm text-gray-500 ml-1">{app.rating}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <i className="ri-download-line mr-1" />
                {app.downloads.toLocaleString()} downloads
              </div>
              <Link
                to={`/app/${app.id}`}
                className="mt-3 block text-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Get
              </Link>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default CategoryViewAll;
